import { Phone, Mail, UserCircle2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-blue-500 to-blue-300 text-white">
      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        {/* Label */}
        <span className="text-md  font-bold tracking-[0.2em] uppercase text-white font-family-playfair">
          Final Call to Action
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug font-family-playfair">
          Join The Rise Motive Ecosystem
        </h2>

        {/* Subtext */}
        <p className="text-base text-blue-100 max-w-xl leading-relaxed font-family-playfair">
          Whether you want to:{" "}
          <strong className="text-white font-semibold">Learn new skills</strong>
          ,{" "}
          <strong className="text-white font-semibold">Request services</strong>
          , <strong className="text-white font-semibold">Buy tools</strong>, or{" "}
          <br className="hidden sm:block" />
          <strong className="text-white font-semibold">
            Access opportunities
          </strong>
          , Rise Motive is here for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <button className="px-6 py-3 bg-blue-300 hover:bg-blue-400 active:scale-95 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md font-family-poppins">
            Apply Now
          </button>
          <button className="px-6 py-3 bg-transparent border border-white/60 hover:bg-white/10 active:scale-95 text-white text-sm font-semibold rounded-lg transition-all duration-200 font-family-poppins">
            Request a Tasker
          </button>
          <button className="px-6 py-3 bg-transparent border border-white/60 hover:bg-white/10 active:scale-95 text-white text-sm font-semibold rounded-lg transition-all duration-200 font-family-poppins">
            Order Products
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 max-w-4xl mx-auto" />

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col items-center gap-3 text-center">
        {/* Contact Us heading */}
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <UserCircle2 className="w-4 h-4 text-blue-300 font-family-poppins" />
          Contact Us
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 text-white text-sm">
          <Phone className="w-3.5 h-3.5 text-white" />
          <span>
            Phone:{" "}
            <a
              href="tel:0795344768"
              className="hover:text-white transition-colors"
            >
              0795344768
            </a>{" "}
            |{" "}
            <a
              href="tel:0788625873"
              className="hover:text-white transition-colors"
            >
              0788625873
            </a>
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 text-blue-100 text-sm font-family-poppins">
          <Mail className="w-3.5 h-3.5 text-blue-300" />
          <a
            href="mailto:info.motiv"
            className="hover:text-white transition-colors"
          >
            Email: info.motiv
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white font-family-poppins">
        © {new Date().getFullYear()} Risemotive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
