import "./Form.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import { useForm } from "react-hook-form";
const initialValues = {
  email: "",
  country: "",
  phone: "",
  city: "",
  isAgreementChecked: true,
};
const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.country) {
    errors.country = "country code is required";
  }
  if (!values.phone) {
    errors.phone = "phone is required";
  } else if (values.phone.length < 10) {
    errors.phone = "phone should be minimum 10 digits";
  }

  if (!values.city) {
    errors.city = "City is required";
  }
  if (!values.isAgreementChecked) {
    errors.isAgreementChecked = "Please read terms and services";
  }

  return errors;
};

const submitForm = (values) => {
  alert(JSON.stringify(values));
};

const RegistrationForm = () => {
  const [stateChecked, setAgreementChecked] = useState(false);

  const handleAgreementChange = () => {
    setAgreementChecked(!stateChecked);
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div class="form-content">
            <form onSubmit={handleSubmit} class="form">
              <strong>Become a Bolt Driver</strong>
              <p>
                If you have multiple cars and drivers{" "}
                <span className="text-green">Sign up as a fleet owner</span>
              </p>
              <div class="form__input-grp">
                <strong className="form-text">Email</strong>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="form__input"
                  placeholder="Email"
                  autocomplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                {errors.email && touched.email && (
                  <span class="error">{errors.email}</span>
                )}
              </div>
              <div class="form__input-grp inline">
                <strong className="form-text">Phone</strong>

                <select
                  name="country"
                  id="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form__input form__countrycode ${
                    errors.country && touched.country ? "input-error" : null
                  }`}
                >
                  <option value=""></option>
                  <option value="+372">+372</option>
                  <option value=" +374"> +374</option>
                  <option value="+375">+375</option>
                  <option value=" +376"> +376</option>
                </select>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  class="form__input form__phone"
                  placeholder="Phone"
                  autocomplete="off"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    "form__input form__phone " +
                    (errors.phone && touched.phone ? "input-error" : null)
                  }
                />
                {errors.country && touched.country && (
                  <>
                    <span class="error">{errors.country}</span>
                    <br />
                  </>
                )}
                {errors.phone && touched.phone && (
                  <span class="error">{errors.phone}</span>
                )}
              </div>
              <div class="form__input-grp">
                <strong className="form-text">City</strong>
                <select
                  name="city"
                  id="city"
                  placeholder="City"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form__input form__city ${
                    errors.city && touched.city ? "input-error" : null
                  }`}
                >
                  <option value=""></option>
                  <option value="Tallinn">Tallinn</option>
                  <option value=" Tartu"> Tartu</option>
                  <option value=" Narva"> Narva</option>
                  <option value=" Pärnu"> Pärnu</option>
                  <option value=" Kohtla-Järve"> Kohtla-Järve</option>
                </select>
                {errors.city && touched.city && (
                  <span class="error">{errors.city}</span>
                )}
              </div>
              <div class="term-text">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={values.isAgreementChecked}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label class="form__agreement">
                  I agree of Bolt's
                  <span class="text-green">Terms of Service</span> and{" "}
                  <span class="text-green">Privacy policy</span>
                </label>
              </div>
              {errors.isAgreementChecked && touched.isAgreementChecked && (
                <span class="error">{errors.isAgreementChecked}</span>
              )}
              <Button
                size="sm"
                type="submit"
                className={`ember-view btn navbar-button rounded-corner ${
                  !(dirty && isValid) ? "disabled-btn" : ""
                }`}
                disabled={!(dirty && isValid)}
              >
                SIGN UP AS A DRIVER
              </Button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
