import React from 'react';

const About = () => {
  const pageStyles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      flexWrap: 'wrap',
    },
    column: {
      width: '48%',
      textAlign: 'center',
      marginBottom: '20px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    button: {
      backgroundColor: '#007BFF',
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
        <h2>Our Mission</h2>
        <p>Empowering communities with sustainable water solutions through innovation and technology.</p>
        <button style={pageStyles.button}>Learn More</button>
      </div>
      <div style={pageStyles.column}>
        <img style={pageStyles.image} src="https://cdn.hubblecontent.osi.office.net/m365content/publish/445c3db4-15ec-46ee-804a-792a3a759f88/thumbnails/xxlarge.jpg" alt="AI-Driven Solutions" />
        <h2>Our Vision</h2>
        <p>Leading the way in AI-driven solutions for water generation, ensuring a brighter future for all.</p>
        <button style={pageStyles.button}>Explore</button>
      </div>
    </div>
  );
};

export default About;
