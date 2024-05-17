export interface SignupDto {
  phone: string;
}

export interface SigninDto {
  phone: string;
}

export interface VerifyDto {
  phone: string;
  code: string;
}
