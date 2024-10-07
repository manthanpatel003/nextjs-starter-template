export type UserData = {
  id: string;
  name: string;
  email: string;
};

export type UserState = {
  authToken: string | null;
  userData: UserData | null;
};
