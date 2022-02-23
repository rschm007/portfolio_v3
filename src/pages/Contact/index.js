import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Wrapper from "../../components/Wrapper";
import LinkButton from "../../components/LinkButton";
import Stars from "../../components/Animations/Stars";
import Campfire from "../../components/Animations/Campfire";
import { motion } from "framer-motion/dist/framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { init, sendForm } from "@emailjs/browser";
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

  return (
    <Wrapper class="background">
      <Stars />

      <Wrapper class="background_1">
        <Wrapper class="contact_container">
          <Header tag="h1" content="Contact" class="header_contact__hero">
            <Subtitle
              tag="p"
              content={
                formSubmitted
                  ? "Thanks, talk to you soon!"
                  : "You can write me a message if you want."
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

                <p className="message-chars-left">{messageCharactersLeft}</p>
                <input type="submit" value="Send" />
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
              content="Or find me online."
              class="contact_subtitle__links"
            />
          </motion.div>
        </Wrapper>

        <Wrapper class="campfire_container">
          <Campfire />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Contact;
