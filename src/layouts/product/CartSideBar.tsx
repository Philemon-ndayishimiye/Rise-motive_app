import type { Product } from "../product/Products";
import { ShoppingCart, X, Package, Plus, Minus } from "lucide-react";
export type CartItem = Product & { quantity: number };


export function CartSidebar({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onCheckout,
}: {
  cart: CartItem[];
  onClose: () => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onCheckout: () => void;
}) {
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-white h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-blue-900 to-blue-600 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-white font-family-playfair font-bold text-[18px]">
              Your Cart
            </h2>
            <p className="text-blue-200 font-family-playfair text-[12px]">
              {totalItems} item{totalItems !== 1 ? "s" : ""} added
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X size={17} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
              <ShoppingCart size={48} className="text-gray-200 mb-3" />
              <p className="font-family-playfair text-gray-400 text-[14px]">
                Your cart is empty
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100"
              >
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-family-playfair text-gray-950 font-bold text-[13px] truncate">
                    {item.name}
                  </p>
                  <p className="font-family-playfair text-gray-500 text-[11px]">
                    {item.category}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="w-6 h-6 rounded-lg bg-white border border-gray-200 hover:bg-red-50 flex items-center justify-center transition-colors"
                  >
                    <Minus size={11} className="text-gray-600" />
                  </button>
                  <span className="font-family-playfair font-bold text-blue-800 text-[13px] min-w-5 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="w-6 h-6 rounded-lg bg-white border border-gray-200 hover:bg-green-50 flex items-center justify-center transition-colors"
                  >
                    <Plus size={11} className="text-gray-600" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100">
            <button
              onClick={onCheckout}
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-family-playfair font-bold text-[14px] py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Package size={16} /> Proceed to Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
