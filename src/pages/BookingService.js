import { useState } from "react";
import styles from "./BookingService.module.css";
import ServiceCard from "../components/serviceCard/ServiceCard";

const BookingService = () => {
  const [isOpenStyle, setIsOpenStyle] = useState(false);

  const handleOpenStyle = () => {
    setIsOpenStyle(!isOpenStyle);
  };
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
      <div className={styles.bookingServiceContainer}>
        <div className="container">
          {services.map((service, id) => {
            return (
              <>
                <h4 type="button" onClick={handleOpenStyle}>
                  {service.name} <i class="fa-solid fa-play"></i>
                </h4>
                {service.service.map((el, id) => {
                  return isOpenStyle && <ServiceCard service={el} key={id} />;
                })}
              </>
            );
          })}
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default BookingService;
