import { useState } from "react";
import type { CartItem } from "../product/CartSideBar";
import { X, Package, Truck, Clock } from "lucide-react";

type OrderForm = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  delivery: "sameday" | "scheduled" | "";
  scheduledDate: string;
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
    fullName: "",
    phone: "",
    email: "",
    location: "",
    delivery: "",
    scheduledDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof OrderForm, string>>
  >({});

  const set =
    (field: keyof OrderForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const validate = () => {
    const err: typeof errors = {};
    if (!form.fullName.trim()) err.fullName = "Full name is required";
    if (!form.phone.trim()) err.phone = "Phone number is required";
    if (!form.location.trim()) err.location = "Delivery location is required";
    if (!form.delivery) err.delivery = "Please select a delivery option";
    if (form.delivery === "scheduled" && !form.scheduledDate)
      err.scheduledDate = "Please choose a date";
    return err;
  };

  const handleSubmit = () => {
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setLoading(true);

    // ── Simulate API call — replace with real endpoint later ──
    const orderPayload = {
      customer: {
        fullName: form.fullName,
        phone: form.phone,
        email: form.email,
        location: form.location,
        delivery: form.delivery,
        scheduledDate: form.scheduledDate,
      },
      products: cart.map((i) => ({
        id: i.id,
        name: i.name,
        quantity: i.quantity,
        category: i.category,
      })),
    };
    console.log("ORDER PAYLOAD →", orderPayload);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
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
            <p className="font-family-playfair text-blue-800 font-bold text-[13px] mb-2">
              Items Ordered ({cart.reduce((s, i) => s + i.quantity, 0)} total)
            </p>
            <div className="flex flex-col gap-1.5">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <span className="text-lg">{item.emoji}</span>
                  <span className="font-family-playfair text-gray-700 text-[13px] flex-1">
                    {item.name}
                  </span>
                  <span className="font-family-playfair text-blue-800 font-bold text-[13px]">
                    ×{item.quantity}
                  </span>
                </div>
              ))}
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
                className={inputClass("fullName")}
                placeholder="e.g. Jean Pierre Habimana"
                value={form.fullName}
                onChange={set("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-[11px] font-family-playfair">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Phone Number <span className="text-blue-800">*</span>
              </label>
              <input
                type="tel"
                className={inputClass("phone")}
                placeholder="+250 700 000 000"
                value={form.phone}
                onChange={set("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-[11px] font-family-playfair">
                  {errors.phone}
                </p>
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
                className={inputClass("email")}
                placeholder="yourname@example.com"
                value={form.email}
                onChange={set("email")}
              />
            </div>

            {/* Delivery Location */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Delivery Location <span className="text-blue-800">*</span>
              </label>
              <input
                type="text"
                className={inputClass("location")}
                placeholder="e.g. Kicukiro, Kigali"
                value={form.location}
                onChange={set("location")}
              />
              {errors.location && (
                <p className="text-red-500 text-[11px] font-family-playfair">
                  {errors.location}
                </p>
              )}
            </div>

            {/* Delivery Option */}
            <div className="flex flex-col gap-1">
              <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                Delivery Option <span className="text-blue-800">*</span>
              </label>
              <select
                className={inputClass("delivery")}
                value={form.delivery}
                onChange={set("delivery")}
              >
                <option value="">Select delivery type…</option>
                <option value="sameday">Same Day Delivery</option>
                <option value="scheduled">Scheduled Delivery</option>
              </select>
              {errors.delivery && (
                <p className="text-red-500 text-[11px] font-family-playfair">
                  {errors.delivery}
                </p>
              )}
            </div>

            {/* Scheduled Date — shown only when scheduled is selected */}
            {form.delivery === "scheduled" && (
              <div className="flex flex-col gap-1">
                <label className="font-family-playfair text-gray-700 font-bold text-[13px]">
                  Preferred Date <span className="text-blue-800">*</span>
                </label>
                <input
                  type="date"
                  className={inputClass("scheduledDate")}
                  value={form.scheduledDate}
                  onChange={set("scheduledDate")}
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.scheduledDate && (
                  <p className="text-red-500 text-[11px] font-family-playfair">
                    {errors.scheduledDate}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Delivery info tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            <div className="flex items-center gap-1.5 text-[12px] font-family-playfair text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              <Clock size={12} className="text-blue-700" /> Same day: order
              before 12 PM
            </div>
            <div className="flex items-center gap-1.5 text-[12px] font-family-playfair text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              <Truck size={12} className="text-blue-700" /> Delivery within
              Kigali
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-800 hover:bg-blue-900 disabled:opacity-60 text-white font-family-playfair font-bold text-[14px] py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      opacity=".25"
                    />
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      opacity=".75"
                    />
                  </svg>
                  Placing Order…
                </>
              ) : (
                <>
                  <Package size={16} /> Click to Order Products
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
