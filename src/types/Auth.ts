export interface RegisterType {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface jwtUserDecode {
  iat: number;
  ext: number;
  username: string;
  email: string;
  id: string;
  role: string;
}