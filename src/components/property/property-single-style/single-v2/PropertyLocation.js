import React from "react";

const PropertyLocation = ({ address, latitude, longitude }) => {
  return (
    <div className="property-location">
      <div className="row">
        <div className="col-lg-12">
          <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Property Location</h4>
            {address && (
              <div className="mb20">
                <p className="text mb10">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  {address}
                </p>
              </div>
            )}
            <div className="property-location-map">
              {latitude && longitude ? (
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}`}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div 
                  className="map-placeholder d-flex align-items-center justify-content-center"
                  style={{ 
                    height: "350px", 
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #dee2e6",
                    borderRadius: "8px"
                  }}
                >
                  <div className="text-center">
                    <i className="fas fa-map-marker-alt fa-3x text-muted mb-3"></i>
                    <p className="text-muted">Map will be displayed here</p>
                    {address && <p className="small text-muted">{address}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
