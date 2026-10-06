# 79's Labs — Organization Operating Model

> **CURRENT ORGANIZATION SOURCE OF TRUTH**
>
> This document defines the current company organization, role taxonomy, decision rights, and runtime behavior.
> Historical organization designs are not used for current operations.

## 1. Organization at a Glance

```
CEO
├─ COO / Company HQ
├─ Product Ownership
│  └─ Saytence Product Owner — Product Mini CEO
├─ Execution Teams
│  ├─ Discovery
│  ├─ Product
│  ├─ Engineering
│  ├─ Growth
│  ├─ Data
│  └─ Revenue
└─ Governance
   ├─ Strategy & Portfolio
   ├─ Red Team
   └─ Security / Privacy / Platform Compliance
```

COO is also counted as one of the seven execution teams.

Current execution teams:
1. COO
2. Discovery
3. Product
4. Engineering
5. Growth
6. Data
7. Revenue

## 2. Role Taxonomy

### Team
Persistent functional home responsible for professional standards and capability.

### Owner
Single DRI accountable for an outcome.

Current key Owner:
- **Saytence Product Owner** — end-to-end Saytence product/business outcome

### Specialist
A professional role that owns domain judgment.

Examples:
- Product Designer
- Tech Lead
- User Research
- Product Analytics
- Pricing / Monetization specialist

### Capability
Reusable method or channel skill invoked when needed.

Capabilities are **not employees and not headcount**.

Examples:
- Product Discovery
- 0→1 New Product
- Existing Product Improvement
- PRD Definition
- Product Launch Review
- ASO
- SEO / Blog
- Threads / Instagram
- YouTube
- Creative Production
- Performance Marketing
- Lifecycle Growth
- Experimentation
- Release / Reliability

### Governance
Independent strategy, challenge, or risk gate.

- Strategy & Portfolio
- Red Team
- Security / Privacy / Platform Compliance

## 3. CEO

### Mission
Own final company accountability.

### Final authority
- company mission
- portfolio bets
- new app start / stop
- major positioning or business-model change
- major resource reallocation
- large paid spend
- major irreversible external / legal / privacy / security commitment

CEO opinion is not automatically treated as fact.
Specialists and Owners must challenge when evidence conflicts.

## 4. COO / Company HQ

### Identity
CEO strategic operating partner + Chief of Staff function + PMO / Program Management function + Company Operating System Owner.

No separate Chief of Staff or PMO agent at current company scale.

### Owns
- CEO intent → operating agenda
- business-question framing
- selecting the right teams
- cross-team dependencies and blockers
- Sprint / Command operating cadence
- escalation quality
- decision / task / dashboard synchronization
- company operating rules
- protecting CEO attention

### Does not own
- Product roadmap inside an app
- UX professional truth
- technical architecture truth
- analytical validity
- channel execution craft
- monetization craft

## 5. Product Owner — Product Mini CEO

Every active product has one accountable PO.

Current:
- **Saytence → Saytence Product Owner**

### PO mission
Own the product and business outcome end-to-end inside CEO / Portfolio guardrails.

### Owns
- target user and problem
- product strategy
- Product Goal / KPI
- product priority
- roadmap logic
- product-level business and monetization direction
- integrated cross-functional trade-offs
- launch
- post-launch outcome
- iterate / pivot / hold / stop recommendation

### PO does not replace specialists
- Product Design owns UX professional judgment
- Engineering owns technical truth and safety
- Data owns metric and experiment validity
- Growth owns channel/distribution expertise
- Revenue owns monetization/economic expertise
- Discovery owns research evidence
- QA / Release owns critical quality gates

### Product Silo
Core:
- Product Owner
- Product Designer / Interaction
- Tech Lead / Developer
- Product Analytics

Attach only when needed:
- Discovery
- Growth
- Revenue
- QA / Release
- UX Writing
- Accessibility / Localization
- Red Team

## 6. Discovery

### Mission
Reduce decision uncertainty with external and user evidence.

### Specialist areas
- Market & Category Research
- User Research & VOC
- Competitive Intelligence
- Trend & Signal Intelligence

### Owns
- research method
- source quality
- evidence interpretation inside research discipline
- contradiction / disconfirming evidence
- confidence and limits

### Does not own
- Product roadmap
- Growth strategy
- Portfolio decision

## 7. Product

### Mission
Turn selected opportunities and user problems into coherent Product Outcomes.

### Specialist areas
- Product Design / Interaction
- UX Writing / Content Design
- Accessibility / Localization

### Product lifecycle capabilities
- Product Strategy
- Product Discovery
- 0→1 New Product
- Existing Product Improvement
- Product Definition / PRD
- Launch & Outcome Review

These are capabilities invoked by the PO, not separate Owners.

### Product principle
```
Signal
→ Opportunity
→ Problem / Evidence
→ Discovery
→ Product Bet
→ Definition
→ Delivery
→ Launch
→ Outcome Review
```

No direct:
```
Idea → PRD → Build
```

## 8. Engineering

### Mission
Convert agreed Product Outcomes into the smallest safe technical change while preserving system integrity and delivery speed.

### Roles / capabilities
- Tech Lead
- Developer
- QA / Test Strategy
- Architecture & Technical Design
- Release & Reliability

### Owns
- source truth
- technical feasibility
- architecture safety
- implementation integrity
- risk-based verification
- release readiness
- production technical reliability

### Does not own
- Product priority
- metric interpretation
- business strategy

## 9. Growth

### Mission
Create repeatable qualified user growth by diagnosing funnel bottlenecks and selecting the right channel/product-growth action.

### Owner
Growth Lead owns the Growth problem and experiment portfolio.

### Specialist capabilities
- ASO / Store Conversion
- SEO / Blog
- Social & Community — Threads / Instagram
- YouTube
- Creative Production
- Performance Marketing
- Lifecycle / Retention Growth

These are capabilities, not mandatory permanent headcount.

### Boundary
Growth owns:
- acquisition
- channel strategy
- distribution
- growth hypothesis
- channel execution

PO owns:
- core product value
- product promise truth
- Product change decisions

Data owns:
- measurement validity
- attribution
- experiment result validity

## 10. Data

### Mission
Make company claims measurable, falsifiable, and decision-grade.

### Specialist areas
- Product Analytics
- Marketing Analytics & Attribution
- Experimentation & Measurement

### Owns professional truth for
- metric definition
- denominator / sample / time window
- instrumentation validity
- attribution limitations
- experiment validity
- what the data can and cannot conclude

Data does not own Product or Growth strategy.

## 11. Revenue

### Mission
Build sustainable monetization without destroying product value, activation, retention, or trust.

### Specialist areas
- Pricing & Packaging
- Ads Monetization
- Subscription & Unit Economics

### Decision boundary
Revenue owns monetization/economic expertise.
PO owns integrated product/business monetization choice inside guardrails.
CEO owns major business-model changes.

## 12. Governance

### Strategy & Portfolio
CEO governance capability.

Owns analysis for:
- where to invest
- new app Explore
- scale / hold / pivot / stop
- cross-product opportunity cost
- resource allocation

Not a daily execution team.

### Red Team
Independent challenge capability.

Can challenge:
- Product
- Growth
- Revenue
- Strategy
- Data interpretation

No execution authority.
May surface material unresolved dissent to CEO.

### Security / Privacy / Platform Compliance
Risk-triggered governance gate.

Invoke when materially involving:
- authentication/accounts
- sensitive/personal/health data
- minors
- location/camera/microphone/photos/contacts
- third-party analytics/ad SDKs
- payments/subscriptions
- AI data processing
- data sharing
- store/platform policy

## 13. Decision Rights

| Decision | DRI / Final owner |
|---|---|
| Company Mission / Portfolio | CEO |
| New app Explore / Start / Stop | CEO + Strategy |
| Product strategy inside an app | Product Owner |
| Product priority / roadmap | Product Owner |
| UX professional judgment | Product Designer |
| Technical design / architecture | Tech Lead |
| Metric / experiment validity | Data |
| Growth channel strategy | Growth Lead |
| Pricing / monetization expertise | Revenue |
| Release technical readiness | Engineering / QA / Release |
| Company Sprint / dependency coordination | COO |
| Security / Privacy / Platform risk | Governance Gate |

One material decision has **one DRI**.

## 14. Runtime

```
CEO / Input
→ COO restores current state
→ Business Question
→ Identify DRI
→ Select relevant Team(s)
→ Load Team Operating Skill
→ Select only needed Specialist / Capability
→ Independent evidence / judgment
→ Conflict / Trade-off
→ DRI Decision
→ Execution
→ Measurement
→ Review / Learning
→ Dashboard synchronization
```

Never invoke all teams automatically.

## 15. Current Source of Truth

### Organization
This document + Notion Current Organization / Team Operating System.

### Current execution state
`data/hq-data.json`

### Product implementation
Live product repository / main branch.

### Durable Team Skills
Notion Operating Skills.

## 16. Current Notion Links

- Current Organization: https://app.notion.com/p/3ec5b7c4aa308167aa3fdd7c23cd3555
- Governance: https://app.notion.com/p/3f15b7c4aa3081e0909ae66494fe97c7
- Team Operating System: https://app.notion.com/p/3f15b7c4aa308129ad5af191a1e5d970
- Organization Operating Model v2: https://app.notion.com/p/3f15b7c4aa30819f8c74ea916e14c15d

## 17. Historical Organization Designs

Historical and superseded organization drafts are not used for operations.

Notion Archive:
- Organization Design History

Dashboard historical Decisions remain for traceability but may be marked `SUPERSEDED`.

## 18. Maintenance Rule

Change this document only when:
- Team structure changes
- Owner / Specialist / Capability / Governance taxonomy changes
- decision rights change
- a product gains/loses a PO
- a governance gate changes materially

Do not update it for normal Sprint / Task / Metric changes.
