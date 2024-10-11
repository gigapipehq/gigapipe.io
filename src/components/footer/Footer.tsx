import { useState, useEffect } from 'react';
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
    <footer className="mt-6 bg-transparent text-slate-50 p-0 w-100 bottom-0 left-0 right-0">
      <div className="border border-x-0 border-b-0 border-t-1 border-[var(--footer-border)] mt-6 pt-4 flex justify-between flex-wrap w-100">
        <p>&copy; 2024 HEPvest Holding BV</p>
        <div>
          <a href="/legal" className="text-slate-50 mr-4">Terms</a>
          <a href="/legal/cookies" className="text-slate-50 mr-4">Cookies</a>
          <a href="mailto:info@gigapipe.com" className="text-slate-50 mr-4">Contact Us</a>
        </div>
      </div>

      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-950 text-white p-4 px-6 flex align-middle justify-center z-100">
          <p className="m-0 flex-1">
            We use cookies to improve your experience on our site. By continuing to use our site, you agree to the <Link className='text-primary' href="/legal/cookies">Gigapipe Cookie Policy.</Link>
          </p>
          <button className='bg-purple-700 text-white border-none px-3 py-2 cursor-pointer rounded mr-4 hover:bg-purple-600'
            onClick={handleAccept}>
            Accept
          </button>
        </div>
      )}
    </footer>
  );
}
