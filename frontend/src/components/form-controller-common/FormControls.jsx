import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SelectField from "./SelectField";
import { Textarea } from "../ui/textarea";

const componentMap = {
  Input: Input,
  Select: SelectField,
  Textarea: Textarea,
};

const FormControls = ({ formControlls = [], formData, setFormData }) => {
  const handleChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const renderField = (field) => {
    const Component = componentMap[field.componentType];

    if (!Component) {
      console.warn(`Component type ${field.componentType} not found`);
      return null;
    }

    const commonProps = {
      id: field.name,
      name: field.name,
      placeholder: field.placeholder,
      required: field.required,
      className: field.className,
      value: formData[field.name] || "",
      onChange: (e) => handleChange(e, field.name),
      ...field.props,
    };

    return (
      <div className="space-y-2" key={field.name}>
        <Label htmlFor={field.name} className="text-base">
          {field.label}
        </Label>
        <Component {...commonProps} />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {formControlls.map((control, index) => {
        if (control.inline) {
          return (
            <div key={index} className="grid grid-cols-2 gap-4">
              {control.fields.map((field) => renderField(field))}
            </div>
          );
        }
        return renderField(control);
      })}
    </div>
  );
};

export default FormControls;
