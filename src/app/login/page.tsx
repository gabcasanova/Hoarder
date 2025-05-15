import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTranslations } from "next-intl/server";
import React, { FormEvent } from "react";
import LoginForm from "./LoginForm";

export default async function Page() {
	const t = await getTranslations()

	return (
		<div className="flex flex-col flex-1 h-full items-center justify-center">
			<div className="p-3 w-[500px] rounded-2xl bg-hoarder-secondary">
				{/* Welcome Text */}
				<div className="m-8 text-white">
					<h1 className="m-5 text-5xl text-center">
						<strong>{ t("login.signin") }</strong>
					</h1>
					<p className="text-center">{ t("login.desc") }</p>
				</div>

				{/* Login Form */}
				<LoginForm />
			</div>
		</div>
	);
}