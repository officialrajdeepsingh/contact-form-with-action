import { formSchema } from "@/components/form/schema";
import { z } from "zod";

export interface FormDataReturn {
  success: true | false;
  data?: z.infer<typeof formSchema>;
  errors?: z.ZodIssue[];
}
