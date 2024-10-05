import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

import transporter from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  const emailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verify Your Email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationCode
    ),
    category: "Email Verification",
  };
  await transporter.sendMail(emailOptions);
};

export const sendPasswordResetRequestEmail = async (email, resetURL) => {
  const emailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    category: "Password Reset",
  };
  await transporter.sendMail(emailOptions);
};

export const sendPasswordResetSuccessfulEmail = async (email) => {
  const emailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    category: "Password Reset",
  };
  await transporter.sendMail(emailOptions);
};
