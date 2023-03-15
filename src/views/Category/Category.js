import React, { useState, useEffect } from "react";
import SingleProduct from "../../components/Products/SingleProduct";
import Auth from "../../modules/Auth";
import LoginRegister from "../../components/LoginRegisterModal";
import Filter from "./components/Filter";

const Category = (props) => {
  const [products, setProducts] = useState(props.products);
  const [productsBAK, setProductsBAK] = useState(props.products);
  const [departments, setDepartments] = useState(props.departments);
  const [modalShow, setModalShow] = useState(false);
  const [login, setLogin] = useState(true);

  const addToBag = (params) => {
    if (
      Auth.getUserDetails() !== undefined &&
      Auth.getUserDetails() !== null &&
      Auth.getToken() !== undefined
    ) {
      let cart = props.postCart(params);
      cart.then((res) => {
        console.log(res);
      });
    } else {
      setModalShow(true);
    }
  };

  useEffect(() => {
    if (!props.products) {
      props.getAllProducts();
    }
  }, [props]);

  const showHideModal = () => {
    setModalShow(false);
  };

  const loginClicked = () => {
    setModalShow(true);
    setLogin(true);
  };
  const registerClicked = () => {
    setModalShow(true);
    setLogin(false);
  };

  console.log(props);

  return (
    <div className="container product_section_container">
      <div className="row">
        <div className="col product_section clearfix">
          <div class="breadcrumbs d-flex flex-row align-items-center">
            <ul>
              <li class="active">
                <a href="/">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  {props.location.pathname.split("/")[2]}
                </a>
              </li>
              <li class="active">
                <a href="#">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  {props.location.pathname.split("/")[3]}
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar">
            <Filter applyFilters={props.applyFilters} />
          </div>
          <div className="main_content">
            <div class="products_iso">
              <div className="row">
                {products &&
                  products.slice(0, 8).map((item, index) => {
                    return (
                      <div
                        className="col-lg-3 col-sm-6"
                        key={index}
                        data-aos="zoom-in"
                      >
                        <SingleProduct
                          productItem={item}
                          addToBag={addToBag}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginRegister
        show={modalShow}
        login={login}
        registerClicked={() => registerClicked()}
        loginClicked={() => loginClicked()}
        onHide={() => showHideModal()}
      />
    </div>
  );
};

export default Category;
