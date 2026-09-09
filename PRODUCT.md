# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, in priority order:

1. **Full-time hiring managers / engineering leaders** who land here from Robert's resume or LinkedIn/GitHub, evaluating whether to interview or hire him for senior full-stack / applied-AI roles.
2. **Freelance/agency prospects** (small businesses, past client referrals) evaluating whether to hire Robert Schmahl Design for a web build.
3. **Peers/recruiters flexing dev skills** — anyone assessing the site itself as a demonstration of craft (design sense + engineering quality).

## Product Purpose

robertschmahl.com is Robert's personal portfolio and calling card. It exists to get him hired (full-time) or booked (freelance), and to serve as a live demonstration of his own frontend craft. Success is a visitor forming an accurate, current impression of his skill level and reaching out (interview request, project inquiry) or clicking through to GitHub/LinkedIn/resume.

## Positioning

Robert is a designer-turned-engineer: graphic design and communications background, then a full-stack bootcamp, now doing senior full-stack + applied-AI work (LLM integrations, multi-agent pipelines, Text2SQL/RAG, conversational data querying) at a product company (Seek). That combination — production AI/full-stack engineering credibility *and* a trained design eye — is the thing a purely technical portfolio or a purely design portfolio can't truthfully claim. Tagline: "I turn 'it worked in dev' into production systems."

## Operating Context

- Visitors typically arrive from a resume link, LinkedIn/GitHub profile, or referral, often on mobile.
- Case studies (Work page) are the primary evidence: The Event Community, JemLD, Panasonic Avionics (App Manager & Converix), Essentium (Cloud Print Management).
- A Services page pitches freelance offerings: full-stack web apps, AI-powered features, e-commerce/content sites (Shopify/WordPress), and design-first execution, plus a 4-step process (Scope → Build → Launch → Maintenance).
- Contact form uses EmailJS (react-hook-form).
- Site nav: main (hero), about, work (case studies), services, contact.

## Capabilities and Constraints

- Stack: React 19 + TypeScript, Vite 8, react-router-dom 7, Sass, framer-motion for animation, Font Awesome icons, react-hook-form + EmailJS for the contact form.
- Deployed on Vercel (`vercel.json` present); homepage is robertschmahl.com.
- Skills shown on About page (`src/pages/about/config.ts`): frontend (React, Next.js, TypeScript, Three.js, Storybook, SCSS, Tailwind), AI (LLM APIs, multi-agent pipelines, RAG/Text2SQL, Langfuse, Snowflake), backend (Python, REST APIs, AWS, CI/CD, Datadog, testing), tools (Figma, Adobe CS, Git, Postman, VS Code).
- Freelance/WordPress/Shopify/PHP work is real but secondary — it must not read as the headline story; the current full-time Applied AI role leads.

## Brand Commitments

- Distinctive campfire / night-forest visual aesthetic is an established, deliberate identity — treat it as incumbent design authority to preserve and extend, not a placeholder to replace.
- Name: Robert Schmahl. Freelance brand: Robert Schmahl Design.
- Social links: GitHub (github.com/rschm007), LinkedIn (linkedin.com/in/robert-schmahl).

## Evidence on Hand

- Real case studies with details at `src/pages/work/caseStudies.ts`: The Event Community, JemLD, Panasonic Avionics — App Manager & Converix, Essentium — Cloud Print Management.
- A client testimonial quote (Cailin O'Connor) is present in the repo history/content.
- Resume is linked/available on the site.
- No further testimonials, metrics, press, or client logos exist beyond what's already in the repo — do not fabricate additional evidence.

## Product Principles

1. Lead with the current Senior Full-Stack & Applied AI story for employers; keep freelance/agency work as real but secondary.
2. Every content and design decision should serve, in priority order: full-time hiring managers, freelance prospects, then peers evaluating craft.
3. Preserve the campfire/night-forest aesthetic — it *is* the "flex dev skills" proof point, not decoration to be normalized away.
4. Only ever present real, current evidence (actual case studies, actual skills) — never invented metrics, clients, or claims.
5. Design-first execution is part of the credibility claim, so the site's own polish is itself evidence, not just its copy.

## Accessibility & Inclusion

WCAG 2.1 AA is a binding target for this site.
