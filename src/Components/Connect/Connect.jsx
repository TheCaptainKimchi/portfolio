import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Connect.scss";
import CheckIcon from "../../Assets/Icons/check-icon.svg";

export const ContactUs = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [formButton, setFormButton] = useState("form__submit-active");
  const [formSubmitted, setFormSubmitted] = useState("form__submit-inactive");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !form.current[0].value ||
      !form.current[1].value ||
      !form.current[0].value
    ) {
      setErrorMessage("Please fill out all form fields!");
    } else {
      setFormButton("form__submit-inactive");
      setFormSubmitted("form__submit-active");

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <div className="connect-container" id="contact">
      <h2 className="title">Connect With Me!</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form__name">
          <label className="form__name-label">Name</label>
          <input type="text" name="from_name" className="form__name-input" />
        </div>
        <div className="form__email">
          <label className="form__email-label">Email</label>
          <input type="email" name="from_email" className="form__email-input" />
        </div>
        <div className="form__message">
          <label className="form__message-label">Message</label>
          <textarea name="message" className="form__message-input" />
        </div>
        <div className="form__submit">
          <input type="submit" value="Submit" className={formButton} />
          <div className={formSubmitted}>
            <p className="form__submit-text">Submitted!</p>
            <img
              src={CheckIcon}
              alt="check-icon"
              className="form__submit-icon"
            ></img>
          </div>
        </div>
        <p className="form__error">{errorMessage}</p>
      </form>
    </div>
  );
};

export default ContactUs;
