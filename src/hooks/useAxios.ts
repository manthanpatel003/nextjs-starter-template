import { removeAuthToken, removeUser } from '@/redux/reducers/authSlice';
import { store } from '@/redux/store';
import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

// Define the type for the API call parameters
interface ApiCallParams extends AxiosRequestConfig {
  headers?: Record<string, string>; // Optional headers
}

/**
 * Returns a function that can be used to call an API.
 * This function wraps the axios instance.
 */
const useAxios = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const callApi = useCallback(
    async ({ headers, ...rest }: ApiCallParams): Promise<any> => {
      try {
        const idToken = store.getState().user;

        const { data } = await axios({
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${idToken?.authToken}`,
            ...headers,
          },
          ...rest,
          validateStatus: (status) => status >= 200 && status <= 299,
        });

        return data;
      } catch (err: any) {
        // Use `any` if the error type is not known
        if (err?.code === 'ERR_NETWORK') {
          dispatch(removeAuthToken());
          dispatch(removeUser());
          router.push('/');
          toast.error(
            'Server is under maintenance mode. Please try after sometime',
          );

          return;
        } else if (err.response?.status === 401) {
          router.push('/');
          dispatch(removeUser());
          dispatch(removeAuthToken());
          toast.error(err?.response?.data?.message || 'Unauthorized');
        } else if (err.response?.status === 503) {
          router.push('/404');
        }
        throw err;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [dispatch, router], // Added dependencies for useCallback
  );

  return callApi;
};

export default useAxios;
