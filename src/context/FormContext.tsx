import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { initialFormData } from "../types/FormData";
import type { FormData } from "../types/FormData";

interface FormContextType {
  formData: FormData;
  updateFormData: (fields: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

// Custom hook för att förenkla användning av useContext i komponenterna
export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext måste användas inom FormProvider");
  }
  return context;
}