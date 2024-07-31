import { Masks } from "@/lib/constants/masks";
import { ChangeEvent, FC } from "react";
import InputMask from "react-input-mask";

interface InputProps {
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  mask?: Masks;
  errorMessage?: string;
}

const Input: FC<InputProps> = (props) => {
  const { className, mask, placeholder, errorMessage, value, onChange } = props;

  const hasError = !!errorMessage;

  if (mask) {
    return (
      <div className={`${className}`}>
        <InputMask
          className={`${className} ${hasError ? "bg-error-input" : "bg-input"} w-full h-[56px]  outline-none text-[16px] px-6`}
          mask={mask}
          onChange={onChange}
          value={value}
          name="phone"
          placeholder={placeholder}
        >
          {(inputProps) => <input {...inputProps} type="tel" />}
        </InputMask>

        {hasError && (
          <h3 className="text-[12px] text-red-400 mt-2">{errorMessage}</h3>
        )}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <input
        {...props}
        className={`${className} ${hasError ? "bg-error-input" : "bg-input"} w-full h-[56px]  outline-none text-[16px] px-6`}
        type="text"
        onChange={onChange}
        value={value}
      />
      {hasError && (
        <h3 className="text-[12px] text-red-400 mt-2">{errorMessage}</h3>
      )}
    </div>
  );
};

export default Input;
