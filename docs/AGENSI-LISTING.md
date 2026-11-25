# Agensi marketplace packaging checklist

According to Joeri's emails, Agensi accepts a ZIP under 50 MB containing a root-level SKILL.md with YAML frontmatter containing a name and description, plus workflow JSON and optional scripts/references.

## Suggested deliverable
- SKILL.md at ZIP root
- Automations/AI Customer Enquiry - Review First V3.json
- README.md, AI-BRAIN.md
- docs/SECURITY.md, docs/TEST-PLAN.md
- A versioned, sanitized demonstration without real credentials

## Status
V3 is a candidate only. Verify actual Agensi validation and live n8n tests first. Do not include production OAuth IDs, Google Sheet IDs, webhooks, or customer records.

## Licensing and payment
Joeri described a non-exclusive license, no listing fee, 70% creator revenue, and Stripe or Zoneless USDC/Solana payouts; confirm the current written terms and exact sale fee/refund/tax provisions. Do not assume selling a skill changes the repository's licensing status.
