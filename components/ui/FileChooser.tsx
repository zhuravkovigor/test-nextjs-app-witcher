import ClipIcon from "@/lib/assets/Clip";
import { FC } from "react";

interface FileChooserProps {
  className?: string;
  value: File | null;
  onChange: (value: File) => void;
  placeholder?: string;
  errorMessage?: string;
}

const FileChooser: FC<FileChooserProps> = (props) => {
  const { className = "", value, onChange, placeholder, errorMessage } = props;

  const hasFile = value;
  const inputText = hasFile ? value.name : placeholder;

  const hasError = !!errorMessage;

  return (
    <div>
      <label
        className={`${hasError ? "bg-error-input" : "bg-input"} h-[56px] items-center px-4 justify-between flex ${className}`}
      >
        <input
          className="hidden w-full h-full"
          type="file"
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (!file) return;

            onChange(file);
          }}
        />
        {inputText}
        <ClipIcon className="w-5 opacity-80" />
      </label>

      {hasError && (
        <h3 className="text-[12px] text-red-400 mt-2">{errorMessage}</h3>
      )}
    </div>
  );
};

export default FileChooser;
