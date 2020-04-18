import React, { useState } from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  ButtonToolbar,
  Button,
  SelectPicker,
  Alert,
} from "rsuite";
import { motion } from "framer-motion";

const feedbackType = [
  { label: "Feedback", value: "Feedback" },
  { label: "Question", value: "Question" },
  { label: "Bug Report", value: "Bug Report" },
  { label: "Request", value: "Request" },
];

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = () => {
    if (name.trim() === "") {
      return Alert.error("The name field is required.");
    }
    if (email.trim() === "") {
      return Alert.error("The email field is required.");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return Alert.error("A valid email is required.");
    }
    if (contactReason.trim() === "") {
      return Alert.error("A contact reason is required.");
    }
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, contactReason, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        setName('');
        setEmail('');
        setContactReason('');
        setMessage('');
        Alert.success(res.message);
      })
      .catch((e) => Alert.error(e.message));
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: -25 }}
        transition={{ ease: "easeOut" }}
        className="p-5 d-flex flex-column rounded"
        style={{ backgroundColor: "rgba(164, 169, 179, 0.1)" }}
      >
        <h3 className="mb-3">Contact Me</h3>
        <Form>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl name="name" value={name} onChange={setName} />
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl name="email" type="email" value={email} onChange={setEmail} />
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Contact Reason</ControlLabel>
            <SelectPicker
              data={feedbackType}
              placeholder="Select reason..."
              style={{ width: 300 }}
              value={contactReason}
              onChange={(reason) => setContactReason(reason || "")}
            />
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Message</ControlLabel>
            <FormControl
              rows={5}
              name="textarea"
              componentClass="textarea"
              value={message}
              onChange={setMessage}
            />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </motion.div>
    </div>
  );
}

export default Contact;
