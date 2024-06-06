import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Aesthetix Store",
  description: "Shop the latest trends in premium-quality clothing at Aesthetix. Our online store features a wide selection of stylish apparel and accessories, crafted for those who appreciate timeless elegance and modern sophistication. Discover versatile collections designed to elevate your wardrobe, from classic T-shirts and tailored shirts to cozy hoodies and unique merch.",
  keywords: "Aesthetix clothing, premium clothing, stylish apparel, online clothing store, modern fashion, timeless elegance, comfortable hoodies, versatile T-shirts, unique merch, free shipping",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
