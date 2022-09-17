import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/shoppingList/shoppingListSlice";
import { openModal } from "../features/modal/modalSlice";
import { MdDeleteForever } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";

const ShoppingItem = ({ shopItems }) => {
  const dispatch = useDispatch();

  if (shopItems.length < 1)
    return (
      <React.Fragment>
        <div className="header-text">
          <span className="header-icon">
            <BsCart4 />
          </span>
          <h3>shopping List</h3>
        </div>
        <hr />

        <h4 className="Empty">Your List is Empty</h4>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <section>
        <div className="header-text">
          <span className="header-icon">
            <BsCart4 />
          </span>
          <h3>shopping List</h3>
        </div>
        <hr />

        <div className="list">
          {shopItems.map((item) => (
            <div key={item.id} className="list-container">
              <div className="quantity">{`${item.quantity}x `}</div>
              <div className="list-details">
                <div className="list-name">
                  <h4>{item.title}</h4>
                </div>
                {item.des && (
                  <div className="list-description">
                    <p>{item.des}</p>
                  </div>
                )}
              </div>
              <button
                className="delete-btn"
                onClick={() => {
                  dispatch(removeItem(item.id));
                }}
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
        </div>
        <button
          type="reset"
          className="btn btn-outline-danger mt-5"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Clear List
        </button>
      </section>
    </React.Fragment>
  );
};

export default ShoppingItem;
