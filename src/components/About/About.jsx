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
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { logEvent } from "../../analytics";

const About = () => {
  const [
    {
      showForm,
      senderName,
      senderEmail,
      message,
      renderSuccessMsg,
      apiError,
      errors,
      loading,
    },
    setState,
  ] = useSetState({
    showForm: false,
    senderName: "",
    senderEmail: "",
    message: "",
    errors: {},
    renderSuccessMsg: false,
    apiError: false,
    loading: false,
  });

  const handleShowForm = () => {
    setState({
      showForm: !showForm,
      senderName: "",
      senderEmail: "",
      message: "",
      apiError: false,
      errors: {},
    });
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
          email: "Email cannot be empty",
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
    logEvent("Inquiry Form", "Okay", "Acknowledge message received");
    setState({ renderSuccessMsg: !renderSuccessMsg });
  };

  const handleChange = ({ target: { name, value } }) => {
    setState({ errors: {} });
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
    setState({ apiError: false });
    logEvent("Inquiry Form", "Send", "Click on the Send Button");
    const isError = validateForm();
    if (!isError) {
      setState({ loading: true });
      const formData = new FormData();

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
        setState({ loading: false });
        setState({
          renderSuccessMsg: true,
          showForm: false,
          senderName: "",
          senderEmail: "",
          message: "",
          apiError: false,
        });
      } else {
        setState({ loading: false, apiError: true });
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
          loading={loading}
          apiError={apiError}
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
            {/* <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <a
                href="mailto:mohammedshamil0300@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email me!
              </a>
            </div> */}
            <div>
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <a
                href="https://github.com/MShamilR"
                target="_blank"
                rel="noopener noreferrer"
              >
                MShamilR
              </a>
            </div>{" "}
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
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <a
                href="mailto:mohammedshamil0300@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mohammedshamil0300@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
