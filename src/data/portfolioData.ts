import { OrdaPillar, Project, Skill } from '../types'

export const PERSONAL_INFO = {
	name: 'Mustafo Toxirjanov',
	role: 'Frontend Developer & Tech Entrepreneur',
	leadershipTitle: 'Founder & Lead Manager of ORDA',
	location: 'Urgench, Uzbekistan / Available for Global Ventures',
	email: 'toxirjanovmustafo@gmail.com',
	telegram: 'https://t.me/toxirjanoovv',
	github: 'https://github.com/Mustafotoxirjanov6-cyber',
	ordaUrl: 'https://orda-sigma.vercel.app/',
	headline:
		'Architecting High-Impact SaaS & Leading the Next Generation of Tech Builders',
	shortBio:
		'Frontend Developer and Founder of ORDA developer ecosystem and startup studio. Specializing in engineered-for-scale web architectures, operational automation, and mentoring ambitious software engineers.',
	missionStatement:
		'Transforming complex business friction into resilient software systems while fostering an elite culture of execution, precision, and continuous growth.',
}

export const CORE_SKILLS: Skill[] = [
	{
		name: 'HTML5',
		category: 'core',
		proficiency: 80,
		highlight: true,
		description:
			'Semantic markup, accessibility (a11y), modern web standards, SEO-first architecture.',
	},
	{
		name: 'CSS3',
		category: 'core',
		proficiency: 70,
		highlight: true,
		description:
			'Advanced responsive layouts, CSS Grid, Flexbox, custom design systems, CSS variables.',
	},
	{
		name: 'Tailwind CSS',
		category: 'frontend',
		proficiency: 50,
		highlight: true,
		description:
			'Utility-first styling, bespoke tokens, responsive breakpoints, dark-mode theming.',
	},
	{
		name: 'JavaScript (ES6+)',
		category: 'core',
		proficiency: 40,
		highlight: true,
		description:
			'Asynchronous event loops, DOM manipulation, functional paradigms, modern APIs.',
	},
	{
		name: 'TypeScript',
		category: 'core',
		proficiency: 40,
		highlight: true,
		description:
			'Strict typing, interface contracts, generics, enhanced developer DX and maintainability.',
	},
	{
		name: 'React',
		category: 'frontend',
		proficiency: 30,
		highlight: true,
		description:
			'Component architecture, custom hooks, state lifecycle, dynamic routing, VDOM tuning.',
	},
	{
		name: 'Python',
		category: 'backend',
		proficiency: 20,
		highlight: false,
		description:
			'Scripting, backend logic, data processing, automation pipelines, algorithmic foundations.',
	},
]

export const AUXILIARY_STACK = [
	{ name: 'Node.js & Express', category: 'Backend Architecture' },
	{ name: 'PostgreSQL', category: 'Relational Database' },
	{ name: 'RESTful API Engineering', category: 'API Protocol' },
	{ name: 'Git & GitHub Collaboration', category: 'Version Control' },
	{ name: 'Framer Motion', category: 'Interactive Animation' },
	{ name: 'SMS Gateways (Eskiz / PlayMobile)', category: 'Integrations' },
	{ name: 'Automated PDF Engine (jsPDF/PDFKit)', category: 'Reporting' },
	{ name: 'Linux / Vercel Deployments', category: 'DevOps & Hosting' },
]

export const ORDA_PILLARS: OrdaPillar[] = [
	{
		title: 'Startup Studio & Venture Incubation',
		badge: 'Ventures',
		description:
			'Validating real-world pain points, architecting high-velocity MVPs, and deploying resilient SaaS platforms tailored for local and regional markets.',
		highlights: [
			'Rapid prototype-to-production lifecycle',
			'Direct integration with retail & service SMEs',
			'Operational and financial software automation',
		],
	},
	{
		title: 'Developer Academy & Mentorship',
		badge: 'Ecosystem',
		description:
			'Cultivating disciplined, production-ready engineers through rigorous peer-code reviews, real client sprints, and modern Frontend workflows.',
		highlights: [
			'Hands-on immersion with production codebases',
			'Mentorship on software architecture and clean code',
			'Continuous skill progression and talent placement',
		],
	},
	{
		title: 'Enterprise Management Systems',
		badge: 'Solutions',
		description:
			'Creating internal CRMs, non-editable auditing suites, and real-time attendance platforms to eliminate operational chaos in modern organizations.',
		highlights: [
			'Role-based access control (RBAC) and auditability',
			'Automated payroll and attendance telemetry',
			'Zero-data-loss relational storage standards',
		],
	},
]

export const PROJECTS: Project[] = [
	{
		id: 'sartaroshlar',
		title: 'Sartaroshlar.uz',
		subtitle: 'Multi-Role Barbershop Booking & Automated CRM SaaS',
		category: 'SaaS Ecosystem / Startup',
		description:
			'A comprehensive multi-role barbershop management ecosystem featuring online appointment scheduling, barber queue orchestration, financial revenue tracking, and an automated 20–30 day SMS customer retention engine.',
		status: 'Active SaaS',
		featured: true,
		techStack: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Node.js',
			'Express',
			'PostgreSQL',
			'SMS Gateway API',
		],
		metrics: [
			{ label: 'Retention Cycle', value: '20–30 Day Automated SMS' },
			{ label: 'Architecture', value: 'Multi-Tenant RBAC' },
			{ label: 'Platform Roles', value: 'Client, Barber, Owner, Admin' },
		],
		architectureDetails: [
			'Designed a multi-tier role-based access model: Client self-service portal, Master/Barber calendar dashboard, and Salon Owner financial analytics.',
			'Engineered an intelligent retention cron service calculating average haircut recurrence (20-30 days) and dispatching personalized SMS reminder triggers.',
			'Built a conflict-free appointment time-slot reservation engine preventing double bookings across multiple working chairs.',
			'Delivered revenue breakdown charts, tips calculations, and real-time daily cash-drawer reconciliations.',
		],
		// liveUrl: '.',
	},

	{
		id: 'angsa',
		title: 'Angsa (Onlayn Qarz Daftar)',
		subtitle: 'Digital Credit Ledger for Retail Business Operations',
		category: 'Fintech / Retail Operations',
		description:
			'A mission-critical digital debt and credit ledger replacing error-prone paper notebooks ("qarz daftar") for local retail merchants, offering verified debt logging, customer balance tracking, and automated repayment reminders.',
		status: 'Live Operations',
		featured: true,
		techStack: [
			'Node.js',
			'Express',
			'PostgreSQL',
			'Tailwind CSS',
			'REST API',
			'JWT Auth',
		],
		metrics: [
			{ label: 'Data Integrity', value: 'ACID Compliant PostgreSQL' },
			{ label: 'Operational Impact', value: 'Replaced Physical Debt Books' },
			{ label: 'Transaction Speed', value: '< 80ms Response Time' },
		],
		architectureDetails: [
			'Constructed robust relational schemas with PostgreSQL foreign keys and immutable transaction audit ledgers to prevent dispute discrepancy.',
			'Built fast, mobile-optimized merchant interfaces permitting shopkeepers to log transactions within 3 taps during active store rushes.',
			'Integrated customer balance history summaries and payment installment tracking with running reconciliation.',
			'Designed an automated SMS statement dispatcher notifying debtors of balances with payment timeline reminders.',
		],
		// liveUrl: 'https://orda-sigma.vercel.app/',
	},
	{
		id: 'nazorat',
		title: 'Nazorat',
		subtitle: 'Automated Attendance & Non-Editable Audit Reporting System',
		category: 'Workforce Telemetry',
		description:
			'High-assurance employee and student tracking system equipped with QR verification and an automated non-editable PDF report generation pipeline designed for strict executive auditing.',
		status: 'Enterprise Ready',
		featured: true,
		techStack: [
			'React',
			'TypeScript',
			'Node.js',
			'PDFKit Engine',
			'PostgreSQL',
			'Tailwind CSS',
		],
		metrics: [
			{ label: 'Audit Security', value: 'Cryptographically Sealed PDF' },
			{ label: 'Report Generation', value: 'Automated Daily / Monthly' },
			{ label: 'Zero Tampering', value: 'Strict Checksum Verification' },
		],
		architectureDetails: [
			'Developed a server-side PDF generation pipeline that renders non-editable, standardized audit documents complete with timestamps and signature hashes.',
			'Implemented automated scheduled reporting dispatching daily executive attendance summaries directly to managers.',
			'Created granular student and employee status categories (Present, Late with Reason, Excused, Absent) with automated penalty logic.',
			'Optimized query pipelines to process thousands of monthly check-in logs into concise tabular data sheets.',
		],
		liveUrl: 'https://orda-sigma.vercel.app/',
	},
]
