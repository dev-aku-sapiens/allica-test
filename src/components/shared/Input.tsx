import React, { HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  ariaLabel?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  error = '',
  type = 'text',
  ariaLabel = '',
  placeholder = '',
  required = false,
}) => {
  return (
    <div className='mb-4 w-full'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-label={ariaLabel || label}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border border-gray-300 rounded px-3 py-2 mt-1 ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && (
        <p id={`${id}-error`} className='mt-2 text-sm text-red-600'>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
