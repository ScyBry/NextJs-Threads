import * as z from "zod";

export const ThreadValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  thread: z
    .string()
    .min(3, { message: "Minimum three characters" })
    .max(30, { message: "Maximum three characters" })
    .nonempty(),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  thread: z
    .string()
    .min(3, { message: "Minimum three characters" })
    .max(30, { message: "Maximum three characters" })
    .nonempty(),
});
