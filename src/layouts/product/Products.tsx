import { useGetAllProductsQuery } from "../../app/api/ProductSpot/Product";
import type { Product as ApiProduct } from "../../app/api/ProductSpot/Product";

// Keep this type for local UI needs (emoji, badge, fullDescription)
export type Product = ApiProduct & {
  emoji?: string;
  badge?: string;
  fullDescription?: string;
};

// Emoji map by category for fallback display
const EMOJI_MAP: Record<string, string> = {
  "Office Supplies": "📎",
  "Student Materials": "📚",
  "Paper Products": "🗒️",
  "Printing Services": "🪪",
  default: "📦",
};

interface ApiResponse {
  data?: ApiProduct[];
}

export function useProducts() {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  const rawList = Array.isArray(data)
    ? data
    : ((data as unknown as ApiResponse)?.data ?? []);

  const products: Product[] = rawList.map((p: ApiProduct) => ({
    ...p,
    emoji: EMOJI_MAP[p.category] ?? EMOJI_MAP["default"],
    fullDescription: p.description,
  }));

  return { products, isLoading, isError };
}
