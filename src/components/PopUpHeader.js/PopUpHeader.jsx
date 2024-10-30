import React, { useState } from 'react';

const PopUpHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} style={{ margin: '20px', padding: '10px', border: '5px solid #176fec',  }}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00072d',
            padding: '20px',
            border: '2px solid #00072D',
            borderRadius: '15px',
            zIndex: 1001
          }}
        >
          <header
            style={{
              backgroundColor: '#00072D',
              border: '5px solid #176fec',
              textAlign: 'center',
              borderRadius: '15px',
              padding: '10px'
            }}
          >
            <img
              src="https://www.travpromobile.com/wp-content/uploads/TravPROMobile2024_logo.png"
              alt="TravProMobile Logo"
              style={{ width: '180px', height: '70px', margin: '10px', padding: '10px' }}
            />
            <img
              src="https://www.travpromobile.com/wp-content/uploads/travpromobile-thesource-qrcode-1600x1600.png"
              alt="TravProMobile QR Code"
              style={{ width: '100px', height: '100px', margin: '10px', padding: '10px' }}
            />
            <p style={{ color: '#f1620a' }}>Find the best hotels in Las Vegas, USA!</p>
            <div>
           <button>
            <div>
          <a href="https://www.travpromobile.com" className="home-btn" style={{ margin: '10px', padding: '10px' }}>
          Home
          </a>
          <a href="https://www.travpromobile.com/about/" className="About-btn" style={{ margin: '10px', padding: '10px' }}>
           About
           </a>
           <a href="https://www.travpromobile.com/pro-training/" className="Training-btn" style={{ margin: '10px', padding: '10px' }}>
           Training
           </a>
           </div>
           </button>
            </div>
          </header>
        </div>
      )}
    </div>
  );
};

export default PopUpHeader;




