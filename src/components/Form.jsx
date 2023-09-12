import { useState, useEffect, useRef } from "react";

import Input from "./Input";
import Dropdown from "./Dropdown";

function Form(props) {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("default");

  const nameInputRef = useRef();
  const priceInputRef = useRef();
  useEffect(() => {}, []);

  function nameInputHandler(event) {
    setNameInput(event.target.value);
  }

  function priceInputHandler(event) {
    setPriceInput(event.target.value);
  }

  function categoryInputHandler(event) {
    setCategoryInput(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    let productDetail = {
      id: Math.random(),
      name: nameInput,
      price: priceInput,
      category: categoryInput,
    };

    props.onAddNewProduct(productDetail);

    setNameInput("");
    setPriceInput("");
    setCategoryInput("default");
  }
  return (
    <form class="row" autoComplete="off" onSubmit={submitForm}>
      <div class="col-md-3 col-sm-12 ">
        <label htmlFor="">Enter the Product Name</label>
        <Input
          ref={nameInputRef}
          inputId="name"
          inputType="text"
          inputPlaceHolder=""
          iconClass="fa-solid fa-tag"
          value={nameInput}
          onChange={nameInputHandler}
        />
        <br />
      </div>
      <div class="col-md-3 col-sm-12">
        <label htmlFor="">Enter the Price</label>
        <Input
          ref={priceInputRef}
          inputId="price"
          inputType="number"
          inputPlaceHolder=""
          iconClass="fa-sharp fa-solid fa-indian-rupee-sign"
          value={priceInput}
          onChange={priceInputHandler}
        />
        <br />
      </div>
      <div class="col-md-3 col-sm-12">
        <Dropdown value={categoryInput} onChange={categoryInputHandler} />
      </div>
      <br />
      <div class="col-md-3 col-sm-12 d-grid">
        <button class="btn btn-warning" type="submit">
          Place Your Order
        </button>
      </div>
    </form>
  );
}

export default Form;
