import React from "react";
import InquiryForm from "../InquiryForm/InquiryForm";
import "./About.scss";
import photo from "../../assets/photo.jpg";
import { useSetState } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMountain,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [
    { showForm, senderName, senderEmail, message, renderSuccessMsg, errors },
    setState,
  ] = useSetState({
    showForm: false,
    senderName: "",
    senderEmail: "",
    message: "",
    errors: {},
    renderSuccessMsg: false,
  });

  const handleShowForm = () => {
    setState({ showForm: !showForm });
  };

  const validateForm = () => {
    let isError = false;
    setState({ errors: {} });
    if (!senderName.trim()) {
      isError = true;
      setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors, // Preserve existing errors
          name: "Name cannot be empty",
        },
      }));
    }
    if (!senderEmail.trim()) {
      isError = true;
      setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          name: "Email cannot be empty",
        },
      }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      isError = true;
      setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          email: "Enter a valid email",
        },
      }));
    }
    if (!message.trim()) {
      isError = true;
      setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          message: "Message cannot be empty",
        },
      }));
    }
    return isError;
  };

  const handleRenderSuccessMsg = () => {
    setState({ renderSuccessMsg: !renderSuccessMsg });
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "senderName":
        setState({ senderName: value });
        break;
      case "senderEmail":
        setState({ senderEmail: value });
        break;
      case "message":
        setState({ message: value });
        break;

      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const isError = validateForm();
    if (!isError) {
      const formData = new FormData();
      console.log(import.meta.env.VITE_WEB3FORM_ACCESS_KEY);

      formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);
      formData.append("name", senderName);
      formData.append("email", senderEmail);
      formData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setState({
          renderSuccessMsg: true,
          showForm: false,
          senderName: "",
          senderEmail: "",
          message: false,
        });
      } else {
        console.log("Error", data);
        console.log(data.message);
      }
    }
  };

  return (
    <div className="profile-header">
      <div className="profile-image">
        <img src={photo} alt="Profile" />
      </div>
      <div className="profile-details">
        <div className="profile-title">
          <h3>Mohammed Shamil</h3>
          <h4>Software Engineer</h4>
        </div>

        <InquiryForm
          showForm={showForm}
          handleShowForm={handleShowForm}
          handleChange={handleChange}
          senderName={senderName}
          senderEmail={senderEmail}
          message={message}
          errors={errors}
          handleSubmit={handleSubmit}
          renderSuccessMsg={renderSuccessMsg}
          handleRenderSuccessMsg={handleRenderSuccessMsg}
        />
        {!showForm && (
          <div className="profile-summary">
            <div>
              <FontAwesomeIcon icon={faBuilding} className="icon" />
              <span>Thyaga (thyaga.lk)</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMountain} className="icon" />
              <span>Hatton, Sri Lanka</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <a
                href="https://www.linkedin.com/in/mhdshamil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email me!
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              <a
                href="https://www.linkedin.com/in/mhdshamil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                in/mhdshamil
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
