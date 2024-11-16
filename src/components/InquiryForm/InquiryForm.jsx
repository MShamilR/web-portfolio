import React from "react";
import "./InquiryForm.scss";

const InquiryForm = ({
  showForm,
  handleShowForm,
  senderName,
  senderEmail,
  message,
  errors,
  handleChange,
  handleSubmit,
  renderSuccessMsg,
  handleRenderSuccessMsg,
  apiError,
  loading,
}) => {
  return (
    <div className="profile-form">
      {renderSuccessMsg && (
        <>
          <div className="success-card">
            Ayy, got your message! 👇
            <br />
            I’ll hit you back real quick! 💨
          </div>
          <button className="main-button" onClick={handleRenderSuccessMsg}>
            Okay
          </button>
        </>
      )}
      {!showForm && !renderSuccessMsg && (
        <button className="main-button" onClick={handleShowForm}>
          Send me a message
        </button>
      )}
      {showForm && (
        <>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="senderName"
              value={senderName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="senderEmail"
              value={senderEmail}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleChange}
              placeholder="Type your message"
            />
          </div>

          <div className="errors">
            {Object.values(errors).map((error, index) => (
              <div key={index}>
                <small>{error}</small>
              </div>
            ))}
          </div>
          {apiError && (
            <div className="errors">
              <small>Internet acting sus? Check it. 👀</small>
            </div>
          )}

          <div className="button-group">
            <button
              className="save-button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Wait" : "Send"}
            </button>
            <button className="cancel-button" onClick={handleShowForm}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InquiryForm;
