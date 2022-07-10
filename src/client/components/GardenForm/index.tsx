import React from "react";
import styled from "styled-components";
import Button from "../primitives/Button";
import { string, number, object } from "yup";
import { Field, Form, Formik } from "formik";

const formSchema = object().shape({
  name: string().required("This is a required field"),
  description: string().required("This is a required field"),
  address: string().required("This is a required field"),
  state: string().required("This is a required field"),
  city: string().required("This is a required field"),
  zipcode: string().required("This is a required field"),
  memberlimit: number().required("This is a required field"),
});

const FormFlex = styled(Form)({
  display: "flex",
  flexDirection: "column",
  width: "400px",
});

const FormWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
});

const InputWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const FormInput = styled(Field)({
  display: "flex",
});

const ButtonExtended = styled(Button)<{ disabled: boolean }>(
  ({ disabled }) => ({
    fontSize: "20px",
    color: "white",
    borderBottom: "2px solid var(--lightGreen)",
    backgroundColor: disabled ? "var(--orange)" : "var(--lightGreen)",
  })
);

const GardenForm: React.FC = ({}) => {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        memberlimit: 0,
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        console.log("dispatch values", values);
      }}
    >
      {({ isValid, submitForm, dirty }) => (
        <FormFlex>
          <FormWrapper>
            <InputWrapper>
              <label htmlFor="name">Name</label>
              <FormInput name="name" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="description">Description</label>
              <FormInput name="description" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="address">Address</label>
              <FormInput name="address" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="state">State</label>
              <FormInput name="state" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="city">City</label>
              <FormInput name="city" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="zipcode">Zipcode</label>
              <FormInput name="zipcode" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="memberlimit">Member Limit</label>
              <FormInput name="memberlimit" />
            </InputWrapper>
            <ButtonExtended
              onClick={() => {
                if (!(isValid && dirty)) {
                  console.log("form is invalid");
                } else {
                  console.log("submit form");
                  submitForm();
                }
              }}
              disabled={!(isValid && dirty)}
            >
              Submit
            </ButtonExtended>
          </FormWrapper>
        </FormFlex>
      )}
    </Formik>
  );
};

export default GardenForm;
