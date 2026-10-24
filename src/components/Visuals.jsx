import { useState } from 'react';

/** Fallback is deliberately visible only when an existing /public image is missing. */
export function AssetImage({ src, alt, className = '', fallback = 'PROJECT PREVIEW', ...props }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <div className={`asset-fallback ${className}`} role="img" aria-label={alt || fallback}><span>{fallback}</span></div>;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}

export function BrowserWindow({ src, alt, label, className = '' }) {
  return (
    <div className={`browser-window ${className}`}>
      <div className="browser-chrome"><span className="browser-controls"><i /><i /><i /></span><span className="browser-label">{label}</span><span aria-hidden="true">↗</span></div>
      <AssetImage src={src} alt={alt} className="browser-content" fallback={label || 'WEBSITE'} loading="lazy" />
    </div>
  );
}

export function PhoneMockup({ className = '' }) {
  return (
    <div className={`phone-shell ${className}`} aria-label="2 Cities Church mobile application preview">
      <div className="phone-camera" aria-hidden="true" />
      <AssetImage src="/mobile-app/two-cities-home.jpeg" alt="2 Cities Church mobile app home screen" className="phone-screen" fallback="2 CITIES CHURCH / MOBILE" loading="lazy" />
    </div>
  );
}

export function WorkflowVisual({ className = '' }) {
  return (
    <div className={`workflow-visual ${className}`} role="img" aria-label="Illustrative n8n automation connecting a contact trigger, validation and CRM table">
      <div className="workflow-meta"><span>n8n / CONCEPT</span><span>● READY</span></div>
      <div className="workflow-chain">
        <div className="workflow-step"><span>01</span><strong>New contact</strong><small>Trigger</small></div>
        <div className="workflow-link" aria-hidden="true" />
        <div className="workflow-step"><span>02</span><strong>Validate</strong><small>Process</small></div>
        <div className="workflow-link" aria-hidden="true" />
        <div className="workflow-step"><span>03</span><strong>CRM table</strong><small>Update</small></div>
      </div>
      <div className="workflow-meta workflow-footer"><span>INPUT → LOGIC → ACTION</span><span>ILLUSTRATIVE</span></div>
    </div>
  );
}

export function Arrow({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
