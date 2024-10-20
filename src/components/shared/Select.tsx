import React from 'react';

interface IOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  options: IOption[];
  required?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  error = '',
  ariaLabel = '',
  required = false,
  disabled = false,
  placeholder = 'Please select',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (disabled) {
      return;
    }
    onChange(e);
  };
  return (
    <div className='mb-4 w-full'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>

      <select
        id={id}
        value={value}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        aria-invalid={Boolean(error)}
        aria-label={ariaLabel || label}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-white ${
          error ? 'border-red-500' : ''
        } ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}
      >
        <option value='' disabled className='my-1'>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className='my-1 cursor-pointer'
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p id={`${id}-error`} className='mt-2 text-sm text-red-600'>
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
