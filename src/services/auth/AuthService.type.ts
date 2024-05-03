export interface RegisterDto {
  phoneNumber: string;
}

export interface VerifyDto {
  phoneNumber: string;
  code: string;
}
