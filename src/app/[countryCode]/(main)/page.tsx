import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import InfiniteSlider from "@modules/home/components/infiniteslider"

import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

const openGraph: OpenGraph = {
    type: "website",
    title: "Aesthetix Plus",
    url: "https://www.aesthetixplus.org",
    siteName: "Aesthetix Plus",
    images: [{
      url: "https://aesthetix.s3.us-east-2.amazonaws.com/Screenshot+2024-04-07+at+5.07.15%E2%80%AFAM.png",
    }],
}

export const metadata: Metadata = {
  title: "Aesthetix | Premium Clothing & Modern Style for Every Occasion",
  description:
    "Welcome to Aesthetix, your destination for premium clothing that blends timeless elegance with modern style. Explore our curated collections of high-quality T-shirts, sophisticated shirts, cozy hoodies, and unique merch, all crafted to elevate your wardrobe. Enjoy a seamless shopping experience and discover the perfect pieces for every occasion. Elevate your style with Aesthetix, where sophistication meets comfort in every stitch. Discover premium-quality clothing crafted for modern individuals who appreciate timeless elegance and impeccable design. Explore our versatile collection today.",
  openGraph: openGraph,
  keywords: "Aesthetix clothing, premium apparel, modern fashion, stylish T-shirts, refined shirts, cozy hoodies, unique merch, high-quality clothing, wardrobe essentials, free shipping"
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="sm:flex sm:justify-center md:justify-center">
      </div>
      <div className="py-2">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
        <InfiniteSlider/>
      </div>
    </>
  )
}
