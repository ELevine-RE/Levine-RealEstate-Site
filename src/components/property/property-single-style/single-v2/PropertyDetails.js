import React from "react";
import OverView from "./OverView";

const PropertyDetails = ({ id, bed, bath, sqft, ...props }) => {
  // Create a mock data object if individual props are provided
  const mockData = {
    id: id || 1,
    bed: bed || "3",
    bath: bath || "2", 
    sqft: sqft || "1,500",
    yearBuilding: "2020",
    propertyType: "House"
  };

  // If no specific props provided, use the OverView component as-is
  if (!bed && !bath && !sqft) {
    return <OverView id={id} {...props} />;
  }

  // Otherwise create custom overview data
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: bed || mockData.bed,
    },
    {
      icon: "flaticon-shower", 
      label: "Bath",
      value: bath || mockData.bath,
    },
    {
      icon: "flaticon-expand",
      label: "Sqft", 
      value: sqft || mockData.sqft,
    },
  ];

  return (
    <>
      {overviewData.map((item, index) => (
        <div key={index} className="col-sm-6 col-md-4 col-xl-2">
          <div className="overview-element mb30 d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyDetails;
