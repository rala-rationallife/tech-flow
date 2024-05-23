import * as React from "react";
import styles from "@styles/input.module.css";

interface Props {
  type: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}

export function Input({
  type,
  id,
  onChange,
  placeholder,
  required,
  autoComplete,
}: Props) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
      required={required}
      autoComplete={autoComplete}
    />
  );
}
