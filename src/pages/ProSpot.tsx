import { useEffect, useState } from "react";
import { BadgeCheck, Search, ShoppingCart } from "lucide-react";
import prospot from "../assets/RM PROSPOT.jpg.jpeg";
import { OrderSuccessModal } from "@/layouts/product/OrderSucess";
import { useProducts } from "@/layouts/product/Products";
import type { Product } from "../layouts/product/Products";
import { ProductDetailModal } from "@/layouts/product/ProductDetailModel";
import { ProductCard } from "@/layouts/product/ProductCard";
import { CartSidebar } from "@/layouts/product/CartSideBar";
import type { CartItem } from "../layouts/product/CartSideBar";
import { OrderModal } from "@/layouts/product/OrderModel";
import { useLocation } from "react-router-dom";

type Bubble = { size: number; left: number; duration: number; delay: number };

const bubbles: Bubble[] = Array.from({ length: 15 }).map(() => ({
  size: Math.random() * 60 + 20,
  left: Math.random() * 100,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 5,
}));

export default function ProSpot() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const { products, isLoading, isError } = useProducts();

  const cartQty = (id: number) => cart.find((i) => i.id === id)?.quantity ?? 0;
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing)
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increase = (id: number) =>
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );

  const decrease = (id: number) =>
    setCart((prev) => {
      const item = prev.find((i) => i.id === id);
      if (!item) return prev;
      if (item.quantity === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
      );
    });

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSuccess = () => {
    setShowOrder(false);
    setShowSuccess(true);
    setCart([]);
  };

  return (
    <div className="py-7">
      {/* Hero Banner */}
      <div className="px-7 relative overflow-hidden py-20 bg-linear-to-r from-blue-900 border-none to-blue-300">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-family-playfair text-[#1E3A8A] text-[20px] font-bold py-5">
            RISEMOTIVE PRODUCT SPOT
          </h1>
          <p className="font-family-playfair text-gray-700 text-[17px]">
            <strong className="text-[#1E3A8A]">
              Smart Supplies for Work, School & Everyday Needs
            </strong>{" "}
            <br />
            Discover top-quality products, order with ease, and enjoy fast,
            reliable delivery right to your doorstep
            <br />
            Browse, select, and request exactly what you need delivered quickly
            and hassle-free
            <br />
            From essentials to specialty items, RISEMOTIVE PRODUCT SPOT makes
            shopping simple, convenient, and trustworthy
          </p>
        </div>
      </div>

      {/* Image + Description */}
      <div className="py-8 flex flex-col md:flex-row px-4 md:px-23 gap-6 md:gap-0">
        <div className="flex justify-center md:block">
          <img
            src={prospot}
            className="w-full md:w-[77%] h-auto md:h-[78%] rounded-md"
          />
        </div>
        <div>
          <h1 className="py-2 font-family-playfair text-gray-800 text-[15px]">
            RM ProSpot, cluster of RISE MOTIVE which is your reliable source for
            essential office supplies, student materials, and everyday products.
          </h1>
          <h2 className="py-2 font-family-playfair text-gray-800 text-[15px]">
            Browse quality products, request what you need, and get it delivered
            fast and hassle-free
          </h2>
          {[
            "Wide range of products",
            "Flexible ordering system",
            "Fast delivery options",
            "Customer-first service",
          ].map((text) => (
            <div key={text} className="flex flex-row gap-2 pb-6">
              <BadgeCheck size={19} className="text-[#1E3A8A]" />
              <p className="font-family-playfair text-gray-800 text-[15px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 md:px-7 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5">
          <h1 className="font-family-playfair text-[#1E3A8A] text-[20px] font-bold">
            Browse Our Products
          </h1>
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:flex-none">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products…"
                className="font-family-playfair text-gray-700 text-[13px] border-2 border-blue-800 rounded-xl pl-9 pr-4 py-2.5 outline-none focus:ring-4 focus:ring-blue-800/15 w-full sm:w-56 transition-all"
              />
            </div>
            <button
              onClick={() => setShowCart(true)}
              className="relative bg-blue-800 hover:bg-blue-900 text-white rounded-xl px-4 py-2.5 flex items-center gap-2 transition-colors shrink-0"
            >
              <ShoppingCart size={16} />
              <span className="font-family-playfair font-bold text-[13px] hidden sm:inline">
                Cart
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div  className="text-center py-16">
            <p className="font-family-playfair text-gray-400 text-[15px]">
              Loading products…
            </p>
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="text-center py-16">
            <p className="font-family-playfair text-red-400 text-[15px]">
              Failed to load products. Please try again.
            </p>
          </div>
        )}

        {/* Empty search state */}
        {!isLoading && !isError && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-family-playfair text-gray-400 text-[15px]">
              No products found for "{search}"
            </p>
          </div>
        )}

        {/* Product grid */}
        {!isLoading && !isError && (
          <div id="product" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartQty={cartQty(product.id)}
                onAddToCart={() => addToCart(product)}
                onIncrease={() => increase(product.id)}
                onDecrease={() => decrease(product.id)}
                onViewDetail={() => setDetailProduct(product)}
              />
            ))}
          </div>
        )}

        {/* Floating cart button on mobile */}
        {totalItems > 0 && (
          <div className="fixed bottom-6 right-6 z-40 sm:hidden">
            <button
              onClick={() => setShowCart(true)}
              className="relative bg-blue-800 hover:bg-blue-900 text-white rounded-2xl px-5 py-3.5 flex items-center gap-2 shadow-xl transition-colors"
            >
              <ShoppingCart size={18} />
              <span className="font-family-playfair font-bold text-[14px]">
                View Cart ({totalItems})
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Popup */}
      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onAddToCart={() => addToCart(detailProduct)}
          cartQty={cartQty(detailProduct.id)}
        />
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <CartSidebar
          cart={cart}
          onClose={() => setShowCart(false)}
          onIncrease={increase}
          onDecrease={decrease}
          onCheckout={() => {
            setShowCart(false);
            setShowOrder(true);
          }}
        />
      )}

      {/* Order Form Modal */}
      {showOrder && (
        <OrderModal
          cart={cart}
          onClose={() => setShowOrder(false)}
          onSuccess={handleSuccess}
        />
      )}

      {/* Order Success Modal */}
      {showSuccess && (
        <OrderSuccessModal onClose={() => setShowSuccess(false)} />
      )}
    </div>
  );
}
