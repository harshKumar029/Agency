import React, { useState } from 'react';
import './contact.css'; // Create your CSS for styling

const Contact = ({ isOpen, onClose }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const { name, email, message } = data;
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !email || !message) {
          alert("Please fill in all the required fields.");
          return; // Prevent submission if any field is empty
        }
    
        try {
          const response = await fetch(
            'https://v1.nocodeapi.com/harsh029/google_sheets/WlmbcrIsCcFPRqwt?tabId=Sheet1',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify([[name, email, message, new Date().toLocaleString()]]),
            }
          );
    
          // Reset form fields and close the popup
          setData({ ...data, name: '', email: '', message: '' });
    
          if (response.ok) {
            // Form submission was successful, you can add success handling here.
            console.log('Form submitted successfully.');
            alert("Your message has been sent successfully. We will get in touch with you shortly.");
            onClose(); // Close the popup
          } else {
            // Handle errors, e.g., show an error message to the user.
            console.error('Form submission failed.');
            alert("Failed to send the message. Please try again later.");
          }
        } catch (err) {
          console.error(err);
          alert("An error occurred while sending your message. Please try again later.");
        }
      };

     // Close the popup when the navpop_contact is clicked
      const handleNavContactClick = () => {
        onClose(); 
      };

    return isOpen ? (
        <>
            <div className="contact-popup">
                    <div className='pop-nav'>
                        <div className='navpop-logo'>
                            <img className='logopop-img' src="./assets/img/ZUDIO MEDIA.svg" alt="icon" />
                        </div>
                        <h4 className='navpop_contact' onClick={handleNavContactClick} >Go<br />Back</h4>

                    </div>
                <h1>Have a Project? Let’s Connect</h1>
                <p>Fill in the form, or if you prefer, <span><a href="mailto:contact@zudiomedia.com">send us an email</a></span>.</p>
                <div className="contact-popup-content">
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input placeholder="Name" name='name' type="text" value={name} onChange={handleChange}  />
                        </div>
                        <div className="form-group">
                            <input placeholder="Email" name='email' type="email" value={email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" name='message' value={message} onChange={handleChange} />
                        </div>
                        <button className='submit' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    ) : null;
};

export default Contact;

