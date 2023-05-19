import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

import { useState } from "react";
import "../styles/find-car-form.css";
import "../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const CarListing = () => {
  const [searchTermCompany,setSearchTermCompany]=useState("")
  const [searchTermModel,setSearchTermModel]=useState("")
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
      <div className="">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                
              {/* find car form section */}
              <Form className="form">
                <div className=" d-flex align-items-center justify-content-between flex-wrap">
                  <FormGroup className="form__group">
                    <input id="searchInput1" type="text" placeholder="Search By Company..."
                    onChange={(event)=>{setSearchTermCompany(event.target.value)}}/>
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input id="searchInput2" type="text" placeholder="Search By Model..."
                    onChange={(eventModel)=>{setSearchTermModel(eventModel.target.value)}}/>
                  </FormGroup>

                  <FormGroup className="select__group">
                    <select>
                      <option value="ac">AC Car</option>
                      <option value="non-ac">Non AC Car</option>
                    </select>
                  </FormGroup>

                  <FormGroup className="form__group">
                    <button className="btn find__car-btn">Find Car</button>
                  </FormGroup>
                </div>
              </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            

            {/* {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))} */}
            {carData
            .filter((item) => {
              const companyMatch = item.brand.toLowerCase().includes(searchTermCompany.toLowerCase());
              const modelMatch = item.carName.toLowerCase().includes(searchTermModel.toLowerCase());
              if (searchTermCompany === "" && searchTermModel === "") {
                return true; // Include all items when the searchTerm is empty
              } else if (searchTermCompany==="") {
                return modelMatch; // Include items that match the search term
              }else if (searchTermModel==="") {
                return companyMatch; // Include items that match the search term
              }else{
                return companyMatch && modelMatch;
              } // Exclude items that don't match the search term
            })
            .map((item) => (
              <CarItem item={item} key={item.id} />
            ))}

            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
