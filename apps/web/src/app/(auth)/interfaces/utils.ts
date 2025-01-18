export interface SigninResponse {
  user: User;
  refreshToken: string;
  accessToken: string;
}

export interface User {
  // id: number;
  name: string;
  email: string;
  // password: string;
  createdAt: string;
  updatedAt: string;
}
