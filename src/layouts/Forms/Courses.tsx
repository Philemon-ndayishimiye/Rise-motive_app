import { Button, Input } from "@/components/ui/InputAndButton";
import { COURSE_OPTIONS } from "@/utils/Constants";
import { useState } from "react";

type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  selectedCourse?: string;
  preferredSchedule?: string;
  experienceLevel?: string;
};

export default function CourseForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedCourse: "",
    preferredSchedule: "",
    experienceLevel: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    name: string,
    value: string | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const newValue = typeof value === "string" ? value : value.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  // validate

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!form.selectedCourse) {
      newErrors.selectedCourse = "Please select a course";
    }

    if (!form.preferredSchedule) {
      newErrors.preferredSchedule = "Please select a schedule";
    }

    if (!form.experienceLevel) {
      newErrors.experienceLevel = "Please select experience";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validate();

    if (!isValid) return;

    // map to backend format
    const payload = {
      fullName: form.fullName,
      phone: form.phone,
      email: form.email,
      selectedCourse: form.selectedCourse,
      preferredSchedule: form.preferredSchedule,
      experienceLevel: form.experienceLevel,
    };


    console.log("SUBMIT DATA:", payload);
    alert("Data SUbmitted Successfully")
  };
  return (
    <div className="py-3">
      <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[16px] font-bold py-5">
        Choose Your Course and Start Learning Today.
      </h1>

      <div className="py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <div>
            <Input
              type="text"
              label="Full Name"
              placeholder="Enter Your Full Name"
              value={form.fullName}
              variant={errors.fullName ? "danger" : "default"}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>

          <div>
            <Input
              type="email"
              label="Email"
              value={form.email}
              variant={errors.email ? "danger" : "default"}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <div>
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Enter Phone Number"
              value={form.phone}
              variant={errors.phone ? "danger" : "default"}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div>
            <Input
              type="select"
              label="Select Course"
              placeholder="Select Course"
              value={form.selectedCourse}
              variant={errors.selectedCourse ? "danger" : "default"}
              onChange={(e) => handleChange("selectedCourse", e.target.value)}
              options={COURSE_OPTIONS}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-3">
          <div>
            <Input
              type="select"
              label="Preffered Schedule"
              placeholder="Please Select your Schedule"
              value={form.preferredSchedule}
              variant={errors.preferredSchedule ? "danger" : "default"}
              onChange={(e) =>
                handleChange("preferredSchedule", e.target.value)
              }
              options={[
                { value: "morning", label: "9:00 - 11:00" },
                { value: "mid-morning", label: "2:00 - 4:00" },
                { value: "morning", label: "6:00 - 20:00" },
              ]}
            />
          </div>

          <div>
            <Input
              type="select"
              label="Experience"
              placeholder="select your Experience"
              value={form.experienceLevel}
              onChange={(e) => handleChange("experienceLevel", e.target.value)}
              variant={errors.experienceLevel ? "danger" : "default"}
              options={[
                { value: "beginner", label: "beginner" },
                { value: "intermediate", label: "Intermediate" },
              ]}
            />
          </div>
        </div>

        <div>
          <Button label="Click To Apply" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
