import React from 'react';

export default function Button(props: { children: React.ReactNode; className?: string; href?: string; asLink?: boolean }) {
  const { children, className = '', href, asLink } = props;
  const base = 'inline-flex items-center justify-center rounded-md border px-3 py-1 text-sm font-medium';
  const classes = `${base} bg-primary text-white` + (className ? ` ${className}` : '');

  if (asLink && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
