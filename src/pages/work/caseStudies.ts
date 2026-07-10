// Case-study content. Each project is a structured object rendered by the
// shared <CaseStudy> page template (src/pages/work/CaseStudy.tsx).

export interface CaseStudyDecision {
	// the decision framed as a question, e.g. "Why Remix over Next.js?"
	q: string;
	// the reasoning / tradeoff
	a: string;
}

export interface CaseStudyMetric {
	label: string;
	value: string;
}

export interface CaseStudyData {
	slug: string;
	title: string;
	tagline: string;
	role?: string;
	timeframe?: string;
	tags: string[];
	liveUrl?: string;
	repoUrl?: string;
	overview: string;
	problem: string;
	approach: string[];
	decisions: CaseStudyDecision[];
	outcome: string;
	metrics?: CaseStudyMetric[];
}

export const caseStudies: Record<string, CaseStudyData> = {
	"the-event-community": {
		slug: "the-event-community",
		title: "The Event Community",
		tagline:
			"One platform to search, book, and pay for event vendors and venues.",
		role: "Lead frontend developer · 3-person team",
		tags: ["Remix", "TypeScript", "Firebase"],
		liveUrl: "https://theeventcommunity.com/",
		overview:
			"A full-stack marketplace where event planners discover vendors and venues, read reviews, and handle booking and payment in one place. Built in Remix with a Firebase backend by a three-person team, where I led the front end — from the search experience to the vendor and venue pages.",
		problem:
			"Planning an event meant scraping separate review sites — Yelp, Thumbtack, and the rest — to vet vendors and venues, then handling booking and payment somewhere else entirely. The Event Community set out to collapse that scattered workflow into a single platform for search, booking, and payments.",
		approach: [
			"The platform unifies the planner workflow — discovery, reviews, booking, and payments — behind one data model, instead of stitching together third-party review and booking sites.",
			"I led the front end: the dynamic search experience and the vendor and venue landing pages, which pull server-stored content and media on each request so listings render fresh without client-side loading waterfalls.",
			"We used a Firebase backend for auth, data, and image storage to keep the stack lean and fast to ship.",
		],
		decisions: [
			{
				q: "Why Remix?",
				a: "We chose Remix because every core page — search results, vendor and venue landing pages — is highly dynamic and pulls server-stored content and media. Remix's loaders fetch that data on the server per request, so pages arrive fully rendered with fresh content and no client-side waterfalls or spinners. That server-first model also keeps public vendor and venue pages crawlable and fast to first paint (good for SEO and sharing), while nested routes and native form actions keep the search and booking flows simple without a heavy client-side state layer.",
			},
			{
				q: "Why Firebase for the backend?",
				a: "Firebase let us move fast: prebuilt auth flows, managed data, and efficient image storage out of the box, with usage-based pricing that kept database costs low for a marketplace still finding its audience.",
			},
		],
		outcome:
			"Launched as a single destination where planners search, book, and pay for vendors and venues — replacing the old scatter across separate review and booking sites.",
		metrics: [
			{ label: "Person team", value: "3" },
			{ label: "Conception to launch", value: "3 months" },
			{ label: "Trusted businesses", value: "270+" },
		],
	},

	jemld: {
		slug: "jemld",
		title: "JemLD",
		tagline:
			"A self-serve portfolio + inquiry site for an award-winning lighting designer.",
		role: "Freelance developer",
		tags: ["Next.js", "TypeScript", "Firebase", "Vercel"],
		liveUrl: "https://jemld.com/",
		repoUrl: "https://github.com/rschm007/jemld",
		overview:
			"A portfolio and inquiry site for award-winning lighting designer Jacqueline Malenke, built on Next.js with a Firebase backend and a custom CMS — so she can swap high-resolution galleries, PDFs, and case-study pages in and out herself, without a developer in the loop.",
		problem:
			"Jacqueline needed a site versatile enough to constantly swap high-resolution photos, PDFs, and case-study pages in and out — and she needed to manage all of it herself, without touching code. It also had to stay easy for search engines to index and cheap to host.",
		approach: [
			"Built a custom CMS on top of Firebase so the client can add, edit, and reorder galleries, documents, and case-study pages on the fly from an admin area — no developer required.",
			"Used Next.js image optimization and server rendering to keep the image-heavy pages fast to load and crawlable for search.",
			"Stored high-resolution photos and PDFs in Firebase Storage and content in Firestore, with auth gating the client's admin — a serverless setup that keeps hosting costs low.",
		],
		decisions: [
			{
				q: "Why Next.js?",
				a: "The site is image-heavy and needs to be found in search. Next.js renders pages on the server so they stay crawlable, and its built-in image optimization keeps the high-resolution galleries fast. Content is pulled from Firestore rather than hardcoded, so the client's edits show up on the site without a redeploy — and it all deploys cheaply on Vercel.",
			},
			{
				q: "Why Firebase?",
				a: "Firebase gave me a managed, serverless backend with almost no ops overhead: Firestore for content, Cloud Storage for the high-resolution photos and PDFs, and built-in auth to gate the client's admin. Its usage-based pricing keeps hosting costs minimal for a personal portfolio's traffic.",
			},
		],
		outcome:
			"A versatile site with a complete CMS: I can make structural changes on the fly, and — more importantly — the client manages all her own content, swapping galleries, documents, and case studies in and out without ever needing a developer.",
	},

	panasonic: {
		slug: "panasonic",
		title: "Panasonic Avionics — App Manager & Converix",
		tagline:
			"Replacing hand-carried USB updates with over-the-air software delivery for aircraft IFE systems.",
		role: "MTS III",
		timeframe: "2023 – 2026",
		tags: ["Next.js", "React", "TypeScript", "Kubernetes", "AWS", "CI/CD"],
		liveUrl: "https://www.panasonic.aero/converix",
		overview:
			"App Manager and Converix let airlines push software to their in-flight entertainment (IFE) systems over the air, with Kubernetes-based management and live telemetry from the apps and services running in each aircraft's onboard cluster. I led the platform's migration off Backstage.io to a purpose-built Next.js architecture, built shared tooling adopted across 5+ teams, doubled release velocity, and took automated test coverage from 0 to 86%. I also built an in-app documentation publishing pipeline so the technical writing team could author and measure their articles natively in the product.",
		problem:
			"Updating software on an aircraft's IFE system traditionally meant a technician physically walking a USB drive out to the plane and plugging it into the onboard server terminal — slow, manual, and impossible to run at fleet scale. App Manager and Converix set out to replace that with over-the-air software syncing, plus modern Kubernetes-based cluster management and telemetry from every app and service running onboard.",
		approach: [
			"Delivered the platform in two phases: App Manager (phase 1) brought over-the-air deployment to fleet IFE systems; Converix (phase 2) extended it into a broader cloud-based onboard computing platform.",
			"App Manager was first built on Backstage.io, but as our internal systems and onboard Kubernetes clusters grew, it outgrew what Backstage could support. I led the migration to a purpose-built Next.js architecture designed around our own cluster-management, telemetry, and OTA-deployment needs.",
			"Built an in-app documentation publishing pipeline: the technical writing team could draft, edit, and publish articles — and get reader usage stats back — all hosted natively in the Next.js app instead of a separate docs tool.",
			"That custom architecture was later adopted as the framework for Converix, and the shared tooling behind it spread across 5+ teams.",
		],
		decisions: [
			{
				q: "Why move off Backstage.io?",
				a: "Backstage got us moving fast early on, but as the internal systems and onboard clusters grew, we hit the limits of its plugin model and opinionated structure. A purpose-built architecture let us model our own cluster management, telemetry, and over-the-air deployment flows directly instead of working around a framework that wasn't built for them.",
			},
			{
				q: "Why invest in shared tooling and test coverage?",
				a: "With 5+ teams building on the same platform, consistency mattered more than any single feature. Standardizing the tooling and taking automated test coverage from 0 to 86% is what let us double release velocity without breaking downstream teams.",
			},
			{
				q: "Why host documentation inside the app?",
				a: "A separate docs tool meant writers worked blind and readers had to context-switch away from the product. Publishing natively in the Next.js app let the technical writing team own the full draft → edit → publish loop, and — just as importantly — see which articles readers actually used, feedback a standalone docs site never gave us.",
			},
		],
		outcome:
			"The purpose-built architecture shipped as App Manager's over-the-air deployment for airline IFE systems and became the framework for Converix, Panasonic's cloud-based onboard computing platform now flying on Saudia's 787 fleet. Its shared tooling was adopted by 5+ teams, release velocity doubled, and automated test coverage went from 0 to 86%.",
		metrics: [
			{ label: "Release velocity", value: "2×" },
			{ label: "Test coverage", value: "0 → 86%" },
			{ label: "Teams adopting shared tooling", value: "5+" },
		],
	},

	essentium: {
		slug: "essentium",
		title: "Essentium — Cloud Print Management",
		tagline:
			"Remote control, fleet-wide telemetry, and 3D print visualization for industrial 3D printers.",
		role: "Front-end lead",
		timeframe: "2021 – 2023",
		tags: ["Next.js", "React", "TypeScript", "Three.js", "gRPC"],
		overview:
			"Essentium's high-speed industrial 3D printers shipped with on-device tablet UIs, but operators could only manage prints while standing at the machine. I was front-end lead on a Next.js platform that brought print control, organization-wide telemetry, and 3D print visualization to the cloud — so teams could monitor and run their whole printer fleet from anywhere.",
		problem:
			"Essentium's printers had integrated tablets for controlling and managing prints, but no way to do any of it away from the machine. Customers needed to manage prints across their whole organization from the cloud, pull fleet-wide telemetry — print results and failure rates — from an admin dashboard, and preview how a model would sit in the print space before committing a job.",
		approach: [
			"Built a Next.js dashboard that connects to each printer's on-device software over a gRPC API to stream live print data and trigger print jobs remotely.",
			"Aggregated organization-wide telemetry — print results and failure rates — into a management admin dashboard, so teams could monitor and run their entire printer fleet from the cloud.",
			"Built a visualization module in Three.js that renders uploaded STL files, letting operators see how a model sits in the print space before starting a print.",
		],
		decisions: [
			{
				q: "Why gRPC to talk to the printers?",
				a: "The dashboard needed live, low-latency data from machines on the factory floor and the ability to trigger jobs remotely. gRPC's streaming and strongly-typed contracts fit that real-time, machine-to-service communication far better than polling a REST endpoint — the UI could react to print state as it changed.",
			},
			{
				q: "Why Three.js for the visualization module?",
				a: "Operators needed to see how a model would sit in the print space before running it. Three.js let me render the uploaded STL geometry directly in the browser — no plugin, no separate app — so the preview lived right alongside the controls in the same dashboard.",
			},
		],
		outcome:
			"Bringing remote control, fleet telemetry, and in-browser visualization together lifted print-success rates by 27% — and the platform was part of the product traction behind Essentium's acquisition by Nexa3D.",
		metrics: [
			{ label: "Print-success rate", value: "+27%" },
			{ label: "by Nexa3D", value: "Acquired" },
		],
	},
};
