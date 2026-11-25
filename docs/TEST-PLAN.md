# Acceptance test plan

Tests below are **not yet executed on a real n8n instance**; no production readiness is claimed.

| Test | Expected outcome |
| --- | --- |
| Import V3 on intended n8n version | Every node recognized; all connections valid |
| Valid web enquiry with consent | Accepted and logged once; no automatic reply |
| Missing name, invalid email, short message, no consent | Reject without exposing internals |
| Automated Gmail sender | Filtered and never automatically replied to |
| Confidential enquiry | Human review required, not auto-sent |
| Low confidence and invalid LLM output | Manual review or clear failure |
| Wrong Google Sheets/Groq credential | Visible error and no false success |
| Prompt-injection message | Treated as text only; not obeyed |
| Duplicate request ID | Tracked/deduplicated (not yet implemented) |
| High-rate spam attempts | Blocked upstream (not yet implemented) |
| Customer data deletion request | Retention/deletion procedure works (not yet implemented) |

## Release gate
Do not describe this version as production-ready until the acceptance plan is executed, security controls are installed and signed off, and the exact release artifact is tested.
