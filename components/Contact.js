import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    address: '',
    email: '',
    phoneNumber: ''
  });
  const [submittedData, setSubmittedData] = useState([]);
  
  // Your Firebase configuration object
  const firebaseConfig = {
    apiKey: "AIzaSyBENfhKKdcXRiet7WYNBMchNu7nvNgQ6so",
    authDomain: "fir-1-6cf39.firebaseapp.com",
    databaseURL: "https://fir-1-6cf39-default-rtdb.firebaseio.com",
    projectId: "fir-1-6cf39",
    storageBucket: "fir-1-6cf39.appspot.com",
    messagingSenderId: "971372463780",
    appId: "1:971372463780:web:084566b548b38f5bcb8831",
    measurementId: "G-JX3YT01ZH0"
  };
  
  // Initialize Firebase App
  const firebaseApp = initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = getFirestore(firebaseApp);                                
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      console.log('Form submitted and saved to Firebase:', formData);
      setFormData({
        name: '',
        company: '',
        address: '',
        email: '',
        phoneNumber: ''
      });
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contacts'), snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSubmittedData(data);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [db]);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <h2 className='info'>Get in touch</h2>
      </div>
      
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="contact-form-fields">
          {/* Form inputs */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="submit-btn smaller-btn">Submit</button>
        </form>


        <div className="map" id="map">
        <iframe
        title="Google Map"
        width="420"
        height="300"
        
       
        
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.802789319164!2d<YOUR_LONGITUDE_HERE>!3d<YOUR_LATITUDE_HERE>!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z<YOUR_LATITUDE_HERE>!<YOUR_LONGITUDE_HERE>!5e0!3m2!1sen!2sus!4v1623351292734!5m2!1sen!2sus"
        frameBorder="0"
        style={{ border: 0 }}
       
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      </div>
        </div>

       
     
      
      

    
    </div>
  );
};

export default Contact;