import { Footer } from "../../components";
import contact_img from "../../assets/contact-img.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import "./AboutUs.css";
import { useState } from "react";

emailjs.init("XfdM9Onz4VFwYVbe5");
const AboutUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      if (!firstName || !lastName || !email || !phone || !message) {
        Swal.fire({
          title: "Warning!",
          text: "Please fill all the fields!",
          icon: "error",
          confirmButtonText: "Ok",

          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
            cancelButton: "custom-cancel-button",
          },
        });
        return;
      }
      const mail = await emailjs.send("service_b6wf9so", "template_qct3ijq", {
        from_name: firstName + " " + lastName,
        to_name: "Roohoof Rascals",
        message: message,
        reply_to: email,
        phone: phone,
      });
      console.log(mail);
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonText: "Ok",

        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
          cancelButton: "custom-cancel-button",
        },
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log(error)
      return;
    }
  };
  return (
    <>
      <div className="about-container container">
        <div
          className="about-banner-wrapper"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="about-banner-container">
            <h2>
              The Creation of Token <span>Tycoon Territory</span>
            </h2>
            <p>
              A passionate team of artists, developers, and storytellers united
              to merge digital art with blockchain technology. Their vision led
              to the creation of Token Tycoon Territory, captivating a global
              audience with constant innovation and dynamic storytelling.
            </p>
          </div>
        </div>

        <div
          className="about-banner-wrapper"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="about-banner-container">
            <h2>
              Discovery of <span>Roohoof Rascals</span>
            </h2>
            <p>
              <strong>Brainstorming Sessions:</strong> The team brainstormed,
              drawing inspiration from mythology, folklore, and modern pop
              culture. This creative process led to the initial sketches and
              concepts of the Roohoof Rascals.
              <br />
              <strong>Character Design:</strong> The lead artist crafted
              whimsical and mythical characters, each with a unique personality
              and visual appeal, ensuring they stood out in the digital
              landscape.
              <br />
              <strong>Development and Refinement:</strong> Through focus groups
              and iterative design, the characters evolved to resonate with
              collectors and fans.
            </p>
          </div>
        </div>

        <div
          className="about-banner-wrapper"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="about-banner-container">
            <h2>
              Building the <span>Ecosystem</span>
            </h2>
            <p>
              <strong className="text-yellow">Blockchain Integration:</strong>{" "}
              The team chose an eco-friendly blockchain platform, developing
              smart contracts for secure, transparent transactions and seamless
              trading of Roohoof Rascals.
              <br />
              <strong className="text-yellow">
                Community Involvement:
              </strong>{" "}
              Engaging early supporters, the team built a loyal following
              through social media, AMA sessions, and discussion forums,
              creating a vibrant community even before the official launch.
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div
            className="section-header"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div>
              <h2>
                Get in <span>touch</span>
              </h2>
              <p>
                Reach out, and let&apos;s create a universe of possibilities
                together!
              </p>
            </div>
          </div>

          <div
            className="contact-form-container"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="contact-form-left">
              <div>
                <h4>Let’s connect constellations</h4>
                <p>
                  Let&apos;s align our constellations! Reach out and let the
                  magic of collaboration illuminate our skies.
                </p>
              </div>

              <div className="form">
                <div className="input-box">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="input-box">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input-box">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="input-box">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <button onClick={sendEmail} className="btn">
                Send Message
              </button>
            </div>
            <div className="contact-form-right">
              <img
                src={contact_img}
                alt="Contact"
                className="img-fluid w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
