import {
  FileText,
  Mail,
  CreditCard,
  Lightbulb,
  Truck,
  RefreshCcw,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    icon: <FileText size={18} color="#1E3A8A" />,
    title: "2.1 Introduction",
    content:
      "By using Rise Motive Ltd services or website, you agree to these Terms and Conditions.",
  },
  {
    icon: <ChevronRight size={18} color="#1E3A8A" />,
    title: "2.2 Services",
    content: "We provide:",
    list: [
      "Media production (photography, videography, editing)",
      "Graphic design",
      "IT and digital services",
      "Business and task-based support",
    ],
  },
  {
    icon: <AlertTriangle size={18} color="#1E3A8A" />,
    title: "2.3 User Responsibilities",
    content: "You agree not to:",
    list: [
      "Use services for illegal activities",
      "Disrupt systems or security",
      "Provide false information",
    ],
  },
  {
    icon: <CreditCard size={18} color="#1E3A8A" />,
    title: "2.4 Payments",
    content: "Payment terms:",
    list: [
      "Prices are agreed before work starts",
      "Deposits may be required",
      "Non-payment may result in suspension or delay",
    ],
  },
  {
    icon: <Lightbulb size={18} color="#1E3A8A" />,
    title: "2.5 Intellectual Property",
    content:
      "All work remains property of Rise Motive Ltd until full payment is received. Ownership transfer depends on agreement.",
  },
  {
    icon: <Truck size={18} color="#1E3A8A" />,
    title: "2.6 Delivery",
    content:
      "We aim to deliver on time but delays may occur due to technical or external factors.",
  },
  {
    icon: <RefreshCcw size={18} color="#1E3A8A" />,
    title: "2.7 Refunds",
    content:
      "Refunds are handled case-by-case. Completed digital services are generally non-refundable unless agreed otherwise.",
  },
  {
    icon: <AlertTriangle size={18} color="#1E3A8A" />,
    title: "2.8 Limitation of Liability",
    content:
      "We are not liable for indirect or consequential damages from use of our services.",
  },
  {
    icon: <FileText size={18} color="#1E3A8A" />,
    title: "2.9 Changes",
    content:
      "We may update these Terms at any time. Continued use means acceptance.",
  },
];

export default function TermsAndConditions() {
  return (
    <div className="">
      {/* Hero */}
      <div className="px-7 relative overflow-hidden py-16 bg-blue-800">
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-4">
            <FileText size={40} color="#ffffff" />
          </div>
          <h1 className="font-family-playfair text-white text-[24px] font-bold py-3">
            TERMS AND CONDITIONS
          </h1>
          <p className="font-family-playfair  text-white text-[15px] max-w-xl mx-auto">
            Please read these terms carefully before using Rise Motive Ltd
            services or website.
          </p>
          <p className="font-family-playfair text-white text-[12px] mt-3">
            Last updated: April 2026 2026 RISE MOTIVE.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-24 py-10 max-w-4xl mx-auto">
        {/* Acceptance banner */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #1E40AF",
            borderRadius: "12px",
            padding: "14px 20px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AlertTriangle size={16} color="#1E3A8A" />
          <p className="font-family-playfair text-gray-600 text-[13px] font-bold">
            By using our services, you confirm that you have read and agree to
            these terms.
          </p>
        </div>

        {sections.map((section, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              border: "1px solid #1E40AF",
              borderRadius: "14px",
              padding: "20px 24px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  background: "#EFF6FF",
                  borderRadius: "8px",
                  padding: "6px",
                  display: "flex",
                }}
              >
                {section.icon}
              </div>
              <h2 className="font-family-playfair font-bold text-[#1E3A8A] text-[16px]">
                {section.title}
              </h2>
            </div>
            <p className="font-family-playfair text-gray-700 text-[14px] leading-relaxed">
              {section.content}
            </p>
            {section.list && (
              <ul style={{ marginTop: "10px", paddingLeft: "8px" }}>
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#1E3A8A",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    />
                    <span className="font-family-playfair text-gray-700 text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact */}
        <div
          style={{
            background: "#EFF6FF",
            border: "1px solid #1E40AF",
            borderRadius: "14px",
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <Mail size={20} color="#1E3A8A" style={{ margin: "0 auto 8px" }} />
          <h3 className="font-family-playfair font-bold text-[#1E3A8A] text-[15px] mb-1">
            2.10 Contact
          </h3>
          <a
            href="mailto:tasks.risemotive@gmail.com"
            className="font-family-playfair text-[#1E3A8A] text-[14px] font-bold underline"
          >
            tasks.risemotive@gmail.com
          </a>
        </div>

        {/* <p className="font-family-playfair text-gray-400 text-[12px] text-center mt-8">
          © 2026 RISE MOTIVE. All rights reserved.
        </p> */}
      </div>
    </div>
  );
}
