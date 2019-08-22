import React from 'react';

export default function Input({ name, placeholder, autoComplete }) {
  return (
    <>
      <input
        type="text"
        className="form-control"
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </>
  );
}
