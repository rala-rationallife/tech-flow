import * as React from "react";
import styles from "@styles/input.module.css";

interface Props {
  type: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export function Input({ type, id, onChange, placeholder }: Props) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}
