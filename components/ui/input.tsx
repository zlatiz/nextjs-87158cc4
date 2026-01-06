import React from 'react';

export default function Input(props: { label?: string; placeholder?: string }) {
  const { label, placeholder } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      {label ? <label style={{ fontSize: '0.85rem' }}>{label}</label> : null}
      <input aria-label={label ?? 'input'} placeholder={placeholder} className="border rounded-md px-2 py-1" />
    </div>
  );
}
