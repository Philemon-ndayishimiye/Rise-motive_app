import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────
export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

// ─── ServiceCard Component ────────────────────────────────────
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  subtitle,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "70px 70px 70px 70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "font-family-playfair",
        gap: "20px",
        cursor: "pointer",
        border: `1.5px solid ${hovered ? "rgba(59,130,246,0.25)" : "transparent"}`,
        boxShadow: hovered
          ? "0 16px 40px rgba(59,130,246,0.14)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered
          ? "translateY(-5px) scale(1.01)"
          : "translateY(0) scale(1)",
        transition:
          "transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.12s ease, border-color 0.22s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Icon wrapper */}
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: "#60A5FA",
          fontFamily: "font-family-playfair",
          display: "flex",
          color: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          transition:
            "background 0.22s ease, transform 0.22s cubic-bezier(.34,1.56,.64,1)",
          transform: hovered
            ? "scale(1.1) rotate(-4deg)"
            : "scale(1) rotate(0deg)",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <p
        style={{
          fontSize: "17px",
          fontWeight: 800,
          color: "#374151",
          textAlign: "center",
          lineHeight: 1.3,
          fontFamily: "font-family-playfair",
          margin: 0,
        }}
      >
        {title}
      </p>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "15px",
          fontWeight: 400,
          color: "#60A5FA",
          textAlign: "center",
          fontFamily: "font-family-playfair",
          marginTop: "-6px",
          margin: 0,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default ServiceCard;
