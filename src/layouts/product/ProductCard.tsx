import type { Product } from "../product/Products";
import { ShoppingCart, Plus, Minus } from "lucide-react";

export function ProductCard({
  product,
  cartQty,
  onAddToCart,
  onIncrease,
  onDecrease,
  onViewDetail,
}: {
  product: Product;
  cartQty: number;
  onAddToCart: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
  onViewDetail: () => void;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-blue-200 transition-all duration-200">
      {/* Emoji + badge */}
      <div
        className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        onClick={onViewDetail}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-[80%] h-[80%] object-cover rounded-xl"
        />
        <span className="text-[11px] font-family-playfair bg-blue-800 text-white px-4 py-1 text-center rounded-lg">
          Tap to view details
        </span>
      </div>

      {/* Category + badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-family-playfair text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-bold tracking-wide">
          {product.category}
        </span>
        {/* {product.badge && (
          <span className="text-[10px] font-family-playfair text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-bold">
            ★ {product.badge}
          </span>
        )} */}
      </div>

      {/* Name */}
      <h3
        className="font-family-playfair text-gray-950 font-bold text-[14px] leading-snug cursor-pointer hover:text-blue-800 transition-colors"
        onClick={onViewDetail}
      >
        {product.name}
      </h3>

      {/* Short description */}
      <p className="font-family-playfair text-gray-700 text-[12px] leading-snug flex-1">
        {product.description}
      </p>

      {/* Cart controls */}
      {cartQty === 0 ? (
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-800 hover:bg-blue-900 text-white font-family-playfair font-bold text-[13px] py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={14} /> Add to Cart
        </button>
      ) : (
        <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-3 py-2">
          <button
            onClick={onDecrease}
            className="w-7 h-7 rounded-lg bg-white border border-blue-200 hover:bg-red-50 hover:border-red-200 flex items-center justify-center transition-colors"
          >
            <Minus size={13} className="text-gray-700" />
          </button>
          <span className="font-family-playfair font-bold text-blue-800 text-[14px]">
            {cartQty}
          </span>
          <button
            onClick={onIncrease}
            className="w-7 h-7 rounded-lg bg-white border border-blue-200 hover:bg-green-50 hover:border-green-200 flex items-center justify-center transition-colors"
          >
            <Plus size={13} className="text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
}
