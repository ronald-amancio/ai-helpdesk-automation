# Security and privacy requirements

This is a **demo and migration candidate**, not a hardened public deployment.

- Put a trusted API gateway between public forms and the n8n webhook; authenticate requests, rate-limit, enforce size limits, configure CORS and bot defense.
- Require informed consent and a clear privacy notice. Minimize personally identifiable information and restrict access to logs and Sheets.
- Redact secrets and payment details before sending messages to Groq or any external AI service.
- Protect against spreadsheet formula injection, including user text starting with `=`, `+`, `-`, or `@`; verify connector behavior.
- Configure workflow execution retention and data deletion; make sure raw sensitive message bodies are not retained indefinitely.
- Require human review for sensitive enquiries. Drafts are suggestions only and must not be dispatched automatically.
- Treat AI output as untrusted. Validate enums and types; prevent prompt injection from affecting workflow controls.
- Implement durable idempotency/deduplication, retries, centralized audit trails, alerts, and incident response before production use.
- Confirm source terms before redistributing any third-party scripts.
