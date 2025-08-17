import React from "react";
import Image from "next/image";
import Link from "next/link";

const PropertySimilar = ({ maxProperties = 3 }) => {
  // Mock similar properties data
  const similarProperties = [
    {
      id: 1,
      title: "Luxury Family Home",
      price: "$450,000",
      image: "/images/listings/list-1.jpg",
      bed: "3",
      bath: "2",
      sqft: "1,456",
      location: "Downtown Area"
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "$350,000",
      image: "/images/listings/list-2.jpg", 
      bed: "2",
      bath: "2",
      sqft: "1,200",
      location: "City Center"
    },
    {
      id: 3,
      title: "Cozy Villa",
      price: "$550,000",
      image: "/images/listings/list-3.jpg",
      bed: "4", 
      bath: "3",
      sqft: "1,800",
      location: "Suburban Area"
    }
  ];

  const displayProperties = similarProperties.slice(0, maxProperties);

  return (
    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Similar Properties</h4>
      <div className="row">
        {displayProperties.map((property, index) => (
          <div key={index} className="col-lg-12 mb20">
            <div className="sidebar-recent-property d-flex align-items-center">
              <div className="srp-thumb">
                <Image
                  width={90}
                  height={90}
                  className="w90 h90 rounded-3 cover"
                  src={property.image}
                  alt="property"
                  onError={(e) => {
                    e.target.src = "/images/listings/list-1.jpg";
                  }}
                />
              </div>
              <div className="srp-content ml20 ml15-sm">
                <h6 className="listing-title">
                  <Link href={`/single-v1/${property.id}`}>
                    {property.title}
                  </Link>
                </h6>
                <p className="listing-text mb-0">{property.location}</p>
                <div className="meta-list d-flex align-items-center mt5">
                  <a className="meta fz12" href="#">
                    <span className="flaticon-bed" />
                    {property.bed} bed
                  </a>
                  <a className="meta fz12" href="#">
                    <span className="flaticon-shower" />
                    {property.bath} bath
                  </a>
                  <a className="meta fz12" href="#">
                    <span className="flaticon-expand" />
                    {property.sqft} sqft
                  </a>
                </div>
                <div className="listing-price">
                  <h6 className="list-price mb-0">{property.price}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySimilar;
