"use server";
import { formSchema } from "./schema";
import { toast } from "sonner";
import { z } from "zod";
import { FormDataReturn } from "@/types";

export default async function contactAction(_prevState: any, params: FormData) {
  console.log("Action start :");
  for (let i = 0; i < 1000000; i++) {
    let temp = i * i;
  }

  console.log(" form schema :");

  const validation = await formSchema.safeParseAsync({
    firstName: params.get("first-name"),
    lastName: params.get("last-name"),
    email: params.get("email"),
    username: params.get("username"),
    phoneNumber: params.get("phone"),
    message: params.get("message"),
    service: params.get("service"),
  });
  if (validation.success) {
    return {
      success: validation.success,
      data: validation.data,
      errors: false,
    };
  } else {
    return {
      success: validation.success,
      errors: validation.error.issues,
      data: validation.data,
    };
  }
}
