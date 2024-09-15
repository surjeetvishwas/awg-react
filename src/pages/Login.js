import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Your Firebase configuration object here (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDrl5fJzaZgq2ENNl0yo9Y0IGFdxLj7Cxk",
  authDomain: "sc-1-433715.firebaseapp.com",
  projectId: "sc-1-433715",
  storageBucket: "sc-1-433715.appspot.com",
  messagingSenderId: "779410445796",
  appId: "1:779410445796:web:aee165249eca554563e3f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Login() {
  const navigate = useNavigate();  // Initialize useNavigate for redirection

  const handleGoogleLogin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log('User Info:', user);

        // Redirect to homepage after successful login
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error during Google Login:', errorCode, errorMessage);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Get Started Section */}
      <div
        style={{
          wordBreak: 'break-word',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: '300px',
          margin: '200px 0',
          textAlign: 'center',
          fontSize: '25px',
        }}
      >
        <h2>Get Started</h2>
        <p>
          Start your journey with our innovative water generator system. Experience the power of automation and sustainability.
        </p>
      </div>

      {/* Content Section (Image + Login) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
        {/* Image Section */}
        <div style={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/1.JPG`}
            alt="1"
            name="1.JPG"
            style={{ maxWidth: '100%', width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>

        {/* Login Section */}
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2>Authentication &amp; Login</h2>
          <p>
            Secure your water generator system with advanced authentication methods. Login to access real-time data and control functionalities.
          </p>
          <button
            onClick={handleGoogleLogin}
            type="button"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
              alignSelf: 'center',
            }}
          >
            Login Now with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
