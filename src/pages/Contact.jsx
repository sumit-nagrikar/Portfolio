import React , { useState }from "react";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // You can also send the form data to a server or perform other actions
  };

  return (
    <div className="container-contact" id="contact">
      <h1>Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 fs-5">
        <h2 className="mb-3 purple ">Feel free to fill, we will shortly reach to you!</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label text-white">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-white mb-0">Message</label>
              <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-outline-light ">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
