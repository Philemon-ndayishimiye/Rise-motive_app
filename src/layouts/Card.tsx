// Card.tsx
import React from "react";
import { BadgeCheck } from "lucide-react";

interface CardProps {
  backgroundColor?: string;
  title: string;
  description?: string;
  items?: string[];
}

const Card: React.FC<CardProps> = ({
  backgroundColor = "bg-blue-100",
  title,
  description,
  items = [],
}) => {
  return (
    <div className={`${backgroundColor} rounded-xl p-6 max-w-sm shadow-md`}>
      <h2 className="font-family-playfair text-[#ffffff]  sm:text-xl font-semibold mb-2">
        {title}
      </h2>

      {description && (
        <p className="text-[#ffffff] text-xs sm:text-sm mb-4 font-family-playfair">
          {description}
        </p>
      )}

      {items.length > 0 && (
        <ul className="list-none space-y-1 text-[#ffffff] text-[10px] font-normal sm:text-base">
          {items.map((item: string, index: number) => (
            <li key={index} className="flex items-center text-[14px] gap-3 pb-2">
              <BadgeCheck className="w-4 h-4 text-blue-50 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card; // ✅ required for Fast Refresh
