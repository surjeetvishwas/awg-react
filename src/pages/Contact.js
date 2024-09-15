import React from 'react';

const Contact = () => {
  const pageStyles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px',
      flexWrap: 'wrap',
    },
    column: {
      width: '30%',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    button: {
      backgroundColor: '#28A745',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={pageStyles.container}>
      <div style={pageStyles.column}>
        <img style={pageStyles.image} src="https://cdn.hubblecontent.osi.office.net/m365content/publish/12f59cde-f112-41fd-9345-de1d2b19fd56/thumbnails/xxlarge.jpg" alt="Innovative Water Generator" />
        <h3>About Us</h3>
        <p>Discover our innovative water generator that utilizes cutting-edge technology to provide sustainable solutions for clean water production.</p>
      </div>
      <div style={pageStyles.column}>
        <img style={pageStyles.image} src="https://cdn.hubblecontent.osi.office.net/m365content/publish/ca318f2b-c537-42ea-9ad8-1a33ec2f0fa7/thumbnails/xxlarge.jpg" alt="AI-Driven Control" />
        <h3>Our Vision</h3>
        <p>Empowering communities with AI-driven control systems for efficient water generation and distribution.</p>
      </div>
      <div style={pageStyles.column}>
        <img style={pageStyles.image} src="https://cdn.hubblecontent.osi.office.net/m365content/publish/ef37c1bd-526b-4db6-911e-447a78a1ae9b/thumbnails/xxlarge.jpg" alt="IoT & Analytics" />
        <h3>IoT & Analytics</h3>
        <p>Explore our IoT and analytics functions that ensure optimal performance and data-driven insights for water management.</p>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for more information or inquiries.</p>
        <button style={pageStyles.button}>Get in Touch</button>
      </div>
    </div>
  );
};

export default Contact;
