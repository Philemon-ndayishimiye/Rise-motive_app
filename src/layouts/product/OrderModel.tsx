import { useState } from "react";
import type { CartItem } from "../product/CartSideBar";
import { X, Package, Truck, Clock } from "lucide-react";
import { useCreateOrderMutation } from "../../app/api/ProductSpot/Order";

type OrderForm = {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  paymentMethod: string;
  note: string;
};

export function OrderModal({
  cart,
  onClose,
  onSuccess,
}: {
  cart: CartItem[];
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [form, setForm] = useState<OrderForm>({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    address: "",
    paymentMethod: "",
    note: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderForm, string>>>({});
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cart.reduce((s, i) => s + Number(i.price )* i.quantity, 0);

  const set =
    (field: keyof OrderForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const validate = (): Partial<Record<keyof OrderForm, string>> => {
    const err: Partial<Record<keyof OrderForm, string>> = {};
    if (!form.customerName) err.customerName = "Required";
    if (!form.customerPhone) err.customerPhone = "Required";
    if (!form.address) err.address = "Required";
    if (!form.paymentMethod) err.paymentMethod = "Required";
    return err;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    try {
      for (const item of cart) {
        await createOrder({
          customerName: form.customerName,
          customerPhone: form.customerPhone,
          customerEmail: form.customerEmail,
          address: form.address,
          quantity: item.quantity,
          paymentMethod: form.paymentMethod,
          note: form.note,
          productId: item.id,
        }).unwrap();
      }
      onSuccess();
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order. Try again.");
    }
  };

  const inputClass = (field: keyof OrderForm) =>
    `w-full font-family-playfair text-gray-700 text-[14px] border-2 rounded-xl px-4 py-2.5 outline-none transition-all
    ${errors[field] ? "border-red-400 focus:ring-4 focus:ring-red-100" : "border-blue-800 focus:ring-4 focus:ring-blue-800/15"}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[80vw] max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-blue-900 to-blue-600 px-7 py-5 flex items-start justify-between shrink-0">
          <div>
            <p className="text-blue-200 font-family-playfair text-[10px] tracking-widest uppercase mb-1">
              Order Confirmation
            </p>
            <h2 className="text-white font-family-playfair font-bold text-[20px]">
              Complete Your Order
            </h2>
            <p className="text-blue-100 font-family-playfair text-[13px] mt-1">
              Fill in your delivery details and we'll get it to you fast.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-6 mt-1 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X size={17} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-7 py-6">

          {/* Order summary */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <p className="font-family-playfair text-blue-800 font-bold text-[13px] mb-3">
              Items Ordered ({totalItems} total)
            </p>
            <div className="flex flex-col gap-2">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-8 h-8 object-cover rounded-lg shrink-0"
                    />
                  ) : (
                    <span className="text-lg">{item.emoji}</span>
                  )}
                  <span className="font-family-playfair text-gray-700 text-[13px] flex-1 truncate">
                    {item.name}
                  </span>
                  <span className="font-family-playfair text-gray-400 text-[12px] shrink-0">
                    {item.price.toLocaleString()} rwf × {item.quantity}
                  </span>
                  <span className="font-family-playfair text-amber-600 font-bold text-[13px] shrink-0">
                    {(Number(item.price)* item.quantity).toLocaleString()} rwf
                  </span>
                </div>
              ))}
            </div>

            {/* Total row */}
            <div className="border-t border-blue-200 mt-3 pt-3 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-family-playfair text-gray-500 text-[12px]">
                  Subtotal
                </span>
                <span className="font-family-playfair text-gray-700 text-[13px] font-bold">
                  {totalPrice.toLocaleString()} rwf
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-family-playfair text-gray-500 text-[12px]">
                  Delivery
                </span>
                <span className="font-family-playfair text-green-600 text-[12px] font-bold">
                  Calculated after order
                </span>
              </div>
              <div className="flex items-center justify-between mt-1 pt-1.5 border-t border-blue-200">
                <span className="font-family-playfair text-blue-900 font-bold text-[14px]">
                  Total
                </span>
                <span className="font-family-playfair text-amber-600 font-bold text-[16px]">
                  {totalPrice.toLocaleString()} rwf
                </span>
              </div>
            </div>
          </div>

          {/* Form grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Full Name <span className="text-blue-800">*</span>
              </label>
              <input
                type="text"
                className={inputClass("customerName")}
                placeholder="e.g. Jean Pierre Habimana"
                value={form.customerName}
                onChange={set("customerName")}
              />
              {errors.customerName && (
                <p className="text-red-500 text-[11px] font-family-playfair">{errors.customerName}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Phone Number <span className="text-blue-800">*</span>
              </label>
              <input
                type="tel"
                className={inputClass("customerPhone")}
                placeholder="+250 700 000 000"
                value={form.customerPhone}
                onChange={set("customerPhone")}
              />
              {errors.customerPhone && (
                <p className="text-red-500 text-[11px] font-family-playfair">{errors.customerPhone}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Email Address{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="email"
                className={inputClass("customerEmail")}
                placeholder="yourname@example.com"
                value={form.customerEmail}
                onChange={set("customerEmail")}
              />
            </div>

            {/* Delivery Location */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Delivery Location <span className="text-blue-800">*</span>
              </label>
              <input
                type="text"
                className={inputClass("address")}
                placeholder="e.g. Kicukiro, Kigali"
                value={form.address}
                onChange={set("address")}
              />
              {errors.address && (
                <p className="text-red-500 text-[11px] font-family-playfair">{errors.address}</p>
              )}
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Payment Method <span className="text-blue-800">*</span>
              </label>
              <select
                className={inputClass("paymentMethod")}
                value={form.paymentMethod}
                onChange={set("paymentMethod")}
              >
                <option value="">Select payment method…</option>
                <option value="CASH">Cash on Delivery</option>
                <option value="MOMO">Mobile Money (MTN)</option>
                <option value="AIRTEL">Airtel Money</option>
              </select>
              {errors.paymentMethod && (
                <p className="text-red-500 text-[11px] font-family-playfair">{errors.paymentMethod}</p>
              )}
            </div>

            {/* Note */}
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Note{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                className={`${inputClass("note")} resize-none`}
                placeholder="Any special instructions or notes for delivery…"
                value={form.note}
                onChange={set("note")}
                rows={3}
              />
            </div>
          </div>

          {/* Delivery info tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            <div className="flex items-center gap-1.5 text-[12px] font-family-playfair text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              <Clock size={12} className="text-blue-700" /> Same day: order before 12 PM
            </div>
            <div className="flex items-center gap-1.5 text-[12px] font-family-playfair text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              <Truck size={12} className="text-blue-700" /> Delivery within Kigali
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-blue-800 hover:bg-blue-900 disabled:opacity-60 text-white font-family-playfair font-bold text-[14px] py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity=".25" />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity=".75" />
                  </svg>
                  Placing Order…
                </>
              ) : (
                <>
                  <Package size={16} /> Click to Order — {totalPrice.toLocaleString()} rwf
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}