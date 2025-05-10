'use client'

// Searchbox that is used in the navbars.

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbox() {
  const t = useTranslations()
  const router = useRouter()

  const [query, setQuery] = useState("")

  function searchQuery() {
    router.push(`/search?${new URLSearchParams({query: query})}`)
  }

  return (
    <div className="flex items-center">
      {/* Text Field */}
      <input className="hoarderTextbox w-[500px]"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchQuery()} 
        placeholder={t("navbar.searchbox")} 
        type="text"
        id="searchbox"
        value={query}
        autoComplete="off"
      />

      {/* Button */}
      <div className="ml-[-50px]">
        <button className="h-[40px] w-[40px] hoarderButton text-white"
                onClick={searchQuery}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
      </div>
    </div>
  );
}