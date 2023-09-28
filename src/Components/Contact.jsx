import { Button } from "react-bootstrap";
import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import "../Stylesheets/Contact.css";
import { Divider } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Header from "./Header";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Contact({ contactRef }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ixnw4q', 'template_pxmvv3t', form.current, 'i18dONM9pK7ccDJ40')
      .then((result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
          })
          e.target.reset();
          // e.target.reset();
      }, (error) => {
          toast.error("Oh no! Something went wrong :(", {
            position: "top-right",
          })
      });
  };
  const description =
    "I'm deeply passionate about software development and machine learning, and I'm eager to collaborate with professionals who share the same enthusiasm. If you're interested in connecting, please don't hesitate to reach out to me on Linkedin or directly via the form provided:";
  return (
    <>
      <div className="contact flex flex-col gap-4 md:p-0 sm:px-4" ref={contactRef}>
        <Header headerName="Contact Me" />
        <ToastContainer className="toast-position"/>
        <div className="md:grid grid-flow-col md:grid-cols-12 flex flex-col gap-4">
          <div className="description flex flex-col gap-2 text-left md:text-center text-[0.9rem] md:col-span-5">
            <p>{description}</p>
            <div className="contact-links">
              <a href="mailto:theofficialsarangnambiar@gmail.com">
                <p>
                  <MailIcon /> theofficialsarangnambiar@gmail.com
                </p>
              </a>
              <a href="https://www.linkedin.com/in/sarang-nambiar/">
                <p>
                  <LinkedInIcon /> Sarang Nambiar
                </p>
              </a>
            </div>
          </div>
          <Divider orientation="vertical" flexItem sx={{color:"#b6b6b7"}} className="mx-auto md:flex md:col-span-2 sm:hidden" />
          <Form className="md:col-span-5 sm:row-span-1" ref={form} onSubmit={sendEmail}>
            <Form.Group
              className="mb-3 text-left text-sm"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 text-left text-sm"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                required
                placeholder="Write your message here..."
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
