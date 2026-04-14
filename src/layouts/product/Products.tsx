import { useGetAllProductsQuery } from "../../app/api/ProductSpot/Product";
import type { Product as ApiProduct } from "../../app/api/ProductSpot/Product";

// Extended type for local UI needs
export type Product = ApiProduct & {
  emoji?: string;
  fullDescription?: string;
};

// Emoji map by category
// const EMOJI_MAP: Record<string, string> = {
//   "Office Supplies": "📎",
//   "Student Materials": "📚",
//   "Paper Products": "🗒️",
//   "Printing Services": "🪪",
//   default: "📦",
// };

export function useProducts() {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  const rawList = data?.items ?? [];

  const products: Product[] = rawList.map((p: ApiProduct) => ({
    ...p,
    fullDescription: p.description,
  }));

  return { products, total: data?.total ?? 0, isLoading, isError };
}
