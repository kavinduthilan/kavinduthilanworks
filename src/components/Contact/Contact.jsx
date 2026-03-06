import React from "react";
import { useRef } from "react";
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
        "B3jiIxXZLjXrRsilc",
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="text-center mb-20 px-4" id="contact">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Contact Me
      </h1>

      {/* Changed from grid-cols-2 to single column on mobile, two columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 sm:m-8 md:m-12">
        {/* Contact Info */}
        <div className="p-4 sm:p-[5%] pt-8 md:pt-[15%]">
          <div className="flex items-center text-left mb-4">
            {/* Replace src with your actual image: src={add} */}
            <div className="w-10 h-10 flex-shrink-0 bg-[#00abf0] rounded-full border-2 border-solid border-[#00abf0] mr-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <span className="text-white text-sm sm:text-base">
              "kumudu" Omatta Road,Kurunduwatta, Agalawatta.
            </span>
          </div>

          <div className="flex items-center text-left mb-4">
            {/* Replace src with your actual image: src={mail} */}
            <div className="w-10 h-10 flex-shrink-0 bg-[#00abf0] rounded-full border-2 border-solid border-[#00abf0] mr-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <span className="text-white text-sm sm:text-base break-all">
              kavinduthilan1998@gmail.com
            </span>
          </div>

          <div className="flex items-center text-left">
            {/* Replace src with your actual image: src={tele} */}
            <div className="w-10 h-10 flex-shrink-0 bg-[#00abf0] rounded-full border-2 border-solid border-[#00abf0] mr-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <span className="text-white text-sm sm:text-base">
              +94 77-8492679
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="pt-5 pb-5 px-4 sm:pr-12">
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
                style: { color: "white" },
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
                style: { color: "white" },
              }}
            />

            <TextField
              multiline
              rows={6}
              label="Message"
              placeholder="Message"
              name="message"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                style: { color: "white" },
              }}
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                mt: 1,
                "@media (min-width: 640px)": { width: "auto" },
              }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
