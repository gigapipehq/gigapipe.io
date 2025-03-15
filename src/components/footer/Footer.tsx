import React, { useState, useEffect } from 'react';
import { Link } from 'rspress/theme';
export default function Footer() {
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setCookieConsent(false);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  return (
    <footer style={{
      backgroundColor: 'transparent',
      position: 'relative',
      color: '#e5e7eb',
      
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      bottom: 0,
      left: 0,
      
    }}>
      
      <div style={{
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        paddingBottom: '40px'
      }}>
        <p>&copy; 2024 HEPvest Holding BV</p>
        <div>
          <a href="/legal" style={{ color: '#e5e7eb', textDecoration: 'none', marginRight: '1rem' }}>Terms</a>
          <a href="/legal/cookies" style={{ color: '#e5e7eb', textDecoration: 'none', marginRight: '1rem' }}>Cookies</a>
          <a href="mailto:info@gigapipe.com" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Contact Us</a>
        </div>
      </div>

      {!cookieConsent && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <p style={{ margin: 0, flex: 1 }}>
            We do not use any cookies on our website. Private areas of our site and services comply with the <Link className='text-primary' href="/legal/cookies">Gigapipe Cookie Policy.</Link>
          </p>
          <button 
            onClick={handleAccept}
            style={{
              backgroundColor: '#8c52ff',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '1rem'
            }}
          >
            Accept
          </button>
          <button 
            onClick={handleAccept}
            style={{
              backgroundColor: '#7c13ff',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '1rem'
            }}
          >
            Reject
          </button>
        </div>
      )}
    </footer>
  );
}
