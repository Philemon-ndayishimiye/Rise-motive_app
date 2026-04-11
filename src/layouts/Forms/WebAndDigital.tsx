import { useState } from "react";
import { Button, Input } from "@/components/ui/InputAndButton";
import { useCreateWebRequestMutation } from "../../app/api/Taskspot/Web";

interface ApiError {
  status: number;
  data: { message?: string; errors?: unknown };
}

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

export default function WebAndDigital() {
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
    const payload = {
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      customerEmail: formData.customerEmail,
      service: formData.service,
      description: formData.description,
      documentUrl: formData.documentUrl?.name ?? "",
      preferredDate: formData.preferredDate,
      tasker: formData.taskerId,
    };
    try {
      await createWebRequest(payload).unwrap();
      setIsSuccess(true);
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
    } catch (error: unknown) {
      const err = error as ApiError;
      console.error("❌ Status:", err?.status);
      console.error("❌ Backend message:", err?.data?.message);
      console.error("❌ Backend data:", JSON.stringify(err?.data, null, 2));
      alert("Something went wrong. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-10 max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="font-bold text-[#1E3A8A] text-2xl mb-3">
            Thank You for Your Request!
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our team will review your request and reach out to you soon.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-6 px-6 py-2 bg-[#1E3A8A] text-white rounded-lg text-sm hover:opacity-90 transition"
          >
            Submit Another Request
          </button>
        </div>
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
            options={[
              { value: "website", label: "Web Development" },
              { value: "online", label: "Online Setup & Support" },
            ]}
            value={formData.service}
            variant={errors.service ? "danger" : "default"}
            helperText={errors.service}
            onChange={(e) => handleChange("service", e.target.value)}
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
            label={isLoading ? "Submitting..." : "Click To Request Service"}
            onClick={handleSubmit}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
