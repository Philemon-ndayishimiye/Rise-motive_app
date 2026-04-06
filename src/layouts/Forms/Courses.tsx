import { Button, Input } from "@/components/ui/InputAndButton";

export default function CourseForm() {
  return (
    <div className="py-3">
      <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[16px] font-bold py-5">
        Choose Your Course and Start Learning Today.
      </h1>

      <div className="py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter Your Full Name"
          />
          <Input type="email" label="Email" placeholder="Enter Your Email" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="tel"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />
          <Input
            type="select"
            label="Select Course"
            placeholder="Select Course"
            options={[
              { value: "computer", label: "Computer & Digital Foundations" },
              { value: "microsoft", label: "Microsoft Office Applications " },
              {
                value: "google",
                label: "Google Tools & Online Collaboration ",
              },
              { value: "government", label: "e-Government Tools & Services" },
              { value: "Digital", label: "Digital Content Creation " },
              { value: "graphic", label: "Graphic Design " },
              { value: "AI", label: "Introduction to AI and Digital Tools" },
              { value: "Programming", label: "Basic Programming" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="select"
            label="Preffered Schedule"
            placeholder="Please Select your Schedule"
            options={[
              { value: "morning", label: "9:00 - 11:00" },
              { value: "mid-morning", label: "2:00 - 4:00" },
              { value: "morning", label: "6:00 - 20:00" },
            ]}
          />
          <Input
            type="select"
            label="Experience"
            placeholder="select your Experience"
            options={[
              { value: "beginner", label: "beginner" },
              { value: "intermediate", label: "Intermediate" },
            ]}
          />
        </div>

        <div>
          <Button label="Click To Apply" />
        </div>
      </div>
    </div>
  );
}
