# Email Setup Instructions

To enable the contact form email functionality, you need to set up environment variables for Gmail authentication.

## Steps to Configure Email:

### 1. Create Environment Variables File
Create a file named `.env.local` in the project root directory with the following content:

```
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_APP_PASSWORD=your_app_specific_password
```

### 2. Gmail Setup
To use Gmail for sending emails, you need to:

1. **Enable 2-Factor Authentication**: 
   - Go to your Google Account settings
   - Enable 2-factor authentication if not already enabled

2. **Generate App Password**:
   - Go to Google Account > Security > 2-Step Verification > App passwords
   - Select "Mail" and your device
   - Google will generate a 16-character app password
   - Use this password (not your regular Gmail password) for `EMAIL_APP_PASSWORD`

3. **Update Environment Variables**:
   ```
   EMAIL_USER=dhariwalr01@gmail.com
   EMAIL_APP_PASSWORD=your_16_character_app_password
   ```

### 3. Alternative Email Providers
If you prefer to use a different email service, update the transporter configuration in `/app/api/contact/route.js`:

#### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});
```

#### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## Security Notes:
- Never commit `.env.local` to version control
- The `.env.local` file is already ignored by default in Next.js
- Use app-specific passwords, not your main account password
- Keep your credentials secure and rotate them regularly

## Testing:
After setting up the environment variables:
1. Restart your development server: `npm run dev`
2. Test the contact form on your website
3. Check that emails are being sent to dhariwalr01@gmail.com

## Troubleshooting:
- Make sure your `.env.local` file is in the project root directory
- Verify that 2-factor authentication is enabled on your Google account
- Ensure you're using the app password, not your regular Gmail password
- Check the server console for any error messages
