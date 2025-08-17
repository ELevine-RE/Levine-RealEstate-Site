import React from "react";
import Image from "next/image";
import { getSafeImageSrc } from "../../../../utils/imageUtils";

const PropertyAgent = ({ 
  agentName = "John Doe", 
  agentEmail = "john@example.com", 
  agentPhone = "+1 (555) 123-4567",
  agentImage = "/images/team/agent-1.jpg"
}) => {
  return (
    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Contact Agent</h4>
      <div className="agent-single-details">
        <div className="d-sm-flex align-items-center">
          <div className="agent-img mb20-sm">
            <Image
              width={90}
              height={90}
              className="w90 h90 rounded-circle cover"
              src={getSafeImageSrc(agentImage, 'agent')}
              alt={agentName || 'agent'}
            />
          </div>
          <div className="agent-contact ml20 ml0-xs">
            <h6 className="title mb-1">{agentName}</h6>
            <p className="mb10">Real Estate Agent</p>
            <div className="agent-meta mb15 d-md-flex align-items-center">
              <a className="text fz15 pe-2" href={`mailto:${agentEmail}`}>
                <i className="far fa-envelope pe-2" />
                {agentEmail}
              </a>
            </div>
            <div className="agent-meta d-md-flex align-items-center">
              <a className="text fz15" href={`tel:${agentPhone}`}>
                <i className="far fa-phone pe-2" />
                {agentPhone}
              </a>
            </div>
          </div>
        </div>
        <div className="d-grid mt30">
          <button 
            className="ud-btn btn-thm" 
            type="button"
            onClick={() => window.open(`mailto:${agentEmail}`, '_blank')}
          >
            Contact Agent
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyAgent;
