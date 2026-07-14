# EmailJS Setup Guide - Fix Authentication Error

## Problem
You're getting the error: **"Gmail_API: Request had insufficient authentication scopes"**

This means your Gmail service in EmailJS doesn't have the proper permissions to send emails.

---

## Solution: Fix EmailJS Gmail Service

### Step 1: Reconnect Gmail Service
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Services**
3. Find your "Gmail personal service" 
4. Click **"Reconnect"** or **"Edit"**

### Step 2: Grant Proper Permissions
When the Google popup appears:
- ✅ **Select your Gmail account** (ananserbesa@gmail.com)
- ✅ **Allow ALL requested permissions**, especially:
  - "Send email on your behalf"
  - "View and manage your mail"
  - "Compose and send messages"

⚠️ **Important:** Don't skip any permission checkboxes!

### Step 3: Update Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Find template: `template_wftg2cj`
3. Make sure it has these variables:
   ```
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

### Step 4: Test the Service
1. Click **"Send Test Email"** in the service settings
2. Fill in test values
3. Check your inbox (ananserbesa@gmail.com)
4. If you receive the test email → ✅ Service is working!

---

## Alternative: Use SMTP Service (Recommended for Production)

If Gmail keeps having issues, use SMTP instead:

### Option A: Gmail SMTP
1. In EmailJS, create a new **SMTP service**
2. Use these settings:
   - **SMTP Server:** smtp.gmail.com
   - **Port:** 587
   - **Username:** ananserbesa@gmail.com
   - **Password:** Create an [App Password](https://myaccount.google.com/apppasswords)
     - Go to Google Account → Security → 2-Step Verification → App Passwords
     - Generate a password for "Mail"
     - Use that 16-character password

### Option B: Use Free SMTP Services
Consider these alternatives:
- **SendGrid** (100 emails/day free)
- **Mailgun** (100 emails/day free)  
- **Elastic Email** (100 emails/day free)

---

## Update Your Code

The contact form code has already been updated to use the new method:

```javascript
// Old method (was using)
emailjs.sendForm(...)

// New method (now using)
emailjs.send(serviceId, templateId, {
  from_name: formState.name,
  from_email: formState.email,
  message: formState.message,
  to_name: "Anan Serbesa"
}, userId)
```

---

## Testing Contact Form

1. Open your portfolio: http://localhost:3000
2. Scroll to **Contact** section
3. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click **"Send Message"**
5. Check console for errors
6. Check your email inbox

---

## Current Configuration

Your EmailJS credentials:
- **Service ID:** `service_c4f3c67`
- **Template ID:** `template_wftg2cj`
- **Public Key:** `s1aoHosd6fDt2Wldn`

---

## Need Help?

If issues persist:
1. Check EmailJS [Documentation](https://www.emailjs.com/docs/)
2. Review [Troubleshooting Guide](https://www.emailjs.com/docs/troubleshooting/)
3. Consider using an SMTP service instead of Gmail API

---

## What Was Changed

### 1. Updated ContactForm.js
- Changed from `emailjs.sendForm()` to `emailjs.send()`
- Added explicit template parameters
- Better error handling with contact email fallback

### 2. Added CV Download Button to Navbar
- Premium gradient button with icon
- Downloads `Anan_Serbesa_CV.pdf`
- Responsive design (text hidden on mobile)
- Smooth hover animations

### 3. Fixed All CV Downloads
- ContactForm resume button
- Command Palette download action
- AI Assistant download button
- New navbar CV button

---

✅ **All changes are complete!** Just fix the EmailJS Gmail permissions and your contact form will work perfectly.
