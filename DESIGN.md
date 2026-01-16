Healthy Hectare Platform

System Design & Governance Document

1. System Overview

Healthy Hectare is a public-facing, regulatory-grade transition platform supporting the reduction of highly hazardous pesticide use through verified participation, evidence-based practice, and institutional governance.

The platform is designed as transition infrastructure, not a marketing site, startup prototype, or NGO landing page. It is intended to operate as a credible public system suitable for review by regulators, funders, researchers, and institutional partners.

The system prioritises:

auditability
traceability
verification-first participation
institutional tone
public accountability

2. Design Principles

The platform follows five core principles:

2.1 Infrastructure, Not Marketing

The site is treated as a public service platform, not a promotional asset.
There are no:

fake metrics
unverifiable claims
placeholder content
“coming soon” language

All claims must be bounded, reviewable, and defensible.

2.2 Governance First

Every feature, page, and workflow must support:

institutional review
regulatory scrutiny
evidence-based verification
audit readiness
Tone is formal, scientific, and governance-forward.

2.3 Traceability by Default

Every change to the platform:

is version controlled
has a commit history
is automatically deployed from source
can be rolled back
Production is always traceable to source code.

2.4 Verification Before Scale

The platform is explicitly operating under a Phase I Pilot model.

All participation is:

eligibility screened
reviewed against verification criteria
bounded by scope and governance frameworks
Scale is only introduced after validation.

2.5 Minimalism with Intent

No abstraction unless it removes duplication.
No UI changes unless they improve credibility.
No features without a governance rationale.

3. Architecture
3.1 Stack

Frontend: Vite + React
Routing: React Router
Styling: Tailwind CSS v4
Icons: lucide-react
Hosting: Netlify
Source Control: GitHub

3.2 Application Structure

The application is a single-page React application with real routing.

src/
 ├── components/
 │   ├── layout/
 │   └── sections/
 ├── pages/
 ├── App.jsx        ← global shell
 └── main.jsx

3.3 Global Layout Law

App.jsx is the only global layout shell.

It owns:

Navbar
Footer
Router
Scroll management

Pages:

render content only
do not import layout components
behave like institutional documents

This prevents layout drift and enforces presentation consistency.

3.4 Routing Model

All navigation is real routing:

/
/programme
/research
/participate
/participate/farm
/participate/funder
/participate/research

There are no fake buttons or placeholder flows.

4. Deployment & CI/CD
4.1 Source of Truth

GitHub is the canonical source of truth.
The main branch represents production.

4.2 Deployment Pipeline

Netlify is connected directly to the GitHub repository.

Every push to main triggers:

Automated build
Automated deployment
Global CDN publish

Production URL:

https://healthy-hectare-demo.netlify.app

This provides:

continuous deployment
zero manual uploads
guaranteed production sync

4.3 Local Development

Local development is performed via:

npm install
npm run dev

All changes are tested locally before commit.

5. Change Control
5.1 Commit Discipline

Every meaningful change must be committed.
Commit messages follow governance-grade standards:

Examples:

B8: remove demo language from intake pages
fix: wire hero CTA to participation hub
B8: remove unverifiable numeric claims from programme context

5.2 Change Workflow

Edit file locally
Test with npm run dev
Commit change
Push to main
Verify Netlify deployment

5.3 Error Handling Protocol

If a failure occurs:

Capture full terminal output
Diagnose from error context only
Apply smallest possible fix
Re-test locally
Commit only once clean

No speculative refactors.
No unverified changes.

6. Content Governance
6.1 Non-Negotiables

The platform enforces the following rules:

No fake metrics
No unverifiable claims
No placeholder content
No “coming soon” language
No marketing tone
No fictional standards
No invented regulatory references

6.2 Phase I Framing

All public pages operate under explicit Phase I Pilot framing:

bounded scope
verification-first participation
governance-led review
eligibility screening
institutional oversight

7. Security Posture

The platform is deployed on Netlify with:

HTTPS by default
global CDN
DDoS protection
edge security

Advanced security (WAF, rate limiting, firewall rules) will be enabled when the platform moves into open public participation and data collection.

8. Future Architecture (Planned)

Phase II and III will introduce:

data ingestion pipelines
verification workflows
audit trails
evidence registries
API interfaces
institutional dashboards
regulatory reporting layers

These will be documented in future design extensions.

9. Platform Intent

Healthy Hectare is designed to operate as:

transition infrastructure
regulatory interface
evidence platform
governance system
public accountability mechanism

It is not a campaign site.
It is not an advocacy blog.
It is not a startup pitch.

It is infrastructure.

10. Ownership

This platform is operated under strict governance discipline.
All changes are traceable.
All claims are bounded.
All participation is verified.

End of Document
