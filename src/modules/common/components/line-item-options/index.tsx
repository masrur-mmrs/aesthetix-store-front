import { ProductVariant } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type LineItemOptionsProps = { variant: ProductVariant, className?: string}

const LineItemOptions = ({ variant }: LineItemOptionsProps, className?: string) => {
  return (
    <Text className={`inline-block txt-medium w-full overflow-hidden text-ellipsis ${className}`}>
      Variant: {variant.title}
    </Text>
  )
}

export default LineItemOptions
