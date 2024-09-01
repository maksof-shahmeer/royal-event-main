import * as fs from 'fs';
import nodemailer from 'nodemailer'
let transport = nodemailer.createTransport({
  from: 'hi260032@gmail.com',
  service: 'gmail',
  auth: {
    user: 'hi260032@gmail.com',
    pass: 'lyiuxxhkmgnlwabl',
  },
});
export const sendEmail = async (email, text) => {
  const mailOptions = {
    from: email,
    to: 'hi260032@gmail.com',
    subject: `Royal Events`,
    text
  };
  return transport.sendMail(mailOptions);
};
