# Vijender-Portfolio

## This is for portfolio to showcase my skills and work I have done so far in my career.

### Steps to run the code:

1. Clone the Code
2. Node version should be greater than 20
3. use the commands:
   a. npm i
   b. npm run build // optional
   c. npm run dev

--------------
### The Required .env Data (create a `.env.local` file):
-------
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=<your Google Apps Script Web App URL ending with /exec>
NEXT_PUBLIC_WORDS_LIMIT=5

--------------
### Contact form -> Google Sheet setup
-------
1. Create a Google Sheet (any name).
2. Open Extensions > Apps Script, delete the default code, and paste the
   contents of `google-apps-script/Code.gs`. Save.
3. Click Deploy > New deployment > type: Web app.
   - Execute as: Me
   - Who has access: Anyone
   Click Deploy and authorise the permissions when asked.
4. Copy the Web app URL (ends with `/exec`) into `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
5. Restart `npm run dev`. Submit the form - a "Contact Requests" tab is created
   automatically with every submission.

### GitHub Pages deployment
Repo > Settings > Secrets and variables > Actions:
- Secret: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
- Variable (optional): `NEXT_PUBLIC_WORDS_LIMIT`

> If you edit `Code.gs` later, use Deploy > Manage deployments > Edit >
> New version so the same URL picks up the change.

--------------
### Optional: mail route (kept, currently NOT used)
-------
`app/api/send-mail/route.ts` is kept in the project but nothing calls it.
It only works when the app runs on a Node server (not on GitHub Pages static export).
If you ever use it, add these to `.env.local`:

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<your_mail_id>@gmail.com
SMTP_PASS=<your 16 digit app password>
WORDS_LIMIT=5
