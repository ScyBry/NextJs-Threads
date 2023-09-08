import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Minimum three characters" })
    .max(30, { message: "Maximum three characters" }),
  username: z
    .string()
    .min(3, { message: "Minimum three characters" })
    .max(30, { message: "Maximum three characters" }),
  bio: z
    .string()
    .min(3, { message: "Minimum three characters" })
    .max(1000, { message: "Maximum three characters" }),
});
