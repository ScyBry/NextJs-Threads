"use server";

import { connectToDB } from "@/lib/mongoose";

export async function UpdateUser(): Promise<void> {
  connectToDB();
}
