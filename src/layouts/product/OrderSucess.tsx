import { Truck, CheckCircle } from "lucide-react";
export function OrderSuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={36} className="text-green-600" />
        </div>
        <h2 className="font-family-playfair text-gray-950 font-bold text-[22px] mb-2">
          Order Placed!
        </h2>
        <p className="font-family-playfair text-gray-700 text-[14px] leading-relaxed mb-6">
          Thank you! Your order has been received. Our team will contact you
          shortly on the phone number you provided to confirm delivery details.
        </p>
        <div className="flex items-center justify-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-6">
          <Truck size={16} className="text-blue-800" />
          <span className="font-family-playfair text-blue-800 font-bold text-[13px]">
            RM PRODUCT SPOT
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-blue-800 hover:bg-blue-900 text-white font-family-playfair font-bold text-[14px] py-3 rounded-xl transition-colors"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}
