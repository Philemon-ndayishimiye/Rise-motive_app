import { useState } from "react";
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
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-10 max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="font-bold text-[#1E3A8A] text-2xl mb-3">
            Thank You for Enrolling!
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our team will review your registration and reach out to you soon.
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

    if (isSuccess) {
      return (
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-10 max-w-md">
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="font-bold text-[#1E3A8A] text-2xl mb-3">
              Enrollment Received!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Thank you for registering for our training program. Our team will
              contact you shortly via your phone number or email to confirm your
              enrollment and share next steps.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 px-6 py-2 bg-[#1E3A8A] text-white rounded-lg text-sm hover:opacity-90 transition"
            >
              Register Another
            </button>
          </div>
        </div>
      );
    }
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
              { value: "WEB_DEVELOPMENT", label: "Web Development" },
              { value: "GRAPHIC_DESIGN", label: "Graphic Design" },
              { value: "DATA_ANALYSIS", label: "Data Analysis" },
              { value: "DIGITAL_MARKETING", label: "Digital Marketing" },
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
            label={isLoading ? "Submitting..." : "Click To Enroll Now"}
            onClick={handleSubmit}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
