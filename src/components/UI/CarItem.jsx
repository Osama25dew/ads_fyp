import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl,brand, status, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{brand}</h4>
          <h5 className="text-center" style={{fontWeight:"bold"}} >{carName}</h5>
          <h6 className="rent__price text-center mt-">
            Rs.{price}.00
          </h6>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {status}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed} KMPH
            </span>
          </div>

          <button className=" w-100 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
