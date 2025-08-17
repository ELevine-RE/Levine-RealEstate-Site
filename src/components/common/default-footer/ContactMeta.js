import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Prestige Real Estate Services",
      phone: "+1 (555) 123-4567",
      phoneLink: "tel:+15551234567",
    },
    {
      title: "Connect with Evan Levine",
      mail: "evan@elr.com",
      mailLink: "mailto:evan@elr.com",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
