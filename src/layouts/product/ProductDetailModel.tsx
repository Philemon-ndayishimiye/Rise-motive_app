import { ShoppingCart, X, CheckCircle } from "lucide-react";
import type{ Product } from "../product/Products";
export function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  cartQty,
}: {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
  cartQty: number;
}) {
  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-blue-900 to-blue-600 px-7 py-5 flex items-start justify-between">
          <div>
            <p className="text-blue-200 font-family-playfair text-[10px] tracking-widest uppercase mb-1">
              Product Details
            </p>
            <h2 className="text-white font-family-playfair font-bold text-[18px] leading-snug">
              {product.name}
            </h2>
            <span className="inline-block mt-1 text-[11px] font-family-playfair bg-white/20 text-white px-2 py-0.5 rounded-full">
              {product.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="ml-4 mt-1 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X size={17}  className="cursor-pointer"/>
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {/* Big emoji display */}
          <div className="text-7xl text-center py-4">{product.emoji}</div>

          {product.badge && (
            <div className="flex justify-center mb-3">
              <span className="text-[11px] font-bold font-family-playfair bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full tracking-wide">
                ★ {product.badge}
              </span>
            </div>
          )}

          <p className="font-family-playfair text-gray-700 text-[14px] leading-relaxed text-center">
            {product.fullDescription}
          </p>

          <div className="mt-6">
            {cartQty > 0 ? (
              <div className="flex items-center justify-center gap-3">
                <span className="font-family-playfair text-green-600 text-[13px] font-bold flex items-center gap-1">
                  <CheckCircle size={16} /> Added to cart ({cartQty})
                </span>
                <button
                  onClick={onAddToCart}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-family-playfair font-bold text-[13px] px-4 py-2 rounded-xl transition-colors"
                >
                  Add More
                </button>
              </div>
            ) : (
              <button
                onClick={onAddToCart}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-family-playfair font-bold text-[14px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
