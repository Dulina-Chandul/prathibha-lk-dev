import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectField = ({
  value,
  onChange,
  options,
  placeholder,
  name,
  className,
  required,
}) => {
  const handleValueChange = (newValue) => {
    // Simulate event object for consistent handling
    onChange({
      target: {
        name,
        value: newValue,
      },
    });
  };

  return (
    <Select value={value} onValueChange={handleValueChange} required={required}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectField;
