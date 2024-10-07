import { removeAuthToken, removeUser } from "@/redux/reducers/authSlice";
import { store } from "@/redux/store";
import { ApiCallParams, ErrorResponse } from "@/utils/types";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

/**
 * Returns a function that can be used to call an API.
 * This function wraps the axios instance.
 */
const useAxios = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const callApi = useCallback(
    async ({ headers, ...rest }: ApiCallParams): Promise<unknown> => {
      try {
        const { authToken } = store.getState().app.user;

        const { data } = await axios({
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authToken}`,
            ...headers,
          },
          ...rest,
          validateStatus: (status) => status >= 200 && status <= 299,
        });

        return data;
      } catch (err) {
        const axiosError = err as AxiosError;

        if (axiosError.isAxiosError) {
          if (axiosError.code === "ERR_NETWORK") {
            dispatch(removeAuthToken());
            dispatch(removeUser());
            router.push("/");
            toast.error(
              "Server is under maintenance mode. Please try again later.",
            );

            return;
          } else if (axiosError.response?.status === 401) {
            router.push("/");
            dispatch(removeUser());
            dispatch(removeAuthToken());

            const errorResponse = axiosError.response?.data as ErrorResponse;
            toast.error(errorResponse.message || "Unauthorized");
          } else if (axiosError.response?.status === 503) {
            router.push("/404");
          }
        }

        // Re-throw the error for further handling
        throw axiosError;
      }
    },
    [dispatch, router], // Added dependencies for useCallback
  );

  return callApi;
};

export default useAxios;
