# Innovative Office Co — Official Website

Public multipage business website and installable Progressive Web App for Innovative Office Co (IOC). Maintained by WebDevPro.

## Website

- Pages: Home, About, Services, Industries, Gallery, FAQ, Contact
- Includes responsive navigation, service gallery, animations, location map, PWA prompt, and WhatsApp enquiry links.
- The website is publicly accessible, with no visitor login, registration, password, or access-code gate.
- Built with React 19, TanStack Start, Tailwind CSS 4, and Vite/Nitro. No site-builder runtime or account is required.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

Connect the `silvermatambo-lgtm/innovativeofficesolutions` repository to a Vercel project using the `main` branch. Vercel detects the `tanstack-start` framework from `vercel.json` and uses `npm run build`. No private environment variables are needed for the public site as provided. Enable automatic production deployments from `main`.

If viewers are shown a Vercel login or password prompt, switch off Deployment Protection for **Production** in the Vercel project settings; no application-level sign-in is implemented.

## Business contact

- Company: Innovative Office Co
- Email: sales@innovativeoffice.co.za
- Phone: 078 207 2929
- WhatsApp: 078 207 2949
- Website: https://www.innovativeoffice.co.za
- Credit: https://www.webdevpro.co.za

Form enquiries open WhatsApp with a prefilled message and require the visitor to send it from WhatsApp; submissions are not silently stored on a server.
