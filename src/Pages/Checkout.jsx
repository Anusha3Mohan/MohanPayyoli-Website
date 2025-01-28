import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const [isFieldValid, setIsFieldValid] = useState({
    fullName: true,
    address: true,
    city: true,
    postalCode: true,
    country: true,
    cardNumber: true,
    expirationDate: true,
    cvv: true,
    nameOnCard: true,
  });

  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [alertMessage, setAlertMessage] = useState(''); // State for the alert message
  const [alertType, setAlertType] = useState('success'); // Type of alert (success or error)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form values and validate field on change
    setFormValues({ ...formValues, [name]: value });

    // Validate the specific field
    setIsFieldValid((prevState) => ({
      ...prevState,
      [name]: value.trim() !== '', // Set field to valid if it's not empty
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Update validation state based on whether each field is filled out
    const isValid = {
      fullName: formValues.fullName.trim() !== '',
      address: formValues.address.trim() !== '',
      city: formValues.city.trim() !== '',
      postalCode: formValues.postalCode.trim() !== '',
      country: formValues.country.trim() !== '',
      cardNumber: formValues.cardNumber.trim() !== '',
      expirationDate: formValues.expirationDate.trim() !== '',
      cvv: formValues.cvv.trim() !== '',
      nameOnCard: formValues.nameOnCard.trim() !== '',
    };

    setIsFieldValid(isValid);

    // Check if all fields are valid before showing the alert
    const isFormValid = Object.values(isValid).every((field) => field === true);
    if (isFormValid) {
      setAlertMessage('Payment successful! Thank you for your order.');
      setAlertType('success');
    } else {
      setAlertMessage('Please fill out all required fields before proceeding.');
      setAlertType('error');
    }

    setShowAlert(true); // Show the alert

    // Hide the alert after 3 seconds and reset form values
    setTimeout(() => {
      setShowAlert(false);
      // Reset form values and field validation state only after the alert disappears
      setFormValues({
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        nameOnCard: '',
      });
      setIsFieldValid({
        fullName: true,
        address: true,
        city: true,
        postalCode: true,
        country: true,
        cardNumber: true,
        expirationDate: true,
        cvv: true,
        nameOnCard: true,
      });
    }, 3000); // Alert disappears after 3 seconds
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <img
            src="https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0"
            alt="Beautiful Fall Road"
          />
          <div className="item-details">
            <p>Beautiful Fall Road</p>
            <p>Size: 24x36 inches</p>
            <p>Price: $120.00</p>
          </div>
        </div>
        <div className="summary-item">
          <img src="https://wallpaperaccess.com/full/4723250.jpg" alt="Stunning Mountain View" />
          <div className="item-details">
            <p>Stunning Mountain View</p>
            <p>Size: 18x24 inches</p>
            <p>Price: $90.00</p>
          </div>
        </div>
        <div className="total">
          <h4>Total: $210.00</h4>
        </div>
      </div>

      {/* Shipping Information Section */}
      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formValues.fullName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
            {!isFieldValid.fullName && <p className="error-text">Required</p>}
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              required
            />
            {!isFieldValid.address && <p className="error-text">Required</p>}
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
              placeholder="Enter your city"
              required
            />
            {!isFieldValid.city && <p className="error-text">Required</p>}
          </label>
          <label>
            Postal Code:
            <input
              type="text"
              name="postalCode"
              value={formValues.postalCode}
              onChange={handleInputChange}
              placeholder="Enter postal code"
              required
            />
            {!isFieldValid.postalCode && <p className="error-text">Required</p>}
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formValues.country}
              onChange={handleInputChange}
              placeholder="Enter your country"
              required
            />
            {!isFieldValid.country && <p className="error-text">Required</p>}
          </label>
        </form>
      </div>

      {/* Payment Information Section */}
      <div className="payment-info">
        <h3>Payment Information</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formValues.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              required
            />
            {!isFieldValid.cardNumber && <p className="error-text">Required</p>}
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              name="expirationDate"
              value={formValues.expirationDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
            />
            {!isFieldValid.expirationDate && <p className="error-text">Required</p>}
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formValues.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              required
            />
            {!isFieldValid.cvv && <p className="error-text">Required</p>}
          </label>
          <label>
            Name on Card:
            <input
              type="text"
              name="nameOnCard"
              value={formValues.nameOnCard}
              onChange={handleInputChange}
              placeholder="Enter name as on card"
              required
            />
            {!isFieldValid.nameOnCard && <p className="error-text">Required</p>}
          </label>
        </form>
      </div>

      <button className="place-order-btn" onClick={handleFormSubmit}>Place Order</button>

      {/* Alert Section */}
      {showAlert && (
        <div className={`alert ${alertType}`}>
          <p>{alertMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
