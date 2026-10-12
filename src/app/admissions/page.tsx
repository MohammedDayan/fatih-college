"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Calendar,
  FileCheck,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  GraduationCap,
  Users,
  BookOpen,
  Send,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface StudentInfo {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  placeOfBirth: string;
  religion: string;
  homeAddress: string;
  phoneNumber: string;
  email: string;
}

interface ParentGuardianInfo {
  fatherFullName: string;
  fatherPhone: string;
  fatherOccupation: string;
  motherFullName: string;
  motherPhone: string;
  motherOccupation: string;
  guardianFullName: string;
  guardianPhone: string;
  guardianEmail: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  relationshipToStudent: string;
}

interface AcademicInfo {
  previousSchoolName: string;
  previousSchoolAddress: string;
  lastGradeCompleted: string;
  yearOfCompletion: string;
  programApplyingFor: string;
  preferredStartDate: string;
  academicAchievements: string;
}

interface AdditionalInfo {
  medicalConditions: string;
  howDidYouHear: string;
  additionalComments: string;
  confirmAccuracy: boolean;
  agreeTerms: boolean;
}

interface FormData {
  student: StudentInfo;
  parent: ParentGuardianInfo;
  academic: AcademicInfo;
  additional: AdditionalInfo;
}

interface ValidationErrors {
  [key: string]: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const STEPS = [
  { label: "Student Info", icon: GraduationCap },
  { label: "Parent/Guardian", icon: Users },
  { label: "Academics", icon: BookOpen },
  { label: "Submit", icon: Send },
] as const;

const INITIAL_FORM: FormData = {
  student: {
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    placeOfBirth: "",
    religion: "",
    homeAddress: "",
    phoneNumber: "",
    email: "",
  },
  parent: {
    fatherFullName: "",
    fatherPhone: "",
    fatherOccupation: "",
    motherFullName: "",
    motherPhone: "",
    motherOccupation: "",
    guardianFullName: "",
    guardianPhone: "",
    guardianEmail: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    relationshipToStudent: "",
  },
  academic: {
    previousSchoolName: "",
    previousSchoolAddress: "",
    lastGradeCompleted: "",
    yearOfCompletion: "",
    programApplyingFor: "",
    preferredStartDate: "",
    academicAchievements: "",
  },
  additional: {
    medicalConditions: "",
    howDidYouHear: "",
    additionalComments: "",
    confirmAccuracy: false,
    agreeTerms: false,
  },
};

const PROGRAMS = [
  "Online Certificates",
  "Online Diplomas",
  "Associate Degrees",
  "Preparatory Program",
  "Summer Courses",
  "Professional Certificates",
];

const START_DATES = ["September 2025", "January 2026", "May 2026"];

const REFERRAL_SOURCES = [
  "Social Media",
  "Friend/Family",
  "Website",
  "Advertisement",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Shared UI Atoms                                                    */
/* ------------------------------------------------------------------ */

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-gray-700 mb-1.5"
    >
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function InputField({
  id,
  label,
  type = "text",
  required,
  value,
  error,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200
          ${
            error
              ? "border-red-400 ring-2 ring-red-100 focus:border-red-500 focus:ring-red-200"
              : "border-gray-200 hover:border-gray-300 focus:border-[#1E9BD7] focus:ring-2 focus:ring-[#1E9BD7]/20"
          }
          bg-white placeholder:text-gray-400`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  required,
  value,
  error,
  options,
  placeholder = "Select an option",
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  error?: string;
  options: string[];
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none bg-white
          ${
            error
              ? "border-red-400 ring-2 ring-red-100 focus:border-red-500 focus:ring-red-200"
              : "border-gray-200 hover:border-gray-300 focus:border-[#1E9BD7] focus:ring-2 focus:ring-[#1E9BD7]/20"
          }
          ${!value ? "text-gray-400" : "text-gray-900"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function TextareaField({
  id,
  label,
  required,
  value,
  error,
  placeholder,
  rows = 3,
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  error?: string;
  placeholder?: string;
  rows?: number;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea
        id={id}
        required={required}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 resize-none
          ${
            error
              ? "border-red-400 ring-2 ring-red-100 focus:border-red-500 focus:ring-red-200"
              : "border-gray-200 hover:border-gray-300 focus:border-[#1E9BD7] focus:ring-2 focus:ring-[#1E9BD7]/20"
          }
          bg-white placeholder:text-gray-400`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function AdmissionsPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  /* ---- helpers --------------------------------------------------- */

  const updateStudent = useCallback(
    (field: keyof StudentInfo, value: string) => {
      setFormData((prev) => ({
        ...prev,
        student: { ...prev.student, [field]: value },
      }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`student.${field}`];
        return next;
      });
    },
    []
  );

  const updateParent = useCallback(
    (field: keyof ParentGuardianInfo, value: string) => {
      setFormData((prev) => ({
        ...prev,
        parent: { ...prev.parent, [field]: value },
      }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`parent.${field}`];
        return next;
      });
    },
    []
  );

  const updateAcademic = useCallback(
    (field: keyof AcademicInfo, value: string) => {
      setFormData((prev) => ({
        ...prev,
        academic: { ...prev.academic, [field]: value },
      }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`academic.${field}`];
        return next;
      });
    },
    []
  );

  const updateAdditional = useCallback(
    (field: keyof AdditionalInfo, value: string | boolean) => {
      setFormData((prev) => ({
        ...prev,
        additional: { ...prev.additional, [field]: value },
      }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`additional.${field}`];
        return next;
      });
    },
    []
  );

  /* ---- validation ------------------------------------------------ */

  function validateStep(step: number): boolean {
    const errs: ValidationErrors = {};

    if (step === 0) {
      if (!formData.student.fullName.trim())
        errs["student.fullName"] = "Full name is required";
      if (!formData.student.dateOfBirth)
        errs["student.dateOfBirth"] = "Date of birth is required";
      if (!formData.student.gender)
        errs["student.gender"] = "Please select a gender";
    }

    if (step === 2) {
      if (!formData.academic.previousSchoolName.trim())
        errs["academic.previousSchoolName"] = "Previous school name is required";
      if (!formData.academic.lastGradeCompleted.trim())
        errs["academic.lastGradeCompleted"] = "Last grade completed is required";
    }

    if (step === 3) {
      if (!formData.additional.confirmAccuracy)
        errs["additional.confirmAccuracy"] =
          "You must confirm the information is accurate";
      if (!formData.additional.agreeTerms)
        errs["additional.agreeTerms"] =
          "You must agree to the terms and conditions";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function goNext() {
    if (!validateStep(currentStep)) return;
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goPrev() {
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  function handleSubmit() {
    if (!validateStep(3)) return;
    setSubmitted(true);
  }

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---- Hero ------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E9BD7] via-[#3AAEE0] to-[#7AB648]">
        {/* decorative circles */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/[0.03]" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-white/15 px-5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              Enrollment Open
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Apply for Admission
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Start your journey at Fatih College. Complete the application form
              below to begin the enrollment process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---- Info Cards ------------------------------------------- */}
      <section className="relative z-10 mx-auto -mt-12 max-w-5xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Application Process",
              desc: "Complete the online form, submit required documents, and await confirmation.",
              color: "#1E9BD7",
            },
            {
              icon: Calendar,
              title: "Important Dates",
              desc: "Applications are open year-round. Early applications receive priority consideration.",
              color: "#F29120",
            },
            {
              icon: FileCheck,
              title: "Requirements",
              desc: "Academic transcripts, passport photos, and guardian information required.",
              color: "#7AB648",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-black/[0.04] transition-shadow hover:shadow-xl"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${card.color}15` }}
              >
                <card.icon
                  className="h-6 w-6"
                  style={{ color: card.color }}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- Form ------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-gray-100 bg-white shadow-xl shadow-black/[0.04] overflow-hidden"
        >
          {/* ---- Step indicator ----------------------------------- */}
          <div className="border-b border-gray-100 bg-gray-50/60 px-6 py-6 sm:px-10">
            <div className="flex items-center justify-between">
              {STEPS.map((step, i) => {
                const StepIcon = step.icon;
                const isActive = i === currentStep;
                const isCompleted = i < currentStep;

                return (
                  <div key={step.label} className="flex items-center flex-1 last:flex-none">
                    {/* step circle + label */}
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          isCompleted
                            ? "border-[#1E9BD7] bg-[#1E9BD7] text-white"
                            : isActive
                            ? "border-[#1E9BD7] bg-[#1E9BD7]/10 text-[#1E9BD7]"
                            : "border-gray-200 bg-white text-gray-400"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <StepIcon className="h-5 w-5" />
                        )}
                      </div>
                      <span
                        className={`hidden text-xs font-semibold sm:block ${
                          isActive || isCompleted
                            ? "text-[#1E9BD7]"
                            : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>

                    {/* connector line */}
                    {i < STEPS.length - 1 && (
                      <div className="mx-3 h-0.5 flex-1 rounded-full bg-gray-200 sm:mx-4">
                        <div
                          className="h-full rounded-full bg-[#1E9BD7] transition-all duration-500"
                          style={{
                            width: isCompleted ? "100%" : "0%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---- Step content ------------------------------------- */}
          <div className="relative min-h-[520px] px-6 py-8 sm:px-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {currentStep === 0 && (
                  <Step1
                    data={formData.student}
                    errors={errors}
                    onChange={updateStudent}
                  />
                )}
                {currentStep === 1 && (
                  <Step2
                    data={formData.parent}
                    errors={errors}
                    onChange={updateParent}
                  />
                )}
                {currentStep === 2 && (
                  <Step3
                    data={formData.academic}
                    errors={errors}
                    onChange={updateAcademic}
                  />
                )}
                {currentStep === 3 && (
                  <Step4
                    data={formData.additional}
                    errors={errors}
                    onChange={updateAdditional}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---- Navigation buttons ------------------------------ */}
          <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
            <button
              type="button"
              onClick={goPrev}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                currentStep === 0
                  ? "cursor-not-allowed text-gray-300"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {currentStep < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1E9BD7] to-[#3AAEE0] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1E9BD7]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#1E9BD7]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Next Step
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1E9BD7] via-[#3AAEE0] to-[#7AB648] px-10 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1E9BD7]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#1E9BD7]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="h-4 w-4" />
                Submit Application
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* ---- Success Modal --------------------------------------- */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
            >
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(0);
                  setFormData(INITIAL_FORM);
                }}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#1E9BD7]/10">
                <CheckCircle2 className="h-10 w-10 text-[#1E9BD7]" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Application Submitted!
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Thank you for applying to Fatih College. We have received your
                application and will contact you shortly with the next steps.
              </p>

              <div className="mt-4 rounded-xl bg-[#F29120]/10 px-4 py-3">
                <p className="text-sm font-medium text-[#F29120]">
                  Please check your email for a confirmation message.
                </p>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(0);
                  setFormData(INITIAL_FORM);
                }}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#1E9BD7] to-[#3AAEE0] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1E9BD7]/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================== */
/*  STEP COMPONENTS                                                    */
/* ================================================================== */

/* ---- Step 1: Student Info --------------------------------------- */

function Step1({
  data,
  errors,
  onChange,
}: {
  data: StudentInfo;
  errors: ValidationErrors;
  onChange: (field: keyof StudentInfo, value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Student Information
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        Provide the student&apos;s personal details below.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <InputField
            id="fullName"
            label="Full Name"
            required
            value={data.fullName}
            error={errors["student.fullName"]}
            placeholder="e.g. Kwame Asante"
            onChange={(v) => onChange("fullName", v)}
          />
        </div>

        <InputField
          id="dateOfBirth"
          label="Date of Birth"
          type="date"
          required
          value={data.dateOfBirth}
          error={errors["student.dateOfBirth"]}
          onChange={(v) => onChange("dateOfBirth", v)}
        />

        <SelectField
          id="gender"
          label="Gender"
          required
          value={data.gender}
          error={errors["student.gender"]}
          options={["Male", "Female"]}
          placeholder="Select gender"
          onChange={(v) => onChange("gender", v)}
        />

        <InputField
          id="nationality"
          label="Nationality"
          value={data.nationality}
          placeholder="e.g. Ghanaian"
          onChange={(v) => onChange("nationality", v)}
        />

        <InputField
          id="placeOfBirth"
          label="Place of Birth"
          value={data.placeOfBirth}
          placeholder="e.g. Accra"
          onChange={(v) => onChange("placeOfBirth", v)}
        />

        <InputField
          id="religion"
          label="Religion"
          value={data.religion}
          placeholder="e.g. Christianity"
          onChange={(v) => onChange("religion", v)}
        />

        <div /> {/* spacer to keep grid alignment */}

        <div className="sm:col-span-2">
          <TextareaField
            id="homeAddress"
            label="Home Address"
            value={data.homeAddress}
            placeholder="Enter full home address"
            onChange={(v) => onChange("homeAddress", v)}
          />
        </div>

        <InputField
          id="studentPhone"
          label="Student Phone Number"
          type="tel"
          value={data.phoneNumber}
          placeholder="e.g. +233 XX XXX XXXX"
          onChange={(v) => onChange("phoneNumber", v)}
        />

        <InputField
          id="studentEmail"
          label="Student Email"
          type="email"
          value={data.email}
          placeholder="e.g. student@example.com"
          onChange={(v) => onChange("email", v)}
        />
      </div>
    </div>
  );
}

/* ---- Step 2: Parent/Guardian Info ------------------------------- */

function Step2({
  data,
  errors,
  onChange,
}: {
  data: ParentGuardianInfo;
  errors: ValidationErrors;
  onChange: (field: keyof ParentGuardianInfo, value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Parent / Guardian Information
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        Provide contact details for the student&apos;s parents or guardians.
      </p>

      {/* Father */}
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E9BD7] mb-4">
        Father&apos;s Details
      </h3>
      <div className="grid gap-5 sm:grid-cols-3 mb-8">
        <InputField
          id="fatherFullName"
          label="Full Name"
          value={data.fatherFullName}
          placeholder="Father's full name"
          onChange={(v) => onChange("fatherFullName", v)}
        />
        <InputField
          id="fatherPhone"
          label="Phone Number"
          type="tel"
          value={data.fatherPhone}
          placeholder="+233 XX XXX XXXX"
          onChange={(v) => onChange("fatherPhone", v)}
        />
        <InputField
          id="fatherOccupation"
          label="Occupation"
          value={data.fatherOccupation}
          placeholder="e.g. Engineer"
          onChange={(v) => onChange("fatherOccupation", v)}
        />
      </div>

      {/* Mother */}
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E9BD7] mb-4">
        Mother&apos;s Details
      </h3>
      <div className="grid gap-5 sm:grid-cols-3 mb-8">
        <InputField
          id="motherFullName"
          label="Full Name"
          value={data.motherFullName}
          placeholder="Mother's full name"
          onChange={(v) => onChange("motherFullName", v)}
        />
        <InputField
          id="motherPhone"
          label="Phone Number"
          type="tel"
          value={data.motherPhone}
          placeholder="+233 XX XXX XXXX"
          onChange={(v) => onChange("motherPhone", v)}
        />
        <InputField
          id="motherOccupation"
          label="Occupation"
          value={data.motherOccupation}
          placeholder="e.g. Teacher"
          onChange={(v) => onChange("motherOccupation", v)}
        />
      </div>

      {/* Guardian */}
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#7AB648] mb-4">
        Guardian (if different from parents)
      </h3>
      <div className="grid gap-5 sm:grid-cols-3 mb-8">
        <InputField
          id="guardianFullName"
          label="Full Name"
          value={data.guardianFullName}
          placeholder="Guardian's full name"
          onChange={(v) => onChange("guardianFullName", v)}
        />
        <InputField
          id="guardianPhone"
          label="Phone Number"
          type="tel"
          value={data.guardianPhone}
          placeholder="+233 XX XXX XXXX"
          onChange={(v) => onChange("guardianPhone", v)}
        />
        <InputField
          id="guardianEmail"
          label="Email"
          type="email"
          value={data.guardianEmail}
          placeholder="guardian@example.com"
          onChange={(v) => onChange("guardianEmail", v)}
        />
      </div>

      {/* Emergency Contact */}
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-4">
        Emergency Contact
      </h3>
      <div className="grid gap-5 sm:grid-cols-3">
        <InputField
          id="emergencyContactName"
          label="Contact Name"
          value={data.emergencyContactName}
          placeholder="Emergency contact name"
          onChange={(v) => onChange("emergencyContactName", v)}
        />
        <InputField
          id="emergencyContactPhone"
          label="Contact Phone"
          type="tel"
          value={data.emergencyContactPhone}
          placeholder="+233 XX XXX XXXX"
          onChange={(v) => onChange("emergencyContactPhone", v)}
        />
        <InputField
          id="relationshipToStudent"
          label="Relationship to Student"
          value={data.relationshipToStudent}
          placeholder="e.g. Uncle"
          onChange={(v) => onChange("relationshipToStudent", v)}
        />
      </div>
    </div>
  );
}

/* ---- Step 3: Academic Info -------------------------------------- */

function Step3({
  data,
  errors,
  onChange,
}: {
  data: AcademicInfo;
  errors: ValidationErrors;
  onChange: (field: keyof AcademicInfo, value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Academic Information
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        Tell us about your educational background and the program you wish to
        apply for.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <InputField
            id="previousSchoolName"
            label="Previous School Name"
            required
            value={data.previousSchoolName}
            error={errors["academic.previousSchoolName"]}
            placeholder="Name of your previous school"
            onChange={(v) => onChange("previousSchoolName", v)}
          />
        </div>

        <div className="sm:col-span-2">
          <InputField
            id="previousSchoolAddress"
            label="Previous School Address"
            value={data.previousSchoolAddress}
            placeholder="Address of your previous school"
            onChange={(v) => onChange("previousSchoolAddress", v)}
          />
        </div>

        <InputField
          id="lastGradeCompleted"
          label="Last Class/Grade Completed"
          required
          value={data.lastGradeCompleted}
          error={errors["academic.lastGradeCompleted"]}
          placeholder="e.g. JHS 3 or SHS 2"
          onChange={(v) => onChange("lastGradeCompleted", v)}
        />

        <InputField
          id="yearOfCompletion"
          label="Year of Completion"
          value={data.yearOfCompletion}
          placeholder="e.g. 2024"
          onChange={(v) => onChange("yearOfCompletion", v)}
        />

        <SelectField
          id="programApplyingFor"
          label="Program Applying For"
          value={data.programApplyingFor}
          options={PROGRAMS}
          placeholder="Select a program"
          onChange={(v) => onChange("programApplyingFor", v)}
        />

        <SelectField
          id="preferredStartDate"
          label="Preferred Start Date"
          value={data.preferredStartDate}
          options={START_DATES}
          placeholder="Select start date"
          onChange={(v) => onChange("preferredStartDate", v)}
        />

        <div className="sm:col-span-2">
          <TextareaField
            id="academicAchievements"
            label="Academic Achievements / Awards"
            value={data.academicAchievements}
            placeholder="List any notable academic achievements, awards, or extracurricular activities..."
            rows={4}
            onChange={(v) => onChange("academicAchievements", v)}
          />
        </div>
      </div>
    </div>
  );
}

/* ---- Step 4: Additional Info & Submit --------------------------- */

function Step4({
  data,
  errors,
  onChange,
}: {
  data: AdditionalInfo;
  errors: ValidationErrors;
  onChange: (field: keyof AdditionalInfo, value: string | boolean) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Additional Information
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        Almost done! Provide any additional information and confirm your
        application.
      </p>

      <div className="space-y-5">
        <TextareaField
          id="medicalConditions"
          label="Medical Conditions or Allergies"
          value={data.medicalConditions}
          placeholder="List any medical conditions, allergies, or special needs we should be aware of..."
          rows={3}
          onChange={(v) => onChange("medicalConditions", v)}
        />

        <SelectField
          id="howDidYouHear"
          label="How did you hear about Fatih College?"
          value={data.howDidYouHear}
          options={REFERRAL_SOURCES}
          placeholder="Select an option"
          onChange={(v) => onChange("howDidYouHear", v)}
        />

        <TextareaField
          id="additionalComments"
          label="Additional Comments or Questions"
          value={data.additionalComments}
          placeholder="Any additional information you would like to share with us..."
          rows={4}
          onChange={(v) => onChange("additionalComments", v)}
        />

        {/* Divider */}
        <div className="border-t border-gray-100 pt-6 mt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Declaration
          </h3>

          {/* Confirm accuracy */}
          <label
            className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all duration-200 ${
              errors["additional.confirmAccuracy"]
                ? "border-red-300 bg-red-50"
                : data.confirmAccuracy
                ? "border-[#1E9BD7]/30 bg-[#1E9BD7]/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <input
              type="checkbox"
              checked={data.confirmAccuracy}
              onChange={(e) => onChange("confirmAccuracy", e.target.checked)}
              className="mt-0.5 h-5 w-5 rounded border-gray-300 text-[#1E9BD7] accent-[#1E9BD7]"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">
                I confirm that all information provided is accurate
              </span>
              {errors["additional.confirmAccuracy"] && (
                <p className="text-xs text-red-500 mt-1">
                  {errors["additional.confirmAccuracy"]}
                </p>
              )}
            </div>
          </label>

          {/* Agree to terms */}
          <label
            className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all duration-200 mt-3 ${
              errors["additional.agreeTerms"]
                ? "border-red-300 bg-red-50"
                : data.agreeTerms
                ? "border-[#1E9BD7]/30 bg-[#1E9BD7]/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <input
              type="checkbox"
              checked={data.agreeTerms}
              onChange={(e) => onChange("agreeTerms", e.target.checked)}
              className="mt-0.5 h-5 w-5 rounded border-gray-300 text-[#1E9BD7] accent-[#1E9BD7]"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">
                I agree to the terms and conditions of Fatih College
              </span>
              {errors["additional.agreeTerms"] && (
                <p className="text-xs text-red-500 mt-1">
                  {errors["additional.agreeTerms"]}
                </p>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
