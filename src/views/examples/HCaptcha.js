import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function App() {
  const [token, setToken] = useState(null);

  const handleVerificationSuccess = (token) => {
    setToken(token);
    // You can now send the token to your server for verification
  };

  return (
    <div>
      <form>
        {/* Your form inputs */}
        <HCaptcha
          sitekey="5d838d41-ccd5-4252-9508-66890aa971ec"
          onVerify={handleVerificationSuccess}
        />
        <button type="submit" disabled={!token}>Submit</button>
      </form>
    </div>
  );
}

export default App;
