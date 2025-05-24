import React, { useState } from 'react';
import axios from 'axios'; // Import axios
// Optional: import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '', // Changed from inquiryName to match backend Message model
        email: '', // Changed from inquiryEmail
        subject: '', // Changed from inquirySubject
        message: '' // Changed from inquiryMessage
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' }); // type: 'success' or 'error'


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ message: '', type: '' }); // Clear previous status

        // Assuming backend is running on port 3000
        const API_URL = 'http://localhost:3000/api/messages'; 

        try {
            // Ensure field names in formData match the backend Message model: name, email, subject, message
            const payload = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };
            const response = await axios.post(API_URL, payload);
            console.log('Message submitted successfully:', response.data);
            setSubmitStatus({ message: 'Message sent successfully! We will get back to you soon.', type: 'success' });
            // Optionally reset form:
            setFormData({
                name: '', email: '', subject: '', message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error.response ? error.response.data : error.message);
            setSubmitStatus({ 
                message: error.response?.data?.message || 'Failed to send message. Please try again.', 
                type: 'error' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <> {/* Using React Fragment as top-level wrapper, original had .contact-page but .container is used inside */}
            <div className="page-heading-container"> {/* From original CSS */}
                <h1>Get In Touch</h1>
            </div>

            {/* This container class was present in the original contact.html and wraps both columns */}
            <div className="container contact-page-container"> {/* From original CSS for two-column layout */}
                <div className="contact-info-column"> {/* From original CSS */}
                    <section className="contact-details"> {/* From original CSS */}
                        <h2>Our Contact Information</h2>
                        <p><strong>Address:</strong><br />123 Sweet Street<br />Bakery Town, CA 90210</p>
                        <p><strong>Phone:</strong><br /><a href="tel:+15551234567">(555) 123-4567</a></p>
                        <p><strong>Email:</strong><br /><a href="mailto:info@thesweetspot.com">info@thesweetspot.com</a></p>
                        <p><strong>Hours:</strong><br />Monday - Friday: 9 AM - 6 PM<br />Saturday: 10 AM - 4 PM<br />Sunday: Closed</p>
                    </section>

                    <section className="map-section"> {/* From original CSS */}
                        <h2>Find Us Here</h2>
                        {/* Using original ID and inline styles for placeholder, as CSS might not be fully set up for a new ID */}
                        <div id="google-map-placeholder" style={{width:'100%', height:'300px', backgroundColor:'#e0e0e0', display:'flex', alignItems:'center', justifyContent:'center', borderRadius: '8px', marginTop: '1em'}}>
                            <em>Google Map will be embedded here.</em>
                        </div>
                    </section>
                </div>

                <div className="contact-form-column"> {/* From original CSS */}
                    <section className="inquiry-form-section"> {/* From original CSS */}
                        <h2>Send Us a Message</h2>
                        <form id="inquiry-form" className="contact-form" onSubmit={handleSubmit}> {/* classes from original CSS */}
                            <div className="form-group"> {/* class from original CSS */}
                                <label htmlFor="name">Full Name:</label> {/* Changed htmlFor and name */}
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label> {/* Changed htmlFor and name */}
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject:</label> {/* Changed htmlFor and name */}
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label> {/* Changed htmlFor and name */}
                                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {submitStatus.message && (
                                <div className="form-group" style={{ marginTop: '1em' }}>
                                    <p style={{ color: submitStatus.type === 'error' ? 'var(--accent-color)' : 'green', border: `1px solid ${submitStatus.type === 'error' ? 'var(--accent-color)' : 'green'}`, padding: '10px', borderRadius: '5px' }}>
                                        {submitStatus.message}
                                    </p>
                                </div>
                            )}
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
