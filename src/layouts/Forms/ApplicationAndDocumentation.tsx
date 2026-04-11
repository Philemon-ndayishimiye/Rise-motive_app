import { Button, Input } from "@/components/ui/InputAndButton";

export default function ApplicationAndDocument() {
  return (
    <div className="py-3">
      <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[16px] font-bold py-5">
        Easily apply for services and handle your documentation in one place.
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
            label="Service"
            placeholder="Select Service Category"
            options={[
              { value: "Job", label: "Job Application" },
              { value: "Scholarship", label: "ScholarShip Application" },
              { value: "CV", label: "CV & Cover Letter" },
              { value: "Project", label: "Project Proposal Writing" },
              { value: "Report", label: "Report Writing & Editing" },
              { value: "Book", label: "Book Writing & Formating" },
              {
                value: "General",
                label: "General Document Preparation & Editing",
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="textarea"
            label="Task Description"
            placeholder="Please in Short Describe What you want"
          />
          <Input
            type="date"
            label="Preferred Deadline"
            placeholder="When you want your Service to be done"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8 pb-3">
          <Input
            type="select"
            label="Choose Tasker (optional)"
            placeholder="Your Preferred Tasker"
            options={[
              { value: "Patrick", label: "HAKIZIMANA Joseph Patrick" },
              { value: "protogene", label: "MURWANASHYAKA Protegene" },
            ]}
          />

          <Input
            type="file"
            label="Upload file "
            placeholder="if there is any file you want to show please Upload"
          />
        </div>

        <div>
          <Button label="Click To Request Service" />
        </div>
      </div>
    </div>
  );
}
