import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./ContactModal.scss";
import { logEvent } from "../../analytics";

const emptyState = {
  senderName: "",
  senderEmail: "",
  message: "",
  errors: {},
  loading: false,
  apiError: false,
  submitted: false,
};

const ContactModal = ({ isOpen, onClose }) => {
  const [state, setState] = useState(emptyState);
  const { senderName, senderEmail, message, errors, loading, apiError, submitted } = state;

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (patch) => setState((prev) => ({ ...prev, ...patch }));

  const validate = () => {
    const errs = {};
    if (!senderName.trim()) errs.name = "Name cannot be empty";
    if (!senderEmail.trim()) errs.email = "Email cannot be empty";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) errs.email = "Enter a valid email";
    if (!message.trim()) errs.message = "Message cannot be empty";
    set({ errors: errs });
    return Object.keys(errs).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    set({ errors: {}, [name]: value });
  };

  const handleSubmit = async () => {
    set({ apiError: false });
    logEvent("Contact Modal", "Send", "Click Send in modal");
    if (!validate()) return;
    set({ loading: true });

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);
    formData.append("name", senderName);
    formData.append("email", senderEmail);
    formData.append("message", message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data.success) {
      set({ loading: false, submitted: true });
    } else {
      set({ loading: false, apiError: true });
    }
  };

  const handleClose = () => {
    setState(emptyState);
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Get in Touch</span>
          <button className="modal-close" onClick={handleClose} aria-label="Close">✕</button>
        </div>
        <hr className="modal-divider" />

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✉️</div>
            <h4>Message received!</h4>
            <p>I'll get back to you within 24 hours.</p>
            <button className="modal-btn-primary" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="senderName"
                value={senderName}
                onChange={handleChange}
                placeholder="Your name"
                autoFocus
              />
              {errors.name && <small className="field-error">{errors.name}</small>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="senderEmail"
                value={senderEmail}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              {errors.email && <small className="field-error">{errors.email}</small>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
              />
              {errors.message && <small className="field-error">{errors.message}</small>}
            </div>

            {apiError && (
              <small className="field-error">Something went wrong. Please try again.</small>
            )}

            <div className="modal-actions">
              <button
                className="modal-btn-primary"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              <button className="modal-btn-secondary" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
