import React from 'react';

export default function Button({ classes, label }) {
  return (
    <>
      <input type="submit" className={classes} value={label} />
    </>
  );
}
