import * as yup from "yup";
import type { VerifyDto } from "@/services/auth/AuthService.type";

const schema = yup
  .object<VerifyDto>({
    phone: yup
      .string()
      .matches(/((0?9)|(\+?989))\d{9}/g)
      .required(),
    code: yup.string(),
  })
  .required();

export default schema;
