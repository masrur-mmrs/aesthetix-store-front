import { Metadata } from "next"

import SearchResultsTemplate from "@modules/search/templates/search-results-template"

import { search } from "@modules/search/actions"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

export const metadata: Metadata = {
  title: "Search",
  description: "Find exactly what you're looking for with ease at Aesthetix. Use our advanced search feature to explore our extensive collection of premium clothing and accessories. Whether you're seeking the perfect T-shirt, tailored shirt, cozy hoodie, or trendy merch, Aesthetix has it all. Discover stylish apparel designed for comfort and elegance. Shop now and enjoy seamless browsing with personalized search results at Aesthetix.",
  keywords: "Aesthetix search, find clothing, premium apparel search, stylish fashion, high-quality clothing, modern fashion search, comfortable hoodies, tailored shirts, unique merch, wardrobe essentials"
}

type Params = {
  params: { query: string; countryCode: string }
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
}

export default async function SearchResults({ params, searchParams }: Params) {
  const { query } = params
  const { sortBy, page } = searchParams

  const hits = await search(query).then((data) => data)

  const ids = hits
    .map((h) => h.objectID || h.id)
    .filter((id): id is string => {
      return typeof id === "string"
    })

  return (
    <SearchResultsTemplate
      query={query}
      ids={ids}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
