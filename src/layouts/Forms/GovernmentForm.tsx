import { useState } from "react";
import { Button, Input } from "@/components/ui/InputAndButton";
import { SERVICE_OPTIONS, TASKER_OPTIONS } from "@/utils/Constants";

// ── Types ──────────────────────────────────────────────────────────────────

type GovernmentFormProps = {
  title: string;
};

type GovernmentFormData = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  description: string;
  preferredDate: string;
  taskerId: string;
  documentUrl: File | null;
};

type FormErrors = Partial<Record<keyof GovernmentFormData, string>>;

// ── Initial State ──────────────────────────────────────────────────────────

const INITIAL_FORM_STATE: GovernmentFormData = {
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  service: "",
  description: "",
  preferredDate: "",
  taskerId: "",
  documentUrl: null,
};

// ── Validation ─────────────────────────────────────────────────────────────

const validateForm = (data: GovernmentFormData): FormErrors => {
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

// ── Component ──────────────────────────────────────────────────────────────

export default function GovernmentForm({ title }: GovernmentFormProps) {
  const [formData, setFormData] =
    useState<GovernmentFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Field change — clears error as soon as user starts typing ────────────

  const handleChange = (
    field: keyof GovernmentFormData,
    value: string | File | null,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear the error for this field the moment user corrects it
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // ── Submit ────────────────────────────────────────────────────────────────

  const handleSubmit = async () => {
    // Run validation and show all errors at once
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build payload matching your backend contract
    const payload = {
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      customerEmail: formData.customerEmail,
      serviceCategory: "E_GOVERNMENT",
      service: formData.service,
      description: formData.description,
      documentUrl: formData.documentUrl?.name ?? "",
      preferredDate: formData.preferredDate,
      location: "",
      taskerId: formData.taskerId ? Number(formData.taskerId) : 0,
    };

    setIsSubmitting(true);

    try {
      // ── Console log for now — replace with your API call later ──
      console.log("📦 Submitting Government Service Request:", payload);

      // TODO: replace with your real API call, e.g.:
      // const response = await fetch("/api/service-requests", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      await new Promise((resolve) => setTimeout(resolve, 800));

      alert("Request submitted successfully!");
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
    } catch (error) {
      console.error(" Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="py-3">
      <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[16px] font-bold py-5">
        {title}
      </h1>

      <div className="py-2">
        {/* Row 1 — Name & Email */}
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

        {/* Row 2 — Phone & Service */}
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
            options={SERVICE_OPTIONS}
            value={formData.service}
            variant={errors.service ? "danger" : "default"}
            helperText={errors.service}
            onChange={(e) => handleChange("service", e.target.value)}
          />
        </div>

        {/* Row 3 — Description & Preferred Date */}
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

        {/* Row 4 — Tasker & File (both optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8 pb-3">
          <Input
            type="select"
            label="Choose Tasker (optional)"
            placeholder="Your Preferred Tasker"
            options={TASKER_OPTIONS}
            value={formData.taskerId}
            onChange={(e) => handleChange("taskerId", e.target.value)}
          />
          <Input
            type="file"
            label="Upload File (optional)"
            placeholder="Upload any relevant document"
            onChange={(e) =>
              handleChange(
                "documentUrl",
                (e as React.ChangeEvent<HTMLInputElement>).target.files?.[0] ??
                  null,
              )
            }
          />
        </div>

        {/* Submit */}
        <div>
          <Button
            label={isSubmitting ? "Submitting..." : "Click To Request Service"}
            onClick={handleSubmit}
            disabled={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}
