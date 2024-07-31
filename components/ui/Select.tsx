"use client";

import { ISelectOption } from "@/lib/models";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface SelectProps {
  options: ISelectOption[];
  value: ISelectOption;
  placeholder?: string;
  onChange: (value: string, option: ISelectOption) => void;
  className?: string;
  errorMessage?: string;
}

const Select: FC<SelectProps> = (props) => {
  const {
    options,
    placeholder,
    className = "",
    value,
    onChange,
    errorMessage = "",
  } = props;
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  useOnClickOutside(ref, handleClose);

  const hasError = !!errorMessage;

  return (
    <div className={`${className}`}>
      <div ref={ref} className="cursor-pointer relative">
        <div
          onClick={handleToggle}
          className={`${hasError ? "bg-error-input" : "bg-input"} w-full p-4 px-6 text-zinc-400  h-[56px]`}
        >
          {value.label ? value.label : placeholder && placeholder}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-input p-2 left-0 top-14 absolute w-full"
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value, option);
                    handleClose();
                  }}
                  className="p-1"
                >
                  {option.label}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {hasError && (
        <h3 className="text-[12px] text-red-400 mt-2">{errorMessage}</h3>
      )}
    </div>
  );
};

export default Select;
