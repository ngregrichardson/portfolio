import React, { useRef, useState } from "react";
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
  Schema,
} from "rsuite";
import { motion } from "framer-motion";

const feedbackType = [
  { label: "Feedback", value: "Feedback" },
  { label: "Question", value: "Question" },
  { label: "Bug Report", value: "Bug Report" },
  { label: "Request", value: "Request" },
];

const contactModel = Schema.Model({
  email: Schema.Types.StringType()
    .isEmail("Invalid email")
    .isRequired("This field is required"),
  name: Schema.Types.StringType().isRequired("This field is required"),
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [message, setMessage] = useState("");
  const contactFormRef = useRef();

  let handleSubmit = () => {
    if (contactFormRef.current.check()) {
      fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contactReason:
            contactReason.trim() === "" ? "Feedback" : contactReason.trim(),
          message,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setName("");
          setEmail("");
          setContactReason("");
          setMessage("");
          Alert.success(res.message);
        })
        .catch((e) => Alert.error(e.message));
    }
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
        <Form ref={contactFormRef} model={contactModel}>
          <FormGroup>
            <ControlLabel>Name *</ControlLabel>
            <FormControl name="name" value={name} onChange={setName} />
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email *</ControlLabel>
            <FormControl
              name="email"
              type="email"
              value={email}
              onChange={setEmail}
            />
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
