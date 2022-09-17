import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  isShowForm,
} from "../features/shoppingList/shoppingListSlice";
import { showMe } from "../features/modal/modalSlice";
import { MdAddCircle } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./commons/input";
import TextArea from "./commons/textArea";
import Select from "./commons/select";

const NewItemForm = ({ showForm }) => {
  const dispatch = useDispatch();

  const validate = Yup.object({
    name: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    description: Yup.string(),
    quatity: Yup.number(),
    category: Yup.string(),
  });
  return (
    <section className="Add-item">
      <div
        className="header-text"
        onClick={() => {
          dispatch(isShowForm(true));
          dispatch(showMe(false));
        }}
      >
        <span className="header-icon">
          <MdAddCircle />
        </span>
        <h3> Add New Item</h3>
      </div>
      <hr />
      <Formik
        initialValues={{
          name: "",
          description: "",
          quantity: 1,
          category: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const payload = {
              id: uuidv4(),
              title: values.name,
              des: values.description,
              isChecked: false,
              category: values.category,
              quantity: values.quantity.toString(),
            };
            dispatch(addItem(payload));
            resetForm(true);
            setSubmitting(false);
            dispatch(isShowForm(false));
          }, 400);
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            {isSubmitting && <div>Loading...</div>}

            {showForm && (
              <div className="rest-of-form">
                <Input label="New Item" name="name" type="text" />
                <TextArea label="Description" name="description" />
                <div className="mb-5">
                  <div className="row">
                    <div className="col-5 ">
                      <Input
                        label="Quantity"
                        name="quantity"
                        type="number"
                        min="1"
                        max="9999"
                        step="1"
                      />
                    </div>
                    <div className="col-5">
                      <Select label="Category" name="category" />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-secondary"
                >
                  Add New
                </button>
                <button
                  type="reset"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    resetForm(true);
                    dispatch(isShowForm(false));
                  }}
                >
                  Clear Form
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default NewItemForm;
