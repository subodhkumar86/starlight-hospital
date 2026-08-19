# Starlight Hospital Website & CMS

A responsive React/Vite hospital website for Starlight Hospital, with an integrated administrative CMS.

## Run locally

```bash
npm install
npm run dev
```

Create a deployment build with:

```bash
npm run build
```

## CMS access

Use **CMS Admin Portal** in the website header and enter the demo access key: `admin123`.

The CMS supports:

- Creating, editing, deleting, publishing and drafting news articles
- Viewing, filtering, updating and deleting appointment requests; CSV export and printable confirmation slips
- Viewing, replying to, archiving and deleting enquiries
- Maintaining the doctor roster
- Light/dark visual modes and mobile-friendly CMS navigation

All demo data is persisted in the browser's local storage, so it remains available after a refresh on the same browser/device. For a public production launch, replace the front-end demo login and local storage with a secure server-side authentication and database service.
