Healthy Hectare Platform
Public Transition Infrastructure — Phase I Pilot

Overview

Healthy Hectare is a public-facing, regulatory-grade transition platform supporting the reduction of highly hazardous pesticide use through verified participation, evidence-based practice, and institutional governance.

The platform is designed as transition infrastructure, not a marketing site, startup prototype, or NGO landing page.

It is intended to operate as a:

public accountability mechanism
verification interface
evidence registry
transition monitoring system
for farms, funders, researchers, and regulators.

Platform Status

Current phase: Phase I Pilot
Deployment: Public demo environment
Scope: Governance, verification design, participation pathways

Phase I is focused on:

institutional framing
eligibility and verification architecture
governance structures
participation workflows
regulatory alignment

No public data ingestion, certification, or recognition is active in this phase.

Production Deployment

The platform is publicly accessible at:

https://healthy-hectare-demo.netlify.app

This environment is deployed via a continuous delivery pipeline and reflects the current state of the main branch.

Architecture
Stack

Frontend: React (Vite)
Routing: React Router
Styling: Tailwind CSS v4
Icons: lucide-react
Hosting: Netlify
Source Control: GitHub

Application Structure

The platform is implemented as a single-page application with real routing.

src/
 ├── components/
 │   ├── layout/
 │   └── sections/
 ├── pages/
 ├── App.jsx        ← global layout shell
 └── main.jsx

Global Layout Law

App.jsx is the only global layout shell.

It owns:

navigation
routing
scroll management
footer

Pages render content only and behave as institutional documents.
This enforces consistency, auditability, and presentation integrity.

Governance & Design

The platform is governed by formal design and operating standards.

Key governance documents:

DESIGN.md
 — system architecture and operating model

SECURITY.md
 — security posture and responsible disclosure

GOVERNANCE.md
 — programme governance and oversight framework

These documents define:

architecture laws
change control
verification philosophy
participation governance
security posture
institutional accountability
Deployment Model (CI/CD)

The platform is deployed via an automated CI/CD pipeline:

GitHub is the source of truth
The main branch represents production
Netlify auto-builds and deploys on every push
No manual uploads or unmanaged servers

This ensures:

full traceability
audit readiness
reproducible builds
zero configuration drift

Local Development
Requirements

Node.js (LTS recommended)
npm
Install
npm install
Run locally
npm run dev

Local dev server will start (typically on http://localhost:5173).

Change Control

All changes follow strict governance discipline:

Edit locally
Test with npm run dev
Commit with descriptive message
Push to main
Verify Netlify deployment

No speculative refactors.
No undocumented changes.
No production edits outside version control.

Participation & Use

This platform is currently operating in Phase I Pilot mode.

Participation pathways exist for:

Farms
Funders
Researchers

All participation is subject to:

eligibility screening
governance review
verification design
scope boundaries

Participation does not imply endorsement or certification.

Security

The platform is hosted on Netlify and benefits from:

HTTPS by default
CDN delivery
DDoS protection
edge security

Security posture and responsible disclosure are defined in SECURITY.md

Platform Intent

Healthy Hectare is designed to operate as:

transition infrastructure
regulatory interface
evidence platform
governance system
public accountability mechanism

It is not a campaign site.
It is not a pitch deck.
It is infrastructure.

Licence

Licence will be defined as the platform transitions from pilot to institutional operation.

End of Document