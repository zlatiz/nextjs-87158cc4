import React from 'react';

export default function Card(props: { children: React.ReactNode; className?: string }) {
  const { children, className = '' } = props;
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}
