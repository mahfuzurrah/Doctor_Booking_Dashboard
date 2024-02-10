import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const DoctorCard = ({ doctor }) => {
  const [isAvailable, setIsAvailable] = useState(doctor.isAvailable);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="doctor-card">
      <div className="doctor">
        <div className="doc_img_area">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <div className="availability-icon" onClick={toggleAvailability}>
            {isAvailable ? (
              <GoDotFill className="v_icons" style={{ color: "green" }} />
            ) : (
              <GoDotFill className="v_icons" style={{ color: "red" }} />
            )}
          </div>
        </div>
        <div className="doctor-details">
          <p>{doctor.name} - ({doctor.qul})</p>
        </div>
      </div>
        <p className="doc_status">{isAvailable ? "Available" : "Not Available"}</p>
    </div>
  );
};

export default DoctorCard;
