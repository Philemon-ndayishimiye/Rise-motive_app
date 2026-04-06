import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-12 text-center">
      {/* 404 + Image */}
      <div className="relative flex items-center justify-center w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* Left 4 */}
        <h1 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-900 tracking-tight">
          4
        </h1>

        {/* Center Image */}
        <div className="absolute inset-0 font-family-playfair flex items-center justify-center">
          <img
            src="/not-found.png" // replace with your image
            alt="Not Found"
            className="w-32 sm:w-36 md:w-48 lg:w-56 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right 4 */}
        <h1 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-900 tracking-tight">
          4
        </h1>
      </div>

      {/* Text */}
      <h2 className= " font-family-playfair mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
        Don’t panic!{" "}
        <span className="font-family-playfair text-blue-800 font-bold">Page Not Found</span>
      </h2>

      <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto font-family-playfair ">
        Try to be chill. Errors sometimes happen.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 font-family-playfair px-3 cursor-pointer py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-blue-400 text-white rounded-xl text-sm sm:text-base md:text-lg font-medium hover:bg-blue-600 transition shadow-md"
      >
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
