import React from "react";

interface Props {
  id: string;
  className?: string;
}

export default function CategoryIcon({ id, className = "w-4 h-4" }: Props) {
  switch (id) {
    case "length":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.3 15.3a2.82 2.82 0 0 1 0 4c-1 1-2.5 1-3.5 0L2.3 3.8a2.82 2.82 0 0 1 0-4c1-1 2.5-1 3.5 0Z"/>
          <path d="m5.6 7.2 1.4-1.4"/>
          <path d="m7.2 10.4 1.4-1.4"/>
          <path d="m10.4 12 1.4-1.4"/>
          <path d="m12 15.2 1.4-1.4"/>
          <path d="m15.2 16.8 1.4-1.4"/>
        </svg>
      );
    case "weight":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16c0-3-2-5-5-5s-5 2-5 5"/>
          <path d="M12 2v20"/>
          <path d="M3 20h18"/>
          <circle cx="12" cy="5" r="2"/>
        </svg>
      );
    case "temperature":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 4v10.5a4.5 4.5 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
          <path d="M12 9h4"/>
          <path d="M12 12h4"/>
        </svg>
      );
    case "volume":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12"/>
          <path d="M9 3v5.5A2.5 2.5 0 0 1 8.5 11l-4.5 6A2 2 0 0 0 5.6 20h12.8a2 2 0 0 0 1.6-3l-4.5-6a2.5 2.5 0 0 1-.5-2.5V3"/>
        </svg>
      );
    case "area":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M9 3v18"/>
          <path d="M15 3v18"/>
          <path d="M3 9h18"/>
          <path d="M3 15h18"/>
        </svg>
      );
    case "speed":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 0-10 10c0 2.2.7 4.3 2 6l1.4-1.4A8 8 0 0 1 12 4a8 8 0 0 1 8 8c0 1.8-.6 3.5-1.6 4.9l1.4 1.4a10 10 0 0 0 2.2-6.3c0-5.5-4.5-10-10-10Z"/>
          <path d="m12 14 4-4"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      );
    case "time":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      );
    case "data":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      );
    case "energy":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      );
    case "pressure":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m16 8-8 8"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      );
    case "angle":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 21H3V3"/>
          <path d="M3 11a8 8 0 0 1 8-8"/>
          <path d="M3 21 16 8"/>
        </svg>
      );
    case "power":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.5c-.8 0-1.5-.7-1.5-1.5V6a2 2 0 0 0-4 0v2.5c0 .8-.7 1.5-1.5 1.5H8a4 4 0 0 0-4 4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3a4 4 0 0 0-4-4Z"/>
          <path d="M12 21v2"/>
        </svg>
      );
    case "force":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 6.5h11"/>
          <path d="M2 9h4v6H2z"/>
          <path d="M18 9h4v6h-4z"/>
          <path d="M6 12h12"/>
        </svg>
      );
    case "frequency":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      );
    case "torque":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z"/>
        </svg>
      );
    case "density":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      );
    case "flow-rate":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7Z"/>
        </svg>
      );
    case "fuel-consumption":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 22h12"/>
          <path d="M4 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18"/>
          <path d="M14 13h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6"/>
          <path d="M9 6h2"/>
          <path d="M18 6v4a2 2 0 0 0 4 0V6a2 2 0 0 0-4 0Z"/>
        </svg>
      );
    case "illumination":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/>
          <path d="M12 20v2"/>
          <path d="M4.93 4.93l1.41 1.41"/>
          <path d="M17.66 17.66l1.41 1.41"/>
          <path d="M2 12h2"/>
          <path d="M20 12h2"/>
          <path d="M6.34 17.66l-1.41 1.41"/>
          <path d="M19.07 4.93l-1.41 1.41"/>
        </svg>
      );
    case "typography":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"/>
          <line x1="9" y1="20" x2="15" y2="20"/>
          <line x1="12" y1="4" x2="12" y2="20"/>
        </svg>
      );
    case "cooking":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 2.2 1 4.2 2.7 5.5a3 3 0 0 0-1.7 2.7c0 1 .8 1.8 1.8 1.8h6.4c1 0 1.8-.8 1.8-1.8a3 3 0 0 0-1.7-2.7C17 12.2 18 10.2 18 8Z"/>
          <path d="M6 18h12"/>
        </svg>
      );
    case "data-transfer":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>
          <path d="m21 3-9 9"/>
          <path d="M15 3h6v6"/>
        </svg>
      );
    case "voltage":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2"/>
          <path d="m4.93 4.93 1.41 1.41"/>
          <path d="M20 12h2"/>
          <path d="M2 12h2"/>
          <path d="m19.07 4.93-1.41 1.41"/>
          <path d="M12 22v-2"/>
          <path d="m12 12 5-5"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      );
    case "current":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/>
          <path d="M12 5v14"/>
          <circle cx="12" cy="12" r="9"/>
        </svg>
      );
    case "finance":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      );
  }
}
