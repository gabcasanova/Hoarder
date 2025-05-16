import { getTranslations } from "next-intl/server";
import { auth } from "../../../auth";

export default async function Page() {
  const session = await auth()     // Get logged user info.
  if (!session?.user) return null  // Show nothing if used not logged in.

  const t = await getTranslations()
  
  return (
    <div>
      <div className="m-5 text-center">
        <p className="mb-2 text-2xl">{ t("dashboard.welcome") }</p>
        <p className="text-4xl font-bold">{session.user.name}</p>
      </div>
    </div>
  );
}