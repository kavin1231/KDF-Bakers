import React, { useState } from 'react';
import axios from 'axios'; // Import axios
// Optional: import './OrderNowPage.css';

const OrderNowPage = () => {
    const [formData, setFormData] = useState({
        customerName: '', // Matched to backend Order model
        email: '', // Matched
        phone: '',
        cakeSize: '',
        cakeFlavor: '',
        designInspiration: '',
        deliveryDate: '',
        deliveryAddress: '',
        additionalComments: ''
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

        // Assuming backend is running on port 3000 (adjust if different)
        // In a real app, use environment variables for API URLs
        const API_URL = 'http://localhost:3000/api/orders'; 

        try {
            // Ensure field names match the backend model exactly
            // The current formData state keys (e.g., customerName) should match
            const payload = {
                ...formData,
                // Ensure deliveryDate is in a format the backend expects if it's specific,
                // but HTML date input usually provides YYYY-MM-DD which is often fine.
            };

            const response = await axios.post(API_URL, payload);
            console.log('Order submitted successfully:', response.data);
            setSubmitStatus({ message: 'Order submitted successfully! We will be in touch soon.', type: 'success' });
            // Optionally reset form:
            setFormData({
                customerName: '', email: '', phone: '',
                cakeSize: '', cakeFlavor: '', designInspiration: '',
                deliveryDate: '', deliveryAddress: '', additionalComments: ''
            });
        } catch (error) {
            console.error('Error submitting order:', error.response ? error.response.data : error.message);
            setSubmitStatus({ 
                message: error.response?.data?.message || 'Failed to submit order. Please try again.', 
                type: 'error' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <> {/* Using a React Fragment as the top-level container */}
            <div className="page-heading-container"> {/* From original CSS */}
                <h1>Place Your Order</h1>
            </div>
            {/* Added a container div that was in the original order-now.html, around the form */}
            <div className="container"> 
                <form id="cake-order-form" className="order-form" onSubmit={handleSubmit}> {/* class from original CSS */}
                    <div className="form-group"> {/* class from original CSS */}
                        <label htmlFor="customerName">Full Name:</label>
                        <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cakeSize">Cake Size:</label>
                        <select id="cakeSize" name="cakeSize" value={formData.cakeSize} onChange={handleChange} required>
                            <option value="">-- Select Size --</option>
                            <option value="6-inch">6-inch Round (serves 8-10)</option>
                            <option value="8-inch">8-inch Round (serves 12-15)</option>
                            <option value="10-inch">10-inch Round (serves 20-25)</option>
                            <option value="small-tiered">Small Tiered (serves 25-30)</option>
                            <option value="large-tiered">Large Tiered (serves 50+)</option>
                            <option value="custom-size">Custom Size (please specify below)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cakeFlavor">Cake Flavor:</label>
                        <select id="cakeFlavor" name="cakeFlavor" value={formData.cakeFlavor} onChange={handleChange} required>
                            <option value="">-- Select Flavor --</option>
                            <option value="vanilla">Classic Vanilla</option>
                            <option value="chocolate">Rich Chocolate</option>
                            <option value="red-velvet">Red Velvet</option>
                            <option value="lemon">Zesty Lemon</option>
                            <option value="strawberry">Strawberry Bliss</option>
                            <option value="custom-flavor">Custom Flavor (please specify below)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="designInspiration">Design Inspiration/Theme:</label>
                        <textarea id="designInspiration" name="designInspiration" rows="5" value={formData.designInspiration} onChange={handleChange} placeholder="Describe your desired design, colors, theme, or provide links to inspiration images."></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="deliveryDate">Preferred Delivery Date:</label>
                        <input type="date" id="deliveryDate" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="deliveryAddress">Delivery Address (if applicable):</label>
                        <textarea id="deliveryAddress" name="deliveryAddress" rows="3" value={formData.deliveryAddress} onChange={handleChange} placeholder="Enter full address for delivery."></textarea>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="additionalComments">Other Specifications/Comments:</label>
                        <textarea id="additionalComments" name="additionalComments" rows="3" value={formData.additionalComments} onChange={handleChange} placeholder="Specify custom size/flavor or any other details here."></textarea>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Order Request'}
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
            </div>
        </>
    );
};

export default OrderNowPage;
