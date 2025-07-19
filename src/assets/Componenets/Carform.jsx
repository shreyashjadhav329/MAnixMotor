import React, { useState } from 'react';
import axios from 'axios';

const Carform = ({ onCarAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    carNumber: '',
    cngKitNumber: '',
    cngKitModelName: '',
    fittingDate: '',
    lastServiceDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addMonths = (dateStr, months) => {
    const date = new Date(dateStr);
    date.setMonth(date.getMonth() + months);
    return date.toISOString().split('T')[0];
  };

  const addYears = (dateStr, years) => {
    const date = new Date(dateStr);
    date.setFullYear(date.getFullYear() + years);
    return date.toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { lastServiceDate, fittingDate } = formData;

    const serviceDate = lastServiceDate ? addMonths(lastServiceDate, 6) : '';
    const testingDate = fittingDate ? addYears(fittingDate, 3) : '';

    const payload = {
      data: {
        ...formData,
        serviceDate,
        testingDate
      }
    };

    axios.post('https://sheetdb.io/api/v1/nyoht4nfn4p06', payload)
      .then(() => {
        alert("✅ Car data saved to Google Sheet!");
        setFormData({
          name: '',
          mobileNumber: '',
          carNumber: '',
          cngKitNumber: '',
          cngKitModelName: '',
          fittingDate: '',
          lastServiceDate: ''
        });
        if (onCarAdded) onCarAdded();
      })
      .catch(error => {
        console.error('❌ Error saving car:', error);
        alert("❌ Failed to save car data.");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-control mb-2" required />
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" className="form-control mb-2" required />
        <input type="text" name="carNumber" value={formData.carNumber} onChange={handleChange} placeholder="Car Number" className="form-control mb-2" required />
        <input type="text" name="cngKitNumber" value={formData.cngKitNumber} onChange={handleChange} placeholder="CNG Kit Number" className="form-control mb-2" />
        <input type="text" name="cngKitModelName" value={formData.cngKitModelName} onChange={handleChange} placeholder="Kit Model" className="form-control mb-2" />
        <input type="date" name="fittingDate" value={formData.fittingDate} onChange={handleChange} className="form-control mb-2" required />
        <input type="date" name="lastServiceDate" value={formData.lastServiceDate} onChange={handleChange} className="form-control mb-2" required />
        <button type="submit" className="btn btn-success">Save Car</button>
      </form>
    </div>
  );
};

export default Carform;
