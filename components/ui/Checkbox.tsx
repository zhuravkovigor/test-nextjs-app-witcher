import CheckIcon from "@/lib/assets/Check";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import Typography from "./Typography";

interface CheckboxProps {
  value?: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  className?: string;
  errorMessage?: string;
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    errorMessage = "",
    value = false,
    onChange,
    className,
    label,
  } = props;

  const hasError = !!errorMessage;

  return (
    <div className={` ${className}`}>
      <div className={`flex items-center justify-center gap-4`}>
        <div
          onClick={() => onChange(!value)}
          className={`w-[32px] flex items-center justify-center h-[32px] ${hasError ? "bg-error-input border border-red-400" : "bg-input border-zinc-400"} border  `}
        >
          <AnimatePresence>
            {value && (
              <motion.div
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                }}
              >
                <CheckIcon className="w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {label && <Typography className="w-full">{label}</Typography>}
      </div>

      {hasError && (
        <h3 className="text-[12px] text-red-400 mt-2">{errorMessage}</h3>
      )}
    </div>
  );
};

export default Checkbox;
