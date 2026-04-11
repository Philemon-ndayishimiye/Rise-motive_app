import { Button, Input } from "@/components/ui/InputAndButton";

export default function LegalandOfficialServices() {
  return (
    <div className="py-3">
      <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[16px] font-bold py-5">
        Providing trusted legal and official solutions with expertise,
        integrity, and precision to safeguard your rights and ensure compliance.
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
              { value: "notary", label: "Notary Services" },
              { value: "Case", label: "Case Filing" },
              {
                value: "Representation",
                label: "Legal Representation Support",
              },
              { value: "court", label: "Court Case Submission" },
              { value: "legal", label: "Legal Advisory &  Consultation" },
              {
                value: "recognized",
                label: "Legally Recognized Contracts & Agreements",
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
              { value: "Agnes", label: "MUKANSANGA Marie Agnes" },
              { value: "Frank", label: "IRANKUNDA Frank" },
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
