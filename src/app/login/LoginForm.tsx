'use client'

import { useTranslations } from "next-intl"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { authenticate } from "@/lib/actions"
import { useActionState } from "react"

export default function LoginForm() {
  const t = useTranslations()

  const callbackUrl = "/dashboard"
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  )

  return (
    <form action={ formAction } className="mr-3">
      {/* Email field */}
      <input 
        className="hoarderTextbox w-full" 
        type="text" 
        id="email" 
        name="email" 
        placeholder={ t("login.form.email") }
        autoComplete="off"
      />
      <br />

      {/* Password field */}
      <input 
        className="hoarderTextbox w-full" 
        type="password" 
        id="password" 
        name="password" 
        placeholder={ t("login.form.password") }
      />

      {/* Show error */}
      {errorMessage && (
        <p className="text-center text-gray-300">{ errorMessage }</p>
      )}

      <input type="hidden" name="redirectTo" value={ callbackUrl } />

      {/* Submit Button */}
      <div className="text-center mt-15">
        <button className="hoarderButton w-20" type="submit"><FontAwesomeIcon icon={faRightFromBracket} /></button>
      </div>
    </form>
  )
}
