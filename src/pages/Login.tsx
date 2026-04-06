import { Button, Input } from "@/components/ui/InputAndButton";
import { FaHandPointRight } from "react-icons/fa";
import { Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="py-7 grid grid-cols-1 md:grid-cols-2 justify-center px-4 md:px-[14%] gap-4">
      <div className="p-8 hidden md:block">
        <h1 className="font-family-playfair pb-3 text-[20px] font-bold pt-18 text-[#1E3A8A]">
          Welcome! Please log in to continue.
        </h1>

        <h2 className="text-gray-700 font-family-playfair text-[18px]">
          → Your secure access starts here.
        </h2>

        <div className="pt-[13%] pl-12.5 flex items-center">
          <FaHandPointRight size={110} className="text-gray-700 hand-bounce" />
        </div>
      </div>

      <div>
        <div className="flex flex-row justify-center">
          <Lock size={30} className="text-[#1E3A8A]" />
        </div>

        <div>
          <h1 className="py-2 text-gray-700 font-family-playfair text-center">
            Portal Access
          </h1>
          <h2 className="py-2 text-gray-700 font-family-playfair text-center">
            Enter your credentials to continue.
          </h2>
        </div>

        <div>
          <Input type="text" label="Username" placeholder="example@yahoo.com" />
          <span>{/**input error */}</span>
          <div className="py-2"></div>
          <Input type="password" label="Password" placeholder="Philemon" />
          <span>{/**input error */}</span>

          <div className="pt-5"></div>

          <Button label="Login" />
          <span className="pt-2">{/**Login Error */}</span>
          <div className="mb-25"></div>
        </div>
      </div>
    </div>
  );
}