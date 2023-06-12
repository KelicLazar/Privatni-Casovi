export interface InputProps {
  id: string;
  onInput(id: string, value: string, isValid: boolean): void;
  initialValue?: string;
  initialValid?: boolean;
  validators?: { type: string; val?: number }[];
  element?: string;
  disabled?: boolean;
  title?: string;
  pattern?: string;
  type?: string;
  placeholder?: string;
  noResize?: boolean;
  rows?: number;
  label?: string;
  errorText?: string;
}

export interface ButtonProps {
  href?: string;
  size?: string;
  inverse?: boolean;
  danger?: boolean;
  to?: string;
  exact?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?(event: any): void;
  disabled?: boolean;
}

export interface ImageUploadProps {
  id: string;
  initialValue: string | null;
  initialValid?: boolean;
  center?: boolean;
  action: string;
  errorText: string;
  onInput: (id: string, file: File | undefined, isValid: boolean) => void;
}

export interface CustomFormData {
  [key: string]: {
    value: string;
    isValid: boolean;
  };
}

export interface PromoItemProps {
  title: string;
  img: string;
  description: string;
  reverse?: boolean;
  action?: boolean;
}

export interface subjectOption {
  value: string;
  label: string;
}

export interface PromoListProps {
  list: PromoItemProps[];
}
