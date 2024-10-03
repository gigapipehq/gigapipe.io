import React from 'react';

interface SmoothIframeProps {
  src: string;
  height: string;
}

const SmoothIframe: React.FC<SmoothIframeProps> = ({ src, height }) => {
  return (
     <div style={{ position: 'relative', paddingBottom: 'calc(65.88983050847457% + 41px)', height: 0, width: '100%' }}>
      <iframe
        src={src}
        loading="lazy"
        frameBorder="0"
        allowFullScreen
        allow="clipboard-write"
        height={height}
        width="100%"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      />
    </div>
  );
};

export default SmoothIframe;
