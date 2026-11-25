# Customer Enquiry Webhook Demo

A static HTML, CSS, and JavaScript test page for your n8n customer enquiry workflow.

## Configure

Open `script.js` and replace:

```js
const WEBHOOK_URL = "PASTE_YOUR_N8N_PRODUCTION_WEBHOOK_URL_HERE";
```

Use your published production URL containing `/webhook/`, not `/webhook-test/`.

## JSON payload

```json
{
  "customer_name": "Alex Morgan",
  "customer_email": "alex.morgan@example.com",
  "subject": "Question about your service pricing",
  "message": "I would like to know more about your service packages.",
  "source": "website",
  "submitted_at": "2026-07-19T00:00:00.000Z"
}
```

## Add to your existing GitHub Pages portfolio

Create a subfolder such as:

```text
/customer-enquiry-demo/
  index.html
  styles.css
  script.js
```

Commit and push. For a user-site repository, the URL will normally be:

```text
https://YOUR-USERNAME.github.io/customer-enquiry-demo/
```

For a project repository, it will normally be:

```text
https://YOUR-USERNAME.github.io/REPOSITORY/customer-enquiry-demo/
```

## Notes

- GitHub Pages supports this because it is fully static.
- Your n8n workflow must be published and active.
- If the browser shows a CORS error, allow your GitHub Pages origin in the n8n or proxy configuration.
- Never put private API keys in frontend JavaScript because visitors can read the source.
- For production, add server-side validation, spam protection, rate limiting, and an approval step rather than sending AI replies automatically.

## Agent skill and review-first migration candidate

This repository also includes a prospective Agensi agent skill in `SKILL.md`, an `AI-BRAIN.md` developer guide, and `docs/SECURITY.md`, `docs/TEST-PLAN.md`, and `docs/AGENSI-LISTING.md`. The original workflow remains unchanged. A sanitized migration candidate is `Automations/AI Customer Enquiry - Review First V3.json`.

**Status:** These are development/review artifacts only. The V3 candidate has not been imported or end-to-end tested in n8n and is not production ready. The existing static page remains a demo; do not expose it to live customer data without a secured backend gateway and proper privacy controls. The Gmail review step is not a real draft creation action.
