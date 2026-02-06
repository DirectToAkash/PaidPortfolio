# Email Setup Guide

To enable the email contact form to "work live" and send messages to `directtoakash@gmail.com`, you need to set up your email credentials.

1.  **Generate an App Password**:
    -   Go to your [Google Account](https://myaccount.google.com/).
    -   Navigate to **Security** > **2-Step Verification**.
    -   Scroll to the bottom and select **App passwords**.
    -   Create a new app password (name it "Portfolio Website").
    -   Copy the 16-character password generated.

2.  **Set Environment Variables**:
    -   If you are running locally, create a `.env` file in the root directory.
    -   Add the following lines (replace with your details):
        ```env
        EMAIL_USER=directtoakash@gmail.com
        EMAIL_PASS=your-16-char-app-password
        ```

3.  **Restart the Server**:
    -   Restart your backend server for the changes to take effect.
