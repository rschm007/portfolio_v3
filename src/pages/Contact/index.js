import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Wrapper from "../../components/Wrapper";
import LinkButton from "../../components/LinkButton";
import { motion } from "framer-motion/dist/framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { init, sendForm } from "@emailjs/browser";
import DownloadButton from "../../components/DownloadButton";
init("user_eYHjyB5qJUnnw935hh5vz");

// using react-hook-form https://react-hook-form.com
// using emailjs https://dashboard.emailjs.com

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const form = document.querySelector("#contact_form");

  const onSubmit = (data) =>
    sendForm("service_qqdv6l8", "template_f2u2wb2", "#contact_form").then(
      (res) => {
        console.log("SUCCESS!", res.status, res.text);
        form.reset();
        setFormSubmitted(true);
      },
      (err) => {
        console.log("ERROR", err);
      }
    );

  const message = watch("message") || "";
  const messageCharactersLeft = 1500 - message.length;

  const resumeDownloadLink = "https://docs.google.com/document/d/e/2PACX-1vRrBnr4E3nIssXRgYscO1-N9C9TSz14cNVtsPnZiAbQSk_n47ggxFmvKdT1TCfC2A/pub";

  return (
    <Wrapper id="contact">
      <Wrapper class="contact_container">
        <Header tag="h1" content="Contact" class="header_contact__hero">
          <Subtitle
            tag="p"
            content={
              formSubmitted
                ? "Thanks, talk to you soon!"
                : "Let's get in touch."
            }
            class="contact"
          />

          {!formSubmitted && (
            <form id="contact_form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 30 })}
              />
              {errors.name && <span>This field is required</span>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && <span>This field is required</span>}
              <textarea
                name="message"
                placeholder="Message"
                maxLength={1500}
                {...register("message", { required: true, maxLength: 1500 })}
              />
              {errors.message && <span>This field is required</span>}

              <span className="message-chars-left">{messageCharactersLeft}</span>
              <button className="submit_button">
                <input type="submit" value="Send" />
                <i className="fa-solid fa-envelope" />
              </button>

            </form>
          )}
        </Header>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          {" "}
          <Subtitle
            tag="p"
            content="Find me online."
            class="contact_subtitle__links"
          />
          <Wrapper class="flex_column buttons">
            <LinkButton
              href="https://github.com/rschm007"
              icon="fab fa-github"
              content="Github"
              class="github"
            />
            <LinkButton
              href="https://www.linkedin.com/in/robert-schmahl/"
              icon="fab fa-linkedin-in"
              content="LinkedIn"
            />
          </Wrapper>
          <Subtitle
            tag="p"
            content="Check out my resume."
            class="contact_subtitle__links"
          />
          <Wrapper class="flex_column buttons">
            <DownloadButton
              href={resumeDownloadLink}
              icon="fa-solid fa-file-arrow-down"
              content="Download"
              class="download"
            />
          </Wrapper>
        </motion.div>
      </Wrapper>
    </Wrapper>
  );
};

export default Contact;
