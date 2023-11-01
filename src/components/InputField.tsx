import { useCallback, useEffect, useState } from "react";

interface InputFieldProps {
  type: "text" | "password";
  error?: boolean;
  errorMessage?: string;
  fieldName: string;
  labelText: string;
  value?: string;
  onChange?: (value: string) => void;
}
export default function InputField({
  type,
  error,
  errorMessage,
  fieldName,
  labelText,
  onChange,
  value = "",
}: InputFieldProps) {
  const [currentValue, setCurrentValue] = useState<string>(value);

  const handleValueChange = useCallback(
    (event: { target: { value: string } }) => {
      console.log(event);
      const value = event.target.value as string;
      setCurrentValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={`form-input ${error && "error"}`}>
      <label>{labelText}</label>
      <input
        type={type}
        name={fieldName}
        value={currentValue}
        onChange={handleValueChange}
      />
      {errorMessage && error ? (
        <span className="error-message">{errorMessage}</span>
      ) : null}
    </div>
  );
}
