# Hermes Email Skill

hermesemailskill.com

Coordinate fast email decisions without skipping preflight.

A launch-room skill for agents that summarize status, check message readiness, and separate speed from unsafe production action.

## Install

```bash
npx skills add hermesemailskill
```

## Operating Data

- **15m**: launch-room summary window
- **8**: preflight checks
- **3**: escalation lanes

## Dispatch board

1. Request arrives
2. Context packet
3. Preflight scan
4. Launch note
5. Owner approval

## Scenarios

### Preflight checklist

Confirm links, segment, sender, suppression, timing, and approval owner.

### Launch-room summary

Turn noisy chat updates into one crisp status note.

### Transactional copy review

Check clarity, fallback states, and recipient expectations.

## Operating Proof

- **Best for**: Fast-moving teams shipping timed or transactional email
- **Primary artifact**: Launch-ready brief with blockers and owner decisions
- **Stop condition**: Missing approval, missing segment proof, or risky send timing

## Agent Resources

- Markdown index: /index.md
- Skill discovery JSON: /.well-known/skills/index.json
- Raw SKILL.md: /skills/hermesemailskill/SKILL.md
- Articles: /articles/
