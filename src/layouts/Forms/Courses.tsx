import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Button, Input } from "@/components/ui/InputAndButton";
import { useCreateTrainingRequestMutation } from "../../app/api/Taskspot/training";

// ── Types ──────────────────────────────────────────────────────────────────

interface ApiError {
  status: number;
  data: { message?: string; errors?: unknown };
}

type TrainingFormData = {
  fullName: string;
  email: string;
  phone: string;
  selectedCourse: string;
  preferredSchedule: string;
  experienceLevel: string;
};

type FormErrors = Partial<Record<keyof TrainingFormData, string>>;

// ── Initial State ──────────────────────────────────────────────────────────

const INITIAL_FORM_STATE: TrainingFormData = {
  fullName: "",
  email: "",
  phone: "",
  selectedCourse: "",
  preferredSchedule: "",
  experienceLevel: "",
};

// ── Validation ─────────────────────────────────────────────────────────────

const validateForm = (data: TrainingFormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.selectedCourse) errors.selectedCourse = "Please select a course.";
  if (!data.preferredSchedule)
    errors.preferredSchedule = "Please select a schedule.";
  if (!data.experienceLevel)
    errors.experienceLevel = "Please select your experience level.";
  return errors;
};

// ── Component ──────────────────────────────────────────────────────────────

export default function TrainingForm() {
  const [formData, setFormData] =
    useState<TrainingFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const [createTrainingRequest, { isLoading }] =
    useCreateTrainingRequestMutation();

  const handleChange = (field: keyof TrainingFormData, value: string) => {
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
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      selectedCourse: formData.selectedCourse,
      preferredSchedule: formData.preferredSchedule,
      experienceLevel: formData.experienceLevel,
    };

    try {
      await createTrainingRequest(payload).unwrap();
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

  // ── Success Screen ────────────────────────────────────────────────────────

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-[60vh] text-center px-6">
        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6">
          <GraduationCap className="w-10 h-10 text-[#1E3A8A]" />
        </div>

        {/* Title */}
        <h2 className="font-bold text-[#1E3A8A] text-2xl mb-3 font-family-playfair">
          Enrollment Received!
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-family-playfair max-w-sm">
          Thank you for registering for our training program. Our team will
          contact you shortly via your phone number or email to confirm your
          enrollment and share next steps.
        </p>

        {/* Button */}
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 w-full sm:w-auto px-8 py-3 bg-[#1E3A8A] text-white rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all duration-200 font-family-playfair"
        >
          Register Another
        </button>
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="py-3">
      <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[16px] font-bold py-5">
        Build your skills with expert-led training programs tailored for you.
      </h1>

      <div className="py-2">
        {/* Row 1 — Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter Your Full Name"
            value={formData.fullName}
            variant={errors.fullName ? "danger" : "default"}
            helperText={errors.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            value={formData.email}
            variant={errors.email ? "danger" : "default"}
            helperText={errors.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Row 2 — Phone & Course */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="tel"
            label="Phone Number"
            placeholder="Enter Phone Number"
            value={formData.phone}
            variant={errors.phone ? "danger" : "default"}
            helperText={errors.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <Input
            type="select"
            label="Select Course"
            placeholder="Choose a Course"
            options={[
              { value: "COMPUTER_FOUNDATIONS", label: "Computer Foundations" },
              { value: "MICROSOFT_OFFICE", label: "Microsoft Office" },
              { value: "GOOGLE_TOOLS", label: "Google Tools" },
              { value: "E_GOVERNMENT_TOOLS", label: "E-Government Tools" },
              {
                value: "DIGITAL_CONTENT_CREATION",
                label: "Digital Content Creation",
              },
              { value: "GRAPHIC_DESIGN", label: "Graphic Design" },
              { value: "AI_AND_DIGITAL_TOOLS", label: "AI & Digital Tools" },
              { value: "BASIC_PROGRAMMING", label: "Basic Programming" },
            ]}
            value={formData.selectedCourse}
            variant={errors.selectedCourse ? "danger" : "default"}
            helperText={errors.selectedCourse}
            onChange={(e) => handleChange("selectedCourse", e.target.value)}
          />
        </div>

        {/* Row 3 — Schedule & Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <Input
            type="select"
            label="Preferred Schedule"
            placeholder="Choose Your Schedule"
            options={[
              { value: "MORNING", label: "Morning (8AM - 12PM)" },
              { value: "AFTERNOON", label: "Afternoon (1PM - 5PM)" },
              { value: "EVENING", label: "Evening (6PM - 9PM)" },
              { value: "WEEKEND", label: "Weekend" },
            ]}
            value={formData.preferredSchedule}
            variant={errors.preferredSchedule ? "danger" : "default"}
            helperText={errors.preferredSchedule}
            onChange={(e) => handleChange("preferredSchedule", e.target.value)}
          />
          <Input
            type="select"
            label="Experience Level"
            placeholder="Select Your Experience Level"
            options={[
              { value: "BEGINNER", label: "Beginner" },
              { value: "INTERMEDIATE", label: "Intermediate" },
              { value: "ADVANCED", label: "Advanced" },
            ]}
            value={formData.experienceLevel}
            variant={errors.experienceLevel ? "danger" : "default"}
            helperText={errors.experienceLevel}
            onChange={(e) => handleChange("experienceLevel", e.target.value)}
          />
        </div>

        {/* Submit */}
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
