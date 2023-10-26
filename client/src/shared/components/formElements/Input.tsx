import * as React from 'react';

import {
  TextareaProps,
  InputProps,
  FormControlProps,
} from '../../../utils/interfaces';

export const FormControl = ({ children, label }: FormControlProps) => {
  return (
    <div className='flex flex-col mb-5'>
      <label className='text-text font-medium mb-3'>{label}</label>
      {children}
    </div>
  );
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ children, type, label, ...props }, ref) => {
    return (
      <FormControl label={label}>
        <input
          type={type || 'text'}
          className='input-styles'
          {...props}
          ref={ref}
        />
        {children}
      </FormControl>
    );
  }
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ children, rows, label, ...props }, ref) => {
    return (
      <FormControl label={label}>
        <textarea
          className='input-styles'
          {...props}
          rows={rows || 5}
          ref={ref}
        />
        {children}
      </FormControl>
    );
  }
);

Textarea.displayName = 'Textarea';
Input.displayName = 'Input';
