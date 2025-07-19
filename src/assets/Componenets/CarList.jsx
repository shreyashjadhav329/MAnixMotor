import React, { useState } from 'react';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]);
  const [mobileNumber, setMobileNumber] = useState('');

  const fetchCars = () => {
    if (!mobileNumber) {
      alert("Please enter a mobile number.");
      return;
    }


   
    axios.get(`https://sheetdb.io/api/v1/nyoht4nfn4p06/search?MobileNumber=${mobileNumber}`)

      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error("❌ Error fetching cars:", error);
        alert("Failed to fetch car data.");
      });
  };

  const deleteCar = async (carNumber) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;

    try {
a

      await axios.delete(`https://sheetdb.io/api/v1/nyoht4nfn4p06/carNumber/${carNumber}`);

      alert("✅ Car deleted successfully.");
      fetchCars(); // Refresh after deletion
    } catch (err) {
      console.error("❌ Error deleting car:", err);
      alert("Failed to delete car.");
    }
  };

  const containerStyle = {
    padding: '2rem',
    maxWidth: '100%',
  };

  const inputStyle = {
    padding: '0.5rem',
    marginRight: '10px',
    width: '100%',
    maxWidth: '300px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const tableWrapper = {
    overflowX: 'auto',
    marginTop: '1rem',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    border: '1px solid #dee2e6',
    padding: '0.75rem',
    textAlign: 'left',
    fontSize: '0.9rem',
  };

  const headerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Car List</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter Mobile Number"
          style={inputStyle}
        />
        <button onClick={fetchCars} style={buttonStyle}>Get Cars</button>
      </div>

      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr>
              {[
                'Name', 'Mobile Number', 'Car Number', 'CNG Kit Number', 'Kit Model',
                'Fitting Date', 'Last Service Date', 'Next Service Date', 'Testing Date', 'Action'
              ].map((header, i) => (
                <th key={i} style={{ ...thTdStyle, ...headerStyle }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cars.length === 0 ? (
              <tr>
                <td colSpan="10" style={{ ...thTdStyle, textAlign: 'center' }}>No car data found</td>
              </tr>
            ) : (
              cars.map((car, index) => (
                <tr key={index}>
                  <td style={thTdStyle}>{car.Name}</td>
                  <td style={thTdStyle}>{car.MobileNumber}</td>
                  <td style={thTdStyle}>{car.carNumber}</td>
                  <td style={thTdStyle}>{car.cngKitNumber}</td>
                  <td style={thTdStyle}>{car.cngKitModelName}</td>
                  <td style={thTdStyle}>{car.FittingDate}</td>
                  <td style={thTdStyle}>{car.LastServiceDate}</td>
                  <td style={thTdStyle}>{car.serviceDate || '-'}</td>
                  <td style={thTdStyle}>{car.testingDate || '-'}</td>
                  <td style={thTdStyle}>
                    <button
                      onClick={() => deleteCar(car.carNumber)}
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarList;
