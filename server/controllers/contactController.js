import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({ name, email, subject, message });

    try {
      await sendEmail(
        process.env.EMAIL_USER,
        `Portfolio Contact: ${subject}`,
        `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p style="color:#888;">Sent from your portfolio contact form</p>
        `
      );
    } catch (emailError) {
      console.error("Contact email notification failed:", emailError.message);
    }

    res.status(201).json({
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort("-createdAt");
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createContact, getContacts };
