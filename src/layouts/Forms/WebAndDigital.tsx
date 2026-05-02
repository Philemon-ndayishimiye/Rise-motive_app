import { useState } from "react";
import { Button, Input } from "@/components/ui/InputAndButton";
import { useCreateWebRequestMutation } from "../../app/api/Taskspot/Web";
import { MailCheck } from "lucide-react";

interface ApiError {
  status: number;
  data: { message?: string; errors?: unknown };
}

type WebFormProps = {
  serviceOptions?: { value: string; label: string }[];
};

type WebFormData = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  description: string;
  preferredDate: string;
  taskerId: string;
  documentUrl: File | null;
};

type FormErrors = Partial<Record<keyof WebFormData, string>>;

const INITIAL_FORM_STATE: WebFormData = {
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  service: "",
  description: "",
  preferredDate: "",
  taskerId: "",
  documentUrl: null,
};

const validateForm = (data: WebFormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.customerName.trim()) errors.customerName = "Full name is required.";
  if (!data.customerEmail.trim()) errors.customerEmail = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customerEmail))
    errors.customerEmail = "Please enter a valid email address.";
  if (!data.customerPhone.trim())
    errors.customerPhone = "Phone number is required.";
  if (!data.service) errors.service = "Please select a service category.";
  if (!data.description.trim())
    errors.description = "Please describe your task.";
  if (!data.preferredDate)
    errors.preferredDate = "Please choose a preferred deadline.";
  return errors;
};

export default function WebAndDigital({ serviceOptions = [] }: WebFormProps) {
  const [formData, setFormData] = useState<WebFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const [createWebRequest, { isLoading }] = useCreateWebRequestMutation();

  const handleChange = (
    field: keyof WebFormData,
    value: string | File | null,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const form = new FormData();
    form.append("customerName", formData.customerName);
    form.append("customerPhone", formData.customerPhone);
    form.append("customerEmail", formData.customerEmail);
    form.append("service", formData.service);
    form.append("description", formData.description);
    form.append("preferredDate", formData.preferredDate);
    form.append("tasker", formData.taskerId);
    if (formData.documentUrl) {
      form.append("documentUrl", formData.documentUrl); // File object
    }

    try {
      await createWebRequest(form).unwrap();
      setIsSuccess(true);
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
    } catch (error: unknown) {
      const err = error as ApiError;
      console.error(" Backend data:", JSON.stringify(err?.data, null, 2));
      alert("Something went wrong. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-[40vh] text-center px-6">
        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6">
          <MailCheck className="w-10 h-10 text-[#1E3A8A]" />
        </div>

        {/* Title */}
        <h2 className="font-bold font-family-playfair text-[#1E3A8A] text-2xl mb-3">
          Request Submitted!
        </h2>

        {/* Message */}
        <p className="text-gray-600 font-family-playfair text-sm sm:text-base leading-relaxed mb-2 max-w-sm">
          Thank you! Our team will review your request shortly.
        </p>
        <p className="font-family-playfair text-gray-500 text-sm leading-relaxed max-w-sm">
          We've sent an email with your{" "}
          <span className="font-semibold text-[#1E3A8A]">tracking code</span>
          please check your inbox (and spam folder) to track your request
          status.
        </p>

        {/* Button */}
        <button
          onClick={() => setIsSuccess(false)}
          className="font-family-playfair mt-8 w-full sm:w-auto px-8 py-3 bg-[#1E3A8A] text-white rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="py-3">
      <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[16px] font-bold py-5">
        Empowering your business with smart web and digital solutions.
      </h1>
      <div className="py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter Your Full Name"
            value={formData.customerName}
            variant={errors.customerName ? "danger" : "default"}
            helperText={errors.customerName}
            onChange={(e) => handleChange("customerName", e.target.value)}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            value={formData.customerEmail}
            variant={errors.customerEmail ? "danger" : "default"}
            helperText={errors.customerEmail}
            onChange={(e) => handleChange("customerEmail", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="tel"
            label="Phone Number"
            placeholder="Enter Phone Number"
            value={formData.customerPhone}
            variant={errors.customerPhone ? "danger" : "default"}
            helperText={errors.customerPhone}
            onChange={(e) => handleChange("customerPhone", e.target.value)}
          />
          <Input
            type="select"
            label="Service"
            placeholder="Select Service Category"
            options={
              serviceOptions.length > 0
                ? serviceOptions
                : [
                    { value: "website", label: "Web Development" },
                    { value: "online", label: "Online Setup & Support" },
                  ]
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="textarea"
            label="Task Description"
            placeholder="Please in Short Describe What you want"
            value={formData.description}
            variant={errors.description ? "danger" : "default"}
            helperText={errors.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <Input
            type="date"
            label="Preferred Deadline"
            placeholder="When you want your Service to be done"
            value={formData.preferredDate}
            variant={errors.preferredDate ? "danger" : "default"}
            helperText={errors.preferredDate}
            onChange={(e) => handleChange("preferredDate", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8 pb-3">
          <Input
            type="select"
            label="Choose Tasker (optional)"
            placeholder="Your Preferred Tasker"
            options={[
              { value: "Philemon", label: "NDAYISHIMIYE Philemon" },
              { value: "Patrick", label: "HAKIZIMANA Joseph Patrick" },
              { value: "protogene", label: "MURWANASHYAKA Protegene" },
            ]}
            value={formData.taskerId}
            onChange={(e) => handleChange("taskerId", e.target.value)}
          />
          <Input
            type="file"
            label="Upload File (optional)"
            placeholder="If there is any file you want to show please upload"
            onChange={(e) =>
              handleChange(
                "documentUrl",
                (e as React.ChangeEvent<HTMLInputElement>).target.files?.[0] ??
                  null,
              )
            }
          />
        </div>
        <div>
          <Button
            label="Click To Request Service"
            onClick={handleSubmit}
            disabled={isLoading}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
