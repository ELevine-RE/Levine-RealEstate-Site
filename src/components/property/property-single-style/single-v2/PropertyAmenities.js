import React from "react";

const PropertyAmenities = ({ amenities = [] }) => {
  const defaultAmenities = [
    { name: "Air Conditioning", icon: "flaticon-air-conditioner" },
    { name: "Barbeque", icon: "flaticon-barbeque" },
    { name: "Dryer", icon: "flaticon-dryer" },
    { name: "Gym", icon: "flaticon-dumbbell" },
    { name: "Laundry", icon: "flaticon-washing-machine" },
    { name: "Lawn", icon: "flaticon-lawn" },
    { name: "Microwave", icon: "flaticon-microwave" },
    { name: "Outdoor Shower", icon: "flaticon-outdoor-shower" },
    { name: "Refrigerator", icon: "flaticon-refrigerator" },
    { name: "Sauna", icon: "flaticon-sauna" },
    { name: "Swimming Pool", icon: "flaticon-swimming-pool" },
    { name: "TV Cable", icon: "flaticon-tv" },
    { name: "Washer", icon: "flaticon-washing-machine" },
    { name: "WiFi", icon: "flaticon-wifi" },
    { name: "Window Coverings", icon: "flaticon-window" }
  ];

  const displayAmenities = amenities.length > 0 ? amenities : defaultAmenities;

  return (
    <div className="row">
      {displayAmenities.map((amenity, index) => (
        <div key={index} className="col-sm-6 col-md-4">
          <div className="pd-list d-flex align-items-center mb20">
            <i className={amenity.icon || "flaticon-tick"} />
            <p className="fw600 mb-0 ml10">{amenity.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyAmenities;
