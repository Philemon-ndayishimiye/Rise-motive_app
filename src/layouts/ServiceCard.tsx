import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────
export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  linkElement?: React.ReactNode; // ✅ NEW
  onClick?: () => void;
}

// ─── ServiceCard Component ────────────────────────────────────
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  subtitle,
  linkElement,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  const content = (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        cursor: linkElement || onClick ? "pointer" : "default",
        border: `1.5px solid ${
          hovered ? "rgba(59,130,246,0.25)" : "transparent"
        }`,
        boxShadow: hovered
          ? "0 16px 40px rgba(59,130,246,0.14)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered
          ? "translateY(-5px) scale(1.01)"
          : "translateY(0) scale(1)",
        transition:
          "transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.12s ease, border-color 0.22s ease",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: "#1E40AF",
          display: "flex",
          color: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)",
          transition: "0.2s",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <p style={{ fontSize: "17px", fontFamily: "Playfair", fontWeight: 600, margin: 0 }}>{title}</p>

      {/* Subtitle */}
      <p style={{ fontSize: "15px", color: "#1E40AF", margin: 0 }}>
        {subtitle}
      </p>

      {/* See more */}
      {linkElement && (
        <span style={{ color: "#1D4ED8", fontFamily: "Playfair", fontWeight: 600 }}>See more →</span>
      )}
    </div>
  );

  //  Wrap with Link if provided
  return linkElement ? (
    <div style={{ textDecoration: "none" }}>
      {linkElement &&
        React.cloneElement(linkElement as React.ReactElement, {}, content)}
    </div>
  ) : (
    content
  );
};

export default ServiceCard;
