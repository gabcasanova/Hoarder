'use server'

import { AuthError } from "next-auth";
import { signIn } from "../../auth";
import { getTranslations } from "next-intl/server";

// Login Form Authenticate Procedure
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const t = await getTranslations()

  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return t("login.form.error"); // Invalid credentials.
        default:
          return t("login.form.wrong"); // Something went wrong.
      }
    }
    throw error;
  }
}