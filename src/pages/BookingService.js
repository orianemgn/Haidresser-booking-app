import { useState } from "react";
import styles from "./Booking.module.css";
import ServiceItem from "../components/bookingCards/ServiceItem";
import { Link } from "react-router-dom";

const BookingService = () => {
  const [isOpenStyle, setIsOpenStyle] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  //is opening everything and not only one service - to correct later
  const handleOpenStyle = () => {
    setIsOpenStyle(!isOpenStyle);
  };

  console.log("SELECTED", selectedService);
  let services = [
    {
      name: "Cutting & Styling",
      service: [
        { style: "style 1", price: "45€", time: "30min" },
        { style: "style 2", price: "30€", time: "30min" },
        { style: "style 3", price: "25€", time: "30min" },
        { style: "style 4", price: "45€", time: "30min" },
        { style: "style 5", price: "455€", time: "30min" },
      ],
    },
    {
      name: "Colors",
      service: [
        { style: "color 1", price: "65€", time: "30min" },
        { style: "color 2", price: "70€", time: "30min" },
        { style: "color 3", price: "55€", time: "30min" },
      ],
    },
  ];

  return (
    <div className="page-container">
      <h1>Unsere Service</h1>
      <div className={styles.bookingContainer}>
        <div className="container">
          {services.map((service, id) => {
            return (
              <>
                <h4 type="button" onClick={handleOpenStyle}>
                  {service.name} <i class="fa-solid fa-play"></i>
                </h4>
                {service.service.map((el, id) => {
                  return (
                    isOpenStyle && (
                      <ServiceItem
                        service={el}
                        icon="fa-solid fa-circle-plus"
                        key={id}
                        setSelectedService={setSelectedService}
                      />
                    )
                  );
                })}
              </>
            );
          })}
        </div>
        <div className="container">
          <h4>Ihre Auswahl</h4>
          <div>
            {!selectedService && <p>Select a service</p>}
            <div onClick={() => setSelectedService(null)}>
              {selectedService && (
                <ServiceItem
                  service={selectedService}
                  icon="fa-solid fa-circle-minus"
                  danger="danger"
                />
              )}
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to="/" className="btn btn-danger">
              Go back
            </Link>
            {selectedService && (
              <Link
                to="/booking-service/booking-employee"
                className="btn btn-primary"
              >
                Next step
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingService;
