import React from "react";
import { useRef } from "react";
import add from "../../images/gps.png";
import mail from "../../images/email.png";
import tele from "../../images/phone.png";
import emailjs from "@emailjs/browser";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9bqaxxw",
        "template_4uw2i8e",
        form.current,
        "B3jiIxXZLjXrRsilc"
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
          //console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="text-center mb-20" id="contact">
      <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Contact Me
      </h1>

      <div className="grid grid-cols-2 gap-8 m-12">
        <div className="p-[5%] pt-[15%]">
          <div className="flex text-left">
            <img
              className="w-[6%] h-[6%] bg-[#00abf0] rounded-[50%] border-2 border-solid border-[#00abf0] mr-[20px]"
              src={add}
              alt="add"
            />
            <span className="flex">
              "kumudu" Omatta Road,Kurunduwatta, Agalawatta.
            </span>
          </div>
          <br />
          <div className="flex text-left">
            <img
              className="w-[6%] h-[6%] bg-[#00abf0] rounded-[50%] border-2 border-solid border-[#00abf0] mr-[20px]"
              src={mail}
              alt="mail"
            />
            <span className="flex">kavinduthilan1998@gmail.com</span>
          </div>
          <br />
          <div className="flex text-left">
            <img
              className="w-[6%] h-[6%] bg-[#00abf0] rounded-[50%] border-2 border-solid border-[#00abf0] mr-[20px]"
              src={tele}
              alt="tele"
            />
            <span>+94 77-8492679</span>
          </div>
        </div>

        <div className="pt-5 pb-5 pr-12">
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              type="text"
              label="Your Name"
              placeholder="Your Name"
              name="name"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
            />

            <TextField
              type="email"
              label="Your E-mail"
              placeholder="Your E-mail"
              name="email"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
            />
            <TextField
              multiline
              rows={10}
              label="Message"
              placeholder="Message"
              name="message"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
            />
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
