# Elite TV Repair — Files-only GitHub upload

1. Extract this ZIP.
2. Upload ALL extracted files together to the GitHub repository root. Do not upload the ZIP itself.
3. Commit the files, then import that repository in Vercel (Next.js).
4. Set Vercel Root Directory to the repository root; Build Command: `pnpm build`.
5. Deploy. `setup-source.mjs` automatically restores app, components, images and other source folders before Next.js builds.

Keep `site-source.base64` and `setup-source.mjs` alongside `package.json`; both are required.
Set NEXT_PUBLIC_WEBSITE_URL to your final domain in Vercel environment variables and redeploy.
Phone/WhatsApp: +923025184681. Email: contact.zulqurnain@gmail.com.
Forms continue to WhatsApp unless an enquiry webhook is configured. Customers press Send in WhatsApp.
Local: install dependencies using pnpm, then run `pnpm dev`.

This contains the complete editable source as a compressed payload. Run `node setup-source.mjs` to unpack it for editing. Changes to unpacked files must be committed normally or repacked into the payload before reusing this distribution.
