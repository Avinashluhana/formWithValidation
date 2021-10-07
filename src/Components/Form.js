import React from "react";
import { useForm } from "react-hook-form";

import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="column left">
          <div className="form-contents">
            <h1>Let's set up your account</h1>
            <span>
              Already have an account?{" "}
              <a className="anchor-text" href="sign in">
                Sigin in
              </a>
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form__div">
                <input type="text" className="form__input" placeholder=" " />
                <label for="" class="form__label">
                  Your Name
                </label>
              </div>
              <div className="form__div">
                <input
                  type="text"
                  className={`form__input ${errors.email && "invalid"}`}
                  placeholder=" "
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                <label
                  for=""
                  className={`form__label ${errors.email && "label"}`}
                >
                  Email address
                </label>
              </div>
              <i class="fas fa-eye"></i>

              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}

              <div className="form__div">
                <input
                  type="text"
                  className="form__input"
                  placeholder="I would describe my user type as"
                />
                <i class="fas fa-caret-down"></i>
              </div>

              <div className="form__div">
                <input type="password" class="form__input" placeholder=" " />
                <label for="" className="form__label">
                  Password
                </label>
              </div>
              <i class="far fa-eye"></i>
              <small className="limit-text">Minimum 8 charatcers</small>
              <br />
              <button type="submit" className="form-button">
                Next
              </button>
              <div className="condition-text">
                <p className="term-text">
                  By clicking the “Next” button, you agree to creating a free
                  account, and to <a href="">Terms of Service </a>and{" "}
                  <a href="">Privacy Policy.</a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="column right">
          <h1 className="heading">Dummy text</h1>
          <p className="dummy-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
