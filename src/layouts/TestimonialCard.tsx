// TestimonialCard.tsx



import React from "react";

export interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
}



const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  avatarUrl,
}) => {
  return (
    <div className="relative bg-white border border-blue-100 rounded-2xl p-6 max-w-md w-full shadow-sm">
      
      {/* Quote icon — top right */}
      <div className="absolute top-4 right-5 text-blue-200 text-5xl leading-none select-none font-serif">
        ❝
      </div>

      {/* Header: avatar + name + role */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-400 text-xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>

        <div>
          <p className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-wide">
            {name}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Quote text */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        "{quote}"
      </p>
    </div>
  );
};

export default TestimonialCard;