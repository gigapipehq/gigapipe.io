import React from 'react';

interface SmoothIframeProps {
  src: string;
  height: string;
}

const SmoothIframe: React.FC<SmoothIframeProps> = ({ src, height }) => {
  return (
    <div className="smooth-iframe-container" style={{ marginBottom: '1rem' }}>
      <iframe
        src={src}
        height={height}
        width="100%"
        style={{
          border: 'none',
          overflow: 'hidden',
          display: 'block',
        }}
      />
    </div>
  );
};

export default SmoothIframe;
