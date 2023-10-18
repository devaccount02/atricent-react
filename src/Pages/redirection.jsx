import React, { useEffect } from 'react'
import Atricen from '../../src/assets/images/Group.png'
const Redirection = () => {

  useEffect(() => {
    var store_link = {
      android: {
        chrome: 'https://play.google.com/store/apps/details?id=com.atricent&hl=en_US'
      },
      ios: 'https://apps.apple.com/gb/app/atricent-ai-fashion-platform/id6448105847',
      other: 'market://details?id=com.mrmahir.customer'
    };

    function redirect_to_store() {
      if (!document.hidden) {
        if (getMobileOperatingSystem() === 'Windows') {
          window.location.href = store_link.android.chrome;
        } else if (getMobileOperatingSystem() === 'Android') {
          window.location.href = store_link.android[getMobileOperatingSystem(true)];
        } else if (getMobileOperatingSystem() === 'iOS') {
          window.location.href = store_link.ios;
        }
      }
    }

    setTimeout(redirect_to_store, 1000);

    function getMobileOperatingSystem(isChrome = false) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (isChrome) {
        return /Chrome/i.test(userAgent) ? 'chrome' : 'other';
      }

      if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone';
      }

      if (/android/i.test(userAgent)) {
        return 'Android';
      }

      if (/Macintosh/i.test(userAgent)) {
        return 'iOS';
      }

      if (/Windows NT/i.test(userAgent)) {
        return 'Windows';
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
      }

      return 'unknown';
    }
  }, []);
  return (
    <div>
      {/* HTML content goes here */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9GSFSJ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <div className="container-fluid py-3 d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div style={{ padding: '0 30px', maxWidth: '100%' }}>
          <img style={{ maxWidth: '100%' }} src={Atricen} alt="Atricent logo"  />
        </div>
      </div>
      <iframe id="innerFrame" className="d-none" height="0" width="0" src=""></iframe>
    </div>
  )
}

export default Redirection