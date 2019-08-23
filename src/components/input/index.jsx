import React from 'react';

export default function Input({
  name,
  placeholder,
  autoComplete,
  change,
  inputValue
}) {
  return (
    <>
      <input
        type="text"
        className="form-control"
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={change}
        value={inputValue}
      />
    </>
  );
}
