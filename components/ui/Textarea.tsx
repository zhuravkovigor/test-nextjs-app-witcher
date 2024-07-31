import { ChangeEvent, FC } from "react";

interface TextareaProps {
  placeholder?: string;
  onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  errorMessage?: string;
  value?: string;
}

const Textarea: FC<TextareaProps> = (props) => {
  const { className, placeholder, value, onChange, errorMessage } = props;

  const hasError = !!errorMessage;

  return (
    <div>
      <textarea
        placeholder={placeholder}
        className={`${hasError ? "bg-error-input" : "bg-input"} w-full  resize-none h-[156px] outline-none p-6 ${className}`}
        value={value}
        onChange={onChange}
      ></textarea>

      {hasError && (
        <h3 className="text-[12px] text-red-400 mt-2">{errorMessage}</h3>
      )}
    </div>
  );
};

export default Textarea;
