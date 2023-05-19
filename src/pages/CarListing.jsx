import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

import { useState} from "react";
import "../styles/find-car-form.css";
import "../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const CarListing = () => {
  const [searchTermCompany,setSearchTermCompany]=useState("")
  const [selectCompany,setSelectCompany]=useState("")
  const [searchTermModel,setSearchTermModel]=useState("")
  const [selectModel,setSelectModel]=useState("")
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSelectCompany = (event) => {
    const selectedCompany = event.target.value;
    setSelectCompany(selectedCompany);
    setSearchTermModel(""); // Clear the model search term
  };

  const handlePriceFilter = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(value);
    } else if (name === "maxPrice") {
      setMaxPrice(value);
    }
  };
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
                    <select onChange={handleSelectCompany}>
                      <option value="">Select Company</option>
                      {carData.map((item)=>{
                        return <option key={item.id} >{item.brand}</option>
                      })}
                    </select>
                  </FormGroup>

                  <FormGroup className="form__group">
                      <input
                        type="number"
                        placeholder="Min Price"
                        name="minPrice"
                        value={minPrice}
                        onChange={handlePriceFilter}
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="number"
                        placeholder="Max Price"
                        name="maxPrice"
                        value={maxPrice}
                        onChange={handlePriceFilter}
                      />
                    </FormGroup>
                  {/* <FormGroup className="select__group">
                    <select onChange={(event)=>{setSelectModel(event.target.value)}}>
                      <option value="">Select Model</option>
                      {carData
                          .filter(
                            (item) =>
                              item.brand.toLowerCase() ===
                              selectCompany.toLowerCase()
                          )
                          .map((item) => (
                            <option key={item.id}>{item.carName}</option>
                          ))}
                    </select>
                  </FormGroup> */}

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
              const selectCompanyMatch = item.brand.toLowerCase().includes(selectCompany.toLowerCase());
              const priceMatch =
              (minPrice === "" || item.price >= minPrice) &&
              (maxPrice === "" || item.price <= maxPrice);

              if (
                searchTermCompany === "" &&
                searchTermModel === "" &&
                selectCompany === "" &&
                minPrice === "" &&
                maxPrice === ""
              ) {
                return true; // Include all items when no filters are applied
              } else {
                return companyMatch && modelMatch && priceMatch && selectCompanyMatch;
              }
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
