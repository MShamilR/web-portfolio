import { useEffect, useState } from "react";
import "./ContactModal.scss";

const initialForm = { name: "", email: "", message: "" };

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORM_ACCESS_KEY,
          subject: "New portfolio enquiry",
          from_name: form.name,
          ...form,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error("Submission failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("I couldn't send that just now. Please try again in a moment.");
    }
  };

  return (
    <div className="modal-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <div className="modal-header">
          <span className="modal-title" id="contact-title">Start a conversation</span>
          <button className="modal-close" onClick={onClose} aria-label="Close contact form">×</button>
        </div>
        <hr className="modal-divider" />
        {status === "success" ? (
          <div className="modal-success">
            <div className="success-icon" aria-hidden="true">✓</div>
            <h4>Message sent</h4>
            <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
            <button className="modal-btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form className="modal-body" onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" value={form.name} onChange={updateField} required autoFocus />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">What are you working on?</label>
              <textarea id="contact-message" name="message" rows="5" value={form.message} onChange={updateField} required />
            </div>
            {error && <span className="field-error" role="alert">{error}</span>}
            <div className="modal-actions">
              <button className="modal-btn-primary" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
              <button className="modal-btn-secondary" type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
