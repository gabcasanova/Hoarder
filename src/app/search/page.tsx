// Search results page;:
// Displays information queried from the MovieDB using the API.

import { Movie, searchMovie } from "@/lib/moviedb";
import Image from "next/image";

type Props = {
  params: { query: string }
}

export default async function Page({ 
  searchParams 
}: {
  searchParams: {[key: string]: string | string[] | undefined}
}) {
  const query = searchParams.query as string;
  const searchResults = await searchMovie({query: {name: query, language: "pt-br"}})
  
  const posterPath = "https://image.tmdb.org/t/p/w500"

  async function createMovies() {
    return (
      searchResults?.map((movie: Movie, index) => (
        <div 
          className="p-1 rounded-2xl
                     bg-hoarder-primary"
          key={index}>
          <Image 
            className="rounded-2xl
                       cursor-pointer
                       hover:brightness-120 duration-300
                       hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,0.2)]"
            src={`${posterPath}${movie.poster_path}`} 
            width={500}
            height={500}
            alt={`${movie.title}`}
          />
          <p className="m-2 text-center text-[11px]" >{`${movie.title}`}</p>
        </div>
      ))
    )
  }

  return (
    <div>
      <h1 className="m-5 mb-15 text-2xl text-center">
        <strong>Results for:</strong> { decodeURI(query) }
      </h1>

      <div className="m-auto max-w-[1400px] grid grid-cols-3 xl:grid-cols-7 gap-4">
        { createMovies() }
      </div>
    </div>
  );
}