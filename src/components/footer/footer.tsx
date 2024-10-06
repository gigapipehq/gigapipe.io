import React, { useState, useEffect } from 'react';

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
      backgroundColor: '#001529',
      color: 'white',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        <div style={{ flex: '1 1 300px', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            <span style={{ 
              display: 'inline-block',
              width: '30px',
              height: '30px',
              backgroundColor: 'white',
              marginRight: '10px',
              verticalAlign: 'middle'
            }}></span>
            Gigapipe
          </h2>
          <p>Removing the barriers to leveraging data</p>
        </div>

        <div style={{ flex: '1 1 200px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Home</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>What is Gigapipe?</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Docs</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Login</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Solutions</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cloud Observability</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Telecom Observability</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact us</h3>
          <p style={{ marginBottom: '1rem' }}>info@gigapipe.com</p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '2rem',
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        <p>&copy; 2023 HEPvest Holding BV</p>
        <div>
          <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Terms</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cookies</a>
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
            We use cookies to improve your experience on our site. By continuing to use our site, you agree to our use of cookies.
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
        </div>
      )}
    </footer>
  );
}
