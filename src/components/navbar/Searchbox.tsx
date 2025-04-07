'use client'

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function Searchbox() {
  const t = useTranslations()
  const [query, setQuery] = useState("")

  return (
    <div className="flex items-center">
      <input className="hoarderTextbox w-[500px]"
        onChange={(e) => setQuery(e.target.value)} 
        placeholder={t("navbar.searchbox")} 
        type="text"
        id="searchbox"
        value={query}
      />

      <div className="ml-[-50px]">
        <Link href={`/search/${encodeURIComponent(query)}`}>
          <button className="h-[40px] w-[40px] hoarderButton text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </button>
        </Link>
      </div>
    </div>
  );
}