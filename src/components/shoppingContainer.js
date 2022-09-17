import React from "react";
import { useSelector } from "react-redux";
import NewItemForm from "./newItemForm";
import ShoppingItem from "./shoppingItem";

const ShoppingContainer = () => {
  const { shopItems, showForm } = useSelector((state) => state.shopList);

  return (
    <React.Fragment>
      <div className="App-container">
        <div className="row">
          <div className="col-lg-6 side-1">
            <ShoppingItem shopItems={shopItems} />
          </div>
          <div className="col-lg-6 side-2">
            <NewItemForm showForm={showForm} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingContainer;
