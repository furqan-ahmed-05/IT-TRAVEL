import React, { useState } from 'react';
import './Form.css'

function FlightSearchForm() {
   
  const [formData, setFormData] = useState({
        origin: '',
        depart: '',
        departureDate: '',
        returnDate: '',
        adults: '1',
        children: '0',
        infants: '0',
        cabin: 'ECONOMY',
        directFlights: false,
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

  const getFlightDetails = () =>{
    console.log(formData)
  }
  

  return (
      <div className="form-parent">
      <div className="form p-4">
        <div className="row">
          <div className="pb-3 h3 text-left">Flight Search &#128747;</div>
        </div>
        <form id="flight-form">
          <div className="row">
            <div className="form-group col-md align-items-start flex-column">
              <label htmlFor="origin" className="d-inline-flex">From</label> <br/>
              <input type="text" placeholder="City or Airport" className="form-control" id="origin" name="origin" required value={formData.origin} onChange={handleChange} />
            </div>
            <div className="form-group col-md align-items-start flex-column">
              <label htmlFor="depart" className="d-inline-flex">To</label> <br/>
              <input type="text" placeholder="City or Airport" className="form-control" id="depart" name="depart" required value={formData.depart} onChange={handleChange}  />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md align-items-start flex-column">
              <label htmlFor="departureDate" className=" d-inline-flex">Depart</label>
              <input type="date" className="form-control" id="departureDate" name="departureDate" required value={formData.departureDate} onChange={handleChange} />
            </div>
            <div className="form-group col-md align-items-start flex-column">
              <label htmlFor="returnDate" className="d-inline-flex">Return</label>
              <input type="date" placeholder="One way" onChange={handleChange} value={formData.returnDate} className="form-control" id="returnDate" name="returnDate" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-3 align-items-start flex-column">
              <label htmlFor="adults" className="d-inline-flex col-auto">Adults <span className="sublabel"> (12+) </span></label>
              <select className="form-select" id="adults" name='adults' value={formData.adults} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
            <div className="form-group col-lg-3 align-items-start flex-column">
              <label htmlFor="children" className="d-inline-flex col-auto">Children <span className="sublabel"> (2-11) </span></label>
              <select className="form-select" id="children" value={formData.children} name="children" onChange={handleChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="form-group col-lg-3 align-items-start flex-column">
              <label htmlFor="infants" className="d-inline-flex col-auto">Infants<span className="sublabel">(age 0-2)</span></label>
              <select className="form-select" id="infants" value={formData.infants} name="infants" onChange={handleChange}>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-6 align-items-start flex-column">
              <label htmlFor="cabin" className="d-inline-flex">Cabin</label>
              <select className="form-select" id="cabin" value={formData.cabin} name="cabin" onChange={handleChange}>
                <option value="ECONOMY">Economy</option>
                <option value="PREMIUM_ECONOMY">Premium Economy</option>
                <option value="BUSINESS">Business</option>
                <option value="FIRST">First</option>
              </select>
            </div>
            <div className="form-group col-lg-6 align-items-start flex-column pt-lg-4">
              <div className="form-check form-switch">
                <input className="form-check-input align-self-center" type="checkbox" id="directFlights" />
                <label className="form-check-label d-inline-flex align-self-center" htmlFor="directFlights" name="directFlights" value={formData.directFlights} onChange={handleChange}>Direct flights</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="text-left col-auto">
            <button type="submit" className="btn btn-primary" onClick={getFlightDetails}>
                Search flights
              </button> 
            </div>
          </div>
          
        </form>
      </div>
    </div>

  );
};

export default FlightSearchForm;