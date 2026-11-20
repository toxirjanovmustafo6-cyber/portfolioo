export interface TranslationContent {
	nav: {
		about: string
		orda: string
		skills: string
		projects: string
		contact: string
		ordaEcosystem: string
		initiateContact: string
		themeToggleLight: string
		themeToggleDark: string
		founderAt: string
	}
	hero: {
		leadershipPill: string
		roleTitle: string
		fullName: string
		headline: string
		subRole: string
		bio: string
		badgeSaaS: string
		badgeRBAC: string
		badgeMentorship: string
		btnExplore: string
		btnOrda: string
		btnInquiry: string
		metricSystems: string
		metricSystemsLabel: string
		metricReliability: string
		metricReliabilityLabel: string
		metricOrdaRole: string
		metricOrdaLabel: string
		portraitStatus: string
		portraitSub: string
		portraitFallbackTitle: string
		portraitFallbackRole: string
		portraitFallbackDesc: string
		portraitSaaSLead: string
		portraitCity: string
		portraitCaption: string
	}
	orda: {
		badge: string
		titleMain: string
		titleHighlight: string
		titleRest: string
		description: string
		exploreBtn: string
		cardStatus: string
		cardManagedBy: string
		visionBadge: string
		visionTitle: string
		visionDesc: string
		bulletVenturesTitle: string
		bulletVenturesDesc: string
		bulletTalentTitle: string
		bulletTalentDesc: string
		bulletScaleTitle: string
		bulletScaleDesc: string
		portalBadge: string
		portalTitle: string
		portalDesc: string
		portalBtn: string
		divisionTitle: string
		divisionStatus: string
		pillars: {
			title: string
			badge: string
			description: string
			highlights: string[]
		}[]
	}
	skills: {
		badge: string
		title: string
		description: string
		dynamicNote: string
		benchmarkLabel: string
		levelLabel: string
		auxTitleBadge: string
		auxHeading: string
		auxTag: string
		integratedBadge: string
		items: {
			name: string
			category: string
			proficiency: number
			description: string
		}[]
	}
	projects: {
		badge: string
		title: string
		description: string
		clickNote: string
		caseStudyBtn: string
		livePlatformBtn: string
		items: {
			id: string
			title: string
			subtitle: string
			category: string
			status: string
			description: string
			metrics: { label: string; value: string }[]
			architectureDetails: string[]
			techStack: string[]
			liveUrl?: string
		}[]
		modal: {
			abstractTitle: string
			architectureTitle: string
			techStackTitle: string
			certifiedBadge: string
			launchBtn: string
			closeBtn: string
		}
	}
	contact: {
		badge: string
		title: string
		description: string
		emailTitle: string
		emailDesc: string
		primaryBadge: string
		copyBtn: string
		copiedBtn: string
		channelsTitle: string
		telegramTitle: string
		githubTitle: string
		ordaTitle: string
		assuranceText: string
		formTitle: string
		formDesc: string
		labelName: string
		labelEmail: string
		labelSubject: string
		labelMessage: string
		placeholderName: string
		placeholderEmail: string
		placeholderSubject: string
		placeholderMessage: string
		btnSubmit: string
		btnSubmitting: string
		btnSuccess: string
	}
	footer: {
		founderRole: string
		bio: string
		statusActive: string
		navTitle: string
		socialsTitle: string
		backToTop: string
		rightsReserved: string
		techStackStamp: string
	}
}

export const TRANSLATIONS: Record<'uz' | 'en' | 'ru', TranslationContent> = {
	uz: {
		nav: {
			about: 'Profil',
			orda: 'ORDA Rahbariyati',
			skills: 'Ko‘nikmalar',
			projects: 'Loyihalar',
			contact: 'Aloqa',
			ordaEcosystem: 'ORDA Ekotizimi',
			initiateContact: 'Bog‘lanish',
			themeToggleLight: 'Kunduzgi rejim',
			themeToggleDark: 'Tungi rejim',
			founderAt: 'Asoschisi @',
		},
		hero: {
			leadershipPill: 'ORDA Asoschisi & Boshqaruvchi Rahbari',
			roleTitle: 'Frontend Dasturchi & Texnologik Tadbirkor',
			fullName: 'Mustafo Toxirjanov',
			headline: 'Mustafo',
			subRole: 'Frontend Dasturchi & Texnologik Tadbirkor',
			bio: 'ORDA dasturchilar ekotizimi va startup studiyasi asoschisi. Haqiqiy biznes muammolarini hal qiluvchi SaaS mahsulotlarini ishlab chiqish, jarayonlarni avtomatlashtirish hamda yangi avlod dasturchilariga ustozlik qilishga ixtisoslashgan.',
			badgeSaaS: 'Ishlab chiqarishdagi SaaS',
			badgeRBAC: 'Ko‘p rolli RBAC arxitekturasi',
			badgeMentorship: 'ORDA Dasturchilar Akademiyasi',
			btnExplore: 'Loyihalarni ko‘rish',
			btnOrda: 'ORDA Ekotizimi',
			btnInquiry: 'To‘g‘ridan-to‘g‘ri murojaat →',
			metricSystems: '4+',
			metricSystemsLabel: 'Ishga tushirilgan tizimlar',
			metricReliability: '100%',
			metricReliabilityLabel: 'Ishonchlilik kafolati',
			metricOrdaRole: 'ORDA',
			metricOrdaLabel: 'Asoschi & Boshqaruvchi',
			portraitStatus: 'Faol Rahbarlik',
			portraitSub: 'ORDA Startap Studiyasi & Lab',
			portraitFallbackTitle: 'Mustafo Toxirjanov',
			portraitFallbackRole: 'Asoschi & Boshqaruvchi Rahbar',
			portraitFallbackDesc: 'ORDA dasturchilar ekotizimi va startap studiyasi',
			portraitSaaSLead: 'SaaS tizimlar arxitektori',
			portraitCity: 'Toshkent, O‘zbekiston',
			portraitCaption: 'ORDA STUDIYASI RAHBARI',
		},
		orda: {
			badge: 'ASOSCHI VA BOSHQARUVCHI DIREKTOR TAQDIMOTI',
			titleMain: 'Boshqaruvida',
			titleHighlight: 'ORDA',
			titleRest:
				': Keng masshtabli dasturlar yaratish va yangi avlod dasturchilarini tayyorlash',
			description:
				'Mustafo Toxirjanov rahbarligida ORDA gibrid texnologik ekotizim sifatida faoliyat yuritadi: mahalliy biznes sohalari uchun zamonaviy dasturiy yechimlarni ishga tushiruvchi startup studiya hamda yuqori darajadagi Frontend muhandislarni tayyorlovchi akademiyani o‘zida birlashtiradi.',
			exploreBtn: 'Platformani ochish',
			cardStatus: 'FAOL & ISHLAMOQDA',
			cardManagedBy: 'MUSTAFO BOSHQARUVIDA',
			visionBadge: 'EKOTIZIM MISSIYASI VA MAQSADI',
			visionTitle:
				'Biznes va dasturchilar uchun yuqori darajadagi IT yechimlarni joriy etish',
			visionDesc:
				'ORDA mahalliy biznesning raqamlashtirish ehtiyojlari va dasturchilarning amaliy tajribasi o‘rtasidagi ko‘prikdir. Sartaroshxonalar uchun onlayn navbat, raqamli qarz daftari va avtomatlashtirilgan davomat tizimlari orqali bizneslarga aniq tijoriy foyda keltiradi.',
			bulletVenturesTitle: 'Startup Studiya',
			bulletVenturesDesc: 'MVP yaratish, ishga tushirish va monetizatsiya',
			bulletTalentTitle: 'Murabbiylik Laboratoriyasi',
			bulletTalentDesc: 'Kunlik kod tahlili va arxitektura mashg‘ulotlari',
			bulletScaleTitle: 'Korporativ CRM tizimlar',
			bulletScaleDesc: 'Xatolarsiz audit jurnali va RBAC huquqlar',
			portalBadge: 'RASMIY PORTAL',
			portalTitle: 'ORDA Raqamli Qarorgohi',
			portalDesc:
				'Faol loyihalar, ekotizim hujjatlari va studiya tashabbuslarini ko‘ring.',
			portalBtn: 'ORDA EKOTIZIMIGA O‘TISH',
			divisionTitle: 'ORDA Asosiy Yo‘nalishi',
			divisionStatus: 'Faol',
			pillars: [
				{
					title: 'Startap Studiya va Loyihalarni Inkubatsiya qilish',
					badge: 'Loyihalar',
					description:
						'Haqiqiy bozor muammolarini aniqlash, yuqori tezlikda MVP yaratish va mahalliy hamda xalqaro bozorlar uchun barqaror SaaS mahsulotlarini joriy etish.',
					highlights: [
						'Prototipdan tayyor mahsulotgacha tezkor sikl',
						'Chakana savdo va xizmat ko‘rsatish korxonalari bilan integratsiya',
						'Operatsion va moliyaviy jarayonlarni avtomatlashtirish',
					],
				},
				{
					title: 'Dasturchilar Akademiyasi va Mentorlik',
					badge: 'Ekotizim',
					description:
						'Talabchan kod ko‘riklari (code-review), real loyihalar va zamonaviy Frontend amaliyotlar orqali intizomli, bozorga tayyor dasturchilarni yetishtirish.',
					highlights: [
						'Ishlab chiqarishdagi real kod bazasida amaliyot',
						'Toza kod va dasturiy arxitektura bo‘yicha ustozlik',
						'Doimiy bilim oshirish va kasbiy yo‘naltirish',
					],
				},
				{
					title: 'Korporativ Boshqaruv va CRM Tizimlari',
					badge: 'Yechimlar',
					description:
						'Tashkilotlardagi operatsion tartibsizlikni yo‘qotuvchi ichki CRM, o‘zgartirib bo‘lmaydigan audit va real vaqtdagi davomat tizimlarini ishlab chiqish.',
					highlights: [
						'Rollar bo‘yicha kirish huquqlari (RBAC) va xavfsizlik',
						'Davomat va ish samaradorligini avtomatik hisoblash',
						'Ma’lumotlar yo‘qolishiga qarshi relyatsion standartlar',
					],
				},
			],
		},
		skills: {
			badge: 'TEXNIK STACK VA RIVOJLANISH SUR’ATI',
			title: 'Muhandislik Salohiyati va Mahorati',
			description:
				'Frontend arxitekturasi, backend tizimlari va ma’lumotlar bazalarini boshqarish bo‘yicha aniq ko‘rsatkichlar.',
			dynamicNote:
				'Doimiy rivojlanishda — ko‘nikmalar darajasi har kuni faol ravishda oshib bormoqda.',
			benchmarkLabel: 'MAHORAT MEZONI',
			levelLabel: 'DARAJASI',
			auxTitleBadge: 'BACKEND, BAZA VA OPERATSION EKOTIZIM',
			auxHeading: 'Qo‘shimcha Ishlab Chiqarish Texnologiyalari',
			auxTag: 'ORDA loyihalarida faol qo‘llaniladi',
			integratedBadge: 'Integratsiyalangan',
			items: [
				{
					name: 'HTML5',
					category: 'core',
					proficiency: 80,
					description:
						'Semantik teglash, qulaylik (a11y), zamonaviy veb standartlar, SEO-ga mos struktura.',
				},
				{
					name: 'CSS3',
					category: 'core',
					proficiency: 70,
					description:
						'Kengaytirilgan moslashuvchan dizayn, CSS Grid, Flexbox, maxsus dizayn tizimlari.',
				},
				{
					name: 'Tailwind CSS',
					category: 'frontend',
					proficiency: 50,
					description:
						'Utility-first uslub, moslashuvchan breakpointlar, qorong‘i va yorug‘ rejimlar.',
				},
				{
					name: 'JavaScript (ES6+)',
					category: 'core',
					proficiency: 40,
					description:
						'Asinxron hodisalar, DOM bilan ishlash, funksional dasturlash, zamonaviy API-lar.',
				},
				{
					name: 'TypeScript',
					category: 'core',
					proficiency: 40,
					description:
						'Qat’iy tipleash, interfeyslar, generiklar, kod ishonchliligi va qo‘llab-quvvatlash qulayligi.',
				},
				{
					name: 'React',
					category: 'frontend',
					proficiency: 30,
					description:
						'Komponentlar arxitekturasi, maxsus hooklar, holat boshqaruvi, dinamik marshrutlash.',
				},
				{
					name: 'Python',
					category: 'backend',
					proficiency: 20,
					description:
						'Skript yozish, ma’lumotlarni qayta ishlash, avtomatlashtirish, algoritmik asoslar.',
				},
			],
		},
		projects: {
			badge: 'AMALIY LOYIHALAR VA STARTAPLAR',
			title: 'Ishga Tushirilgan Tizimlar va SaaS Mahsulotlar',
			description:
				'Chakana savdo, xizmat ko‘rsatish va korporativ boshqaruv sohalarida amalda ishlayotgan dasturiy platformalar.',
			clickNote: 'Arxitektura tahlilini ko‘rish uchun kartaga bosing',
			caseStudyBtn: 'Arxitektura va Tahlil',
			livePlatformBtn: 'Loyihani ko‘rish',
			items: [
				{
					id: 'sartaroshlar',
					title: 'Sartaroshlar.uz',
					subtitle:
						'Ko‘p rolli navbat, CRM va 20–30 kunlik SMS eslatma SaaS tizimi',
					category: 'SaaS Ekotizimi / Startap',
					status: 'Faol SaaS',
					description:
						'Sartaroshxona va go‘zallik salonlari uchun mijozlar navbati, sartaroshlar jadvali, tushum hisob-kitobi va mijozlarni qaytaruvchi 20–30 kunlik avtomatlashtirilgan SMS xabarnoma tizimi.',
					metrics: [
						{ label: 'Qaytish davri', value: '20–30 kunlik avtomatik SMS' },
						{ label: 'Arxitektura', value: 'Ko‘p ijarachili RBAC' },
						{ label: 'Rollar', value: 'Mijoz, Usta, Salon Egasi, Admin' },
					],
					architectureDetails: [
						'Ko‘p darajali rollar arxitekturasi: Mijozlar uchun onlayn bronlash portali, Usta shaxsiy jadvali, Salon egasi moliyaviy hisobot paneli.',
						'Soch olishning o‘rtacha muddatini (20-30 kun) avtomatik hisoblovchi va moslashtirilgan SMS eslatmalar yuboruvchi intellektual xizmat.',
						'Bir nechta ish o‘rinlari bo‘yicha band bo‘lgan vaqtlarni to‘qnashuvsiz (conflict-free) band qilish mexanizmi.',
						'Kunlik tushum tahlili, choypoyalar hisobi va kassa kirim-chiqimini real vaqtda solishtirish imkoniyati.',
					],
					techStack: [
						'React',
						'TypeScript',
						'Tailwind CSS',
						'Node.js',
						'Express',
						'PostgreSQL',
						'SMS Gateway API',
					],
					// liveUrl: 'https://orda-sigma.vercel.app/',
				},

				{
					id: 'angsa',
					title: 'Angsa (Onlayn Qarz Daftar)',
					subtitle:
						'Chakana savdo korxonalari uchun raqamli qarz va hisob-kitob daftari',
					category: 'Fintech / Savdo Operatsiyalari',
					status: 'Amaliy Foydalanishda',
					description:
						'Chakana savdo do‘konlaridagi eski qog‘oz qarz daftarlarini to‘liq almashtiruvchi, xaridorlar qarz balansi, to‘lovlar tarixi va SMS eslatmalarni ta’minlovchi tizim.',
					metrics: [
						{
							label: 'Ma’lumot xavfsizligi',
							value: 'ACID PostgreSQL kafolati',
						},
						{ label: 'Amaliy samara', value: 'Qog‘oz daftarlar o‘rnini bosdi' },
						{ label: 'Tezlik', value: '< 80ms server javob vaqti' },
					],
					architectureDetails: [
						'Hisob-kitobdagi nizolarni bartaraf etuvchi, o‘zgartirib bo‘lmas tranzaksiyalar jurnali bilan ta’minlangan PostgreSQL bazasi.',
						'Savdo qizg‘in paytida do‘kondorlarga 3 ta bosishda yangi qarz yozish imkonini beruvchi qulay mobil interfeys.',
						'Xaridorlarning to‘lov tarixi va qarzdorlik qoldig‘ini avtomatik hisoblash tizimi.',
						'Qarzdorlarga belgilangan muddat yetib kelganda avtomatik SMS hisob-faktura yuborish mexanizmi.',
					],
					techStack: [
						'Node.js',
						'Express',
						'PostgreSQL',
						'Tailwind CSS',
						'REST API',
						'JWT Auth',
					],
					// liveUrl: 'https://orda-sigma.vercel.app/',
				},
				{
					id: 'nazorat',
					title: 'Nazorat',
					subtitle:
						'Avtomatlashtirilgan davomat va o‘zgartirib bo‘lmaydigan PDF hisobot tizimi',
					category: 'Xodimlar Telemetriyasi',
					status: 'Korporativ Tayyor',
					description:
						'QR-kod va biometrik tekshiruvga ega, qat’iy rahbarlik auditi uchun o‘zgartirib bo‘lmaydigan rasmiy PDF hisobotlarni avtomatik tuzuvchi tizim.',
					metrics: [
						{ label: 'Audit xavfsizligi', value: 'Kriptografik muhrli PDF' },
						{ label: 'Hisobot tuzish', value: 'Avtomatik Kunlik / Oylik' },
						{ label: 'Soxtalashtirish', value: '0% — Qat’iy nazorat' },
					],
					architectureDetails: [
						'Hujjatlarning haqiqiyligini tasdiqlovchi vaqt tamg‘asi va xesh-muhrga ega rasmiy PDF hisobotlarni yaratuvchi server generatori.',
						'Har kuni ish kuni yakunida rahbarlarga tayyor davomat hisobotlarini avtomatik jo‘natuvchi rejalashtiruvchi cron servisi.',
						'Xodim va talabalar holatini (Keldi, Kechikdi, Sababli, Sababsiz) avtomatik ajratish algoritmi.',
						'Minglab oylik yozuvlarni bir necha soniyada aniq jadvallarga aylantiruvchi optimallashtirilgan so‘rovlar.',
					],
					techStack: [
						'React',
						'TypeScript',
						'Node.js',
						'PDFKit Engine',
						'PostgreSQL',
						'Tailwind CSS',
					],
					// liveUrl: 'https://orda-sigma.vercel.app/',
				},
			],
			modal: {
				abstractTitle: 'Loyiha Haqida Qisqacha',
				architectureTitle: 'Muhandislik va Arxitektura Yechimlari',
				techStackTitle: 'Qo‘llanilgan Texnologiyalar',
				certifiedBadge: 'ORDA Ekotizimida Sertifikatlangan',
				launchBtn: 'Jonli Tizimni Ochish',
				closeBtn: 'Yopish',
			},
		},
		contact: {
			badge: 'RASMIY MULOQOT',
			title: 'To‘g‘ridan-to‘g‘ri Bog‘lanish',
			description:
				'Startap hamkorliklari, IT tizimlar konsultatsiyasi, dasturiy injiniring yoki ORDA ekotizimi bo‘yicha takliflar uchun ochiq.',
			emailTitle: 'To‘g‘ridan-to‘g‘ri Elektron Pochta',
			emailDesc: 'Hamkorlik shartnomalari, maslahat va IT buyurtmalar uchun.',
			primaryBadge: 'ASOSIY ALOQA',
			copyBtn: 'Nusxalash',
			copiedBtn: 'Nusxalandi!',
			channelsTitle: 'Rasmiy Aloqa Kanallari',
			telegramTitle: 'Telegram orqali to‘g‘ridan-to‘g‘ri',
			githubTitle: 'GitHub Omborlari',
			ordaTitle: 'ORDA Bosh Qarorgohi',
			assuranceText:
				'Muloqot maxfiyligi va tijoriy sirlar to‘liq kafolatlanadi.',
			formTitle: 'Rasmiy Xabar Yuborish',
			formDesc:
				'Loyiha talablarini to‘g‘ridan-to‘g‘ri Mustafo Toxirjanovga yuboring.',
			labelName: 'Ism va Familiyangiz',
			labelEmail: 'Ishchi Elektron Pochtangiz',
			labelSubject: 'Mavzu / Loyiha Yo‘nalishi',
			labelMessage: 'Xabar / Loyiha Tafsilotlari',
			placeholderName: 'Masalan: Alisher Navoiy',
			placeholderEmail: 'alisher@kompaniya.uz',
			placeholderSubject: 'Masalan: Korxona uchun CRM tizimi yaratish',
			placeholderMessage:
				'Loyiha maqsadi, muddatlari va talablari haqida ma’lumot bering...',
			btnSubmit: 'Xabarni Yuborish',
			btnSubmitting: 'Yuborilmoqda...',
			btnSuccess: 'Xabar muvaffaqiyatli qabul qilindi!',
		},
		footer: {
			founderRole: 'ORDA Asoschisi va Boshqaruvchi Rahbari',
			bio: 'Bizneslar uchun masshtablanuvchi dasturlar yaratish hamda ORDA studiyasida yangi avlod IT muhandislarini tarbiyalash.',
			statusActive: 'ORDA Studiya Operatsiyalari: Faol',
			navTitle: 'Bo‘limlar',
			socialsTitle: 'Ekotizim va Tarmoqlar',
			backToTop: 'Yuqoriga qaytish',
			rightsReserved: 'Barcha huquqlar himoyalangan.',
			techStackStamp:
				'React + TypeScript + Tailwind + Framer Motion yordamida yaratilgan',
		},
	},

	en: {
		nav: {
			about: 'About',
			orda: 'ORDA Leadership',
			skills: 'Skills & Mastery',
			projects: 'Featured Projects',
			contact: 'Contact',
			ordaEcosystem: 'ORDA Ecosystem',
			initiateContact: 'Initiate Contact',
			themeToggleLight: 'Light Mode',
			themeToggleDark: 'Dark Mode',
			founderAt: 'Founder @',
		},
		hero: {
			leadershipPill: 'Founder & Lead Manager @ ORDA',
			roleTitle: 'Frontend Developer & Tech Entrepreneur',
			fullName: 'Mustafo Toxirjanov',
			headline: 'Mustafo',
			subRole: 'Frontend Developer & Tech Entrepreneur',
			bio: 'Leading the ORDA developer ecosystem & startup studio, building production-grade SaaS platforms, automating high-friction retail operations, and mentoring the next cohort of modern software engineers.',
			badgeSaaS: 'Production SaaS',
			badgeRBAC: 'Multi-Role RBAC',
			badgeMentorship: 'ORDA Mentorship',
			btnExplore: 'Explore Projects',
			btnOrda: 'ORDA Ecosystem',
			btnInquiry: 'Direct Inquiry →',
			metricSystems: '4+',
			metricSystemsLabel: 'Shipped Systems',
			metricReliability: '100%',
			metricReliabilityLabel: 'Production Reliability',
			metricOrdaRole: 'ORDA',
			metricOrdaLabel: 'Founder & Director',
			portraitStatus: 'Active Leadership',
			portraitSub: 'ORDA Startup Studio & Lab',
			portraitFallbackTitle: 'Mustafo Toxirjanov',
			portraitFallbackRole: 'Founder & Lead Manager',
			portraitFallbackDesc: 'ORDA Developer Ecosystem & Startup Studio',
			portraitSaaSLead: 'SaaS Production Lead',
			portraitCity: 'Tashkent, Uzbekistan',
			portraitCaption: 'ORDA STUDIO LEADERSHIP',
		},
		orda: {
			badge: 'FOUNDER & MANAGING DIRECTOR SHOWCASE',
			titleMain: 'Leading',
			titleHighlight: 'ORDA',
			titleRest: ': Building High-Scale Software & Mentoring Future Engineers',
			description:
				'Under the leadership of Mustafo Toxirjanov, ORDA operates as a hybrid tech ecosystem — combining a disciplined startup incubator that deploys software solutions for local business sectors with a high-rigor developer studio training the next wave of Frontend talent.',
			exploreBtn: 'Explore Live Platform',
			cardStatus: 'ONLINE & ACTIVE',
			cardManagedBy: 'MANAGED BY MUSTAFO',
			visionBadge: 'Ecosystem Vision & Mission',
			visionTitle:
				'Democratizing High-Grade Software Engineering for Businesses and Developers',
			visionDesc:
				'ORDA bridges the gap between regional business digitization needs and hands-on developer training. By building real software for real clients—such as booking systems, credit ledgers, and automated attendance suites—ORDA delivers immediate commercial value while developing battle-tested developers.',
			bulletVenturesTitle: 'Startup Studio',
			bulletVenturesDesc: 'End-to-end MVP launch & monetization',
			bulletTalentTitle: 'Mentorship Lab',
			bulletTalentDesc: 'Daily code reviews & architecture drills',
			bulletScaleTitle: 'Enterprise CRMs',
			bulletScaleDesc: 'Zero-loss transaction logging & RBAC',
			portalBadge: 'Official Portal',
			portalTitle: 'ORDA Digital HQ',
			portalDesc:
				'Explore active ventures, ecosystem docs, and leadership initiatives.',
			portalBtn: 'VISIT ORDA ECOSYSTEM',
			divisionTitle: 'ORDA Core Division',
			divisionStatus: 'Active',
			pillars: [
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
			],
		},
		skills: {
			badge: 'TECHNICAL STACK & VELOCITY',
			title: 'Engineered Competency & Progression',
			description:
				'A transparent, metric-driven breakdown of technical proficiencies across core frontend architectures, systems engineering, and runtime environments.',
			dynamicNote:
				'Continuously evolving — skill mastery actively growing daily.',
			benchmarkLabel: 'PROFICIENCY BENCHMARK',
			levelLabel: 'LEVEL',
			auxTitleBadge: 'BACKEND, DATABASE & OPERATIONAL ECOSYSTEM',
			auxHeading: 'Complementary Production Technologies',
			auxTag: 'Actively Utilized Across ORDA Projects',
			integratedBadge: 'Integrated',
			items: [
				{
					name: 'HTML5',
					category: 'core',
					proficiency: 80,
					description:
						'Semantic markup, accessibility (a11y), modern web standards, SEO-first architecture.',
				},
				{
					name: 'CSS3',
					category: 'core',
					proficiency: 70,
					description:
						'Advanced responsive layouts, CSS Grid, Flexbox, custom design systems, CSS variables.',
				},
				{
					name: 'Tailwind CSS',
					category: 'frontend',
					proficiency: 50,
					description:
						'Utility-first styling, bespoke tokens, responsive breakpoints, dark-mode theming.',
				},
				{
					name: 'JavaScript (ES6+)',
					category: 'core',
					proficiency: 40,
					description:
						'Asynchronous event loops, DOM manipulation, functional paradigms, modern APIs.',
				},
				{
					name: 'TypeScript',
					category: 'core',
					proficiency: 40,
					description:
						'Strict typing, interface contracts, generics, enhanced developer DX and maintainability.',
				},
				{
					name: 'React',
					category: 'frontend',
					proficiency: 30,
					description:
						'Component architecture, custom hooks, state lifecycle, dynamic routing, VDOM tuning.',
				},
				{
					name: 'Python',
					category: 'backend',
					proficiency: 20,
					description:
						'Scripting, backend logic, data processing, automation pipelines, algorithmic foundations.',
				},
			],
		},
		projects: {
			badge: 'PRODUCTION PORTFOLIO & STARTUPS',
			title: 'Featured Systems & SaaS Ventures',
			description:
				'Real-world software systems deployed across local enterprise operations, customer retention workflows, digital ledgers, and attendance telemetry.',
			clickNote: 'Click any system for architectural case study',
			caseStudyBtn: 'Case Study & Architecture',
			livePlatformBtn: 'Open Live Platform',
			items: [
				{
					id: 'sartaroshlar',
					title: 'Sartaroshlar.uz',
					subtitle: 'Multi-Role Barbershop Booking & Automated CRM SaaS',
					category: 'SaaS Ecosystem / Startup',
					status: 'Active SaaS',
					description:
						'A comprehensive multi-role barbershop management ecosystem featuring online appointment scheduling, barber queue orchestration, financial revenue tracking, and an automated 20–30 day SMS customer retention engine.',
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
					techStack: [
						'React',
						'TypeScript',
						'Tailwind CSS',
						'Node.js',
						'Express',
						'PostgreSQL',
						'SMS Gateway API',
					],
					liveUrl: 'https://orda-sigma.vercel.app/',
				},

				{
					id: 'angsa',
					title: 'Angsa (Onlayn Qarz Daftar)',
					subtitle: 'Digital Credit Ledger for Retail Business Operations',
					category: 'Fintech / Retail Operations',
					status: 'Live Operations',
					description:
						'A mission-critical digital debt and credit ledger replacing error-prone paper notebooks ("qarz daftar") for local retail merchants, offering verified debt logging, customer balance tracking, and automated repayment reminders.',
					metrics: [
						{ label: 'Data Integrity', value: 'ACID Compliant PostgreSQL' },
						{
							label: 'Operational Impact',
							value: 'Replaced Physical Debt Books',
						},
						{ label: 'Transaction Speed', value: '< 80ms Response Time' },
					],
					architectureDetails: [
						'Constructed robust relational schemas with PostgreSQL foreign keys and immutable transaction audit ledgers to prevent dispute discrepancy.',
						'Built fast, mobile-optimized merchant interfaces permitting shopkeepers to log transactions within 3 taps during active store rushes.',
						'Integrated customer balance history summaries and payment installment tracking with running reconciliation.',
						'Designed an automated SMS statement dispatcher notifying debtors of balances with payment timeline reminders.',
					],
					techStack: [
						'Node.js',
						'Express',
						'PostgreSQL',
						'Tailwind CSS',
						'REST API',
						'JWT Auth',
					],
					liveUrl: 'https://orda-sigma.vercel.app/',
				},
				{
					id: 'nazorat',
					title: 'Nazorat',
					subtitle:
						'Automated Attendance & Non-Editable Audit Reporting System',
					category: 'Workforce Telemetry',
					status: 'Enterprise Ready',
					description:
						'High-assurance employee and student tracking system equipped with QR verification and an automated non-editable PDF report generation pipeline designed for strict executive auditing.',
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
					techStack: [
						'React',
						'TypeScript',
						'Node.js',
						'PDFKit Engine',
						'PostgreSQL',
						'Tailwind CSS',
					],
					liveUrl: 'https://orda-sigma.vercel.app/',
				},
			],
			modal: {
				abstractTitle: 'Project Abstract & Operational Intent',
				architectureTitle: 'Architectural Execution & Engineering Highlights',
				techStackTitle: 'Integrated Technology Stack',
				certifiedBadge: 'ORDA Ecosystem Certified Project',
				launchBtn: 'Launch Live Platform',
				closeBtn: 'Close View',
			},
		},
		contact: {
			badge: 'EXECUTIVE COMMUNICATION',
			title: 'Initiate Direct Dialogue',
			description:
				'Available for venture partnerships, enterprise software consultation, startup engineering leadership, or ORDA ecosystem inquiries.',
			emailTitle: 'Direct Email Access',
			emailDesc:
				'For contractual proposals, partnerships, and tech advisories.',
			primaryBadge: 'PRIMARY CHANNEL',
			copyBtn: 'Copy',
			copiedBtn: 'Copied!',
			channelsTitle: 'Official Channels',
			telegramTitle: 'Telegram Direct',
			githubTitle: 'GitHub Repositories',
			ordaTitle: 'ORDA Ecosystem HQ',
			assuranceText:
				'Confidentiality assured for proprietary venture discussions and enterprise requests.',
			formTitle: 'Send a Verified Dispatch',
			formDesc:
				'Transmit project specifications or partnership details directly to Mustafo Toxirjanov.',
			labelName: 'Your Full Name',
			labelEmail: 'Corporate / Work Email',
			labelSubject: 'Subject / Project Scope',
			labelMessage: 'Message / Specifications',
			placeholderName: 'e.g. Alex Henderson',
			placeholderEmail: 'alex@enterprise.com',
			placeholderSubject: 'e.g. Enterprise Booking Engine Architecture',
			placeholderMessage:
				'Provide details on your project goals, timelines, or technology requirements...',
			btnSubmit: 'Transmit Message',
			btnSubmitting: 'Transmitting Dispatch...',
			btnSuccess: 'Dispatch Received Successfully!',
		},
		footer: {
			founderRole: 'Founder & Lead Manager of ORDA',
			bio: 'Engineering scalable software ecosystems, real-world SaaS products, and nurturing disciplined software builders through the ORDA studio.',
			statusActive: 'ORDA Studio Operations: Active',
			navTitle: 'Navigation',
			socialsTitle: 'Ecosystem & Socials',
			backToTop: 'Back to Summit',
			rightsReserved: 'All Rights Reserved.',
			techStackStamp:
				'Engineered with React + TypeScript + Tailwind + Framer Motion',
		},
	},

	ru: {
		nav: {
			about: 'Профиль',
			orda: 'Руководство ORDA',
			skills: 'Навыки',
			projects: 'Проекты',
			contact: 'Контакты',
			ordaEcosystem: 'Экосистема ORDA',
			initiateContact: 'Связаться',
			themeToggleLight: 'Светлая тема',
			themeToggleDark: 'Темная тема',
			founderAt: 'Основатель @',
		},
		hero: {
			leadershipPill: 'Основатель и Руководитель @ ORDA',
			roleTitle: 'Frontend разработчик и тех-предприниматель',
			fullName: 'Мустафо Тохиржанов',
			headline: 'Мустафо',
			subRole: 'Frontend разработчик и тех-предприниматель',
			bio: 'Основатель экосистемы разработки и стартап-студии ORDA. Специализируется на проектировании масштабируемых SaaS-платформ, автоматизации бизнес-процессов и менторстве перспективных инженеров.',
			badgeSaaS: 'Рабочие SaaS-системы',
			badgeRBAC: 'Многоролевая архитектура RBAC',
			badgeMentorship: 'Академия разработки ORDA',
			btnExplore: 'Смотреть проекты',
			btnOrda: 'Экосистема ORDA',
			btnInquiry: 'Прямой запрос →',
			metricSystems: '4+',
			metricSystemsLabel: 'Запущенных систем',
			metricReliability: '100%',
			metricReliabilityLabel: 'Отказоустойчивость',
			metricOrdaRole: 'ORDA',
			metricOrdaLabel: 'Основатель и Директор',
			portraitStatus: 'Активное лидерство',
			portraitSub: 'Стартап-студия и лаборатория ORDA',
			portraitFallbackTitle: 'Мустафо Тохиржанов',
			portraitFallbackRole: 'Основатель и Руководитель',
			portraitFallbackDesc: 'Экосистема разработки и стартап-студия ORDA',
			portraitSaaSLead: 'Архитектор SaaS-решений',
			portraitCity: 'Ташкент, Узбекистан',
			portraitCaption: 'РУКОВОДИТЕЛЬ СТУДИИ ORDA',
		},
		orda: {
			badge: 'ПРЕЗЕНТАЦИЯ ОСНОВАТЕЛЯ И ДИРЕКТОРА',
			titleMain: 'Во главе',
			titleHighlight: 'ORDA',
			titleRest:
				': Разработка высоконагруженного ПО и подготовка инженеров нового поколения',
			description:
				'Под руководством Мустафо Тохиржанова ORDA работает как гибридная технологическая экосистема — объединяя стартап-инкубатор, запускающий решения для реального бизнеса, и практическую студию разработки, обучающую Frontend инженеров.',
			exploreBtn: 'Открыть платформу',
			cardStatus: 'ОНЛАЙН И АКТИВНО',
			cardManagedBy: 'ПОД РУКОВОДСТВОМ МУСТАФО',
			visionBadge: 'МИССИЯ И ЦЕЛИ ЭКОСИСТЕМЫ',
			visionTitle:
				'Внедрение первоклассной программной инженерии в бизнес и образование',
			visionDesc:
				'ORDA соединяет потребности цифровизации регионального бизнеса с практической подготовкой разработчиков. Создавая онлайн-записи, цифровые долговые книги и автоматизированный учет, ORDA приносит реальную коммерческую пользу.',
			bulletVenturesTitle: 'Стартап-студия',
			bulletVenturesDesc: 'Запуск MVP и масштабирование',
			bulletTalentTitle: 'Лаборатория менторства',
			bulletTalentDesc: 'Ежедневный код-ревью и архитектура',
			bulletScaleTitle: 'Корпоративные CRM',
			bulletScaleDesc: 'Безошибочный аудит и ролевой доступ',
			portalBadge: 'ОФИЦИАЛЬНЫЙ ПОРТАЛ',
			portalTitle: 'Цифровой штаб ORDA',
			portalDesc:
				'Узнайте о действующих проектах, документации и инициативах студии.',
			portalBtn: 'ПЕРЕЙТИ В ЭКОСИСТЕМУ ORDA',
			divisionTitle: 'Ключевое направление ORDA',
			divisionStatus: 'Активно',
			pillars: [
				{
					title: 'Стартап-студия и инкубация проектов',
					badge: 'Проекты',
					description:
						'Проверка рыночных гипотез, скоростное создание MVP и развертывание надежных SaaS-платформ для локального и международного рынка.',
					highlights: [
						'Быстрый цикл от прототипа до продакшена',
						'Прямая интеграция с малым и средним бизнесом',
						'Автоматизация операционных и финансовых потоков',
					],
				},
				{
					title: 'Академия разработчиков и менторство',
					badge: 'Экосистема',
					description:
						'Подготовка дисциплинированных разработчиков через строгий код-ревью, спринты на реальных проектах и современные практики разработки.',
					highlights: [
						'Погружение в реальные производственные кодовые базы',
						'Наставничество по чистой архитектуре и стандартам',
						'Непрерывный профессиональный рост',
					],
				},
				{
					title: 'Корпоративные системы управления и CRM',
					badge: 'Решения',
					description:
						'Создание внутренних CRM, неизменяемых систем аудита и учета посещаемости для устранения операционного хаоса в компаниях.',
					highlights: [
						'Разграничение прав доступа (RBAC) и безопасность',
						'Автоматический расчет посещаемости и KPI',
						'Реляционные стандарты хранения без потерь данных',
					],
				},
			],
		},
		skills: {
			badge: 'ТЕХНИЧЕСКИЙ СТЕК И ДИНАМИКА',
			title: 'Инженерная Компетенция и Прогресс',
			description:
				'Метрический обзор ключевых навыков во frontend-архитектуре, backend-системах и инфраструктуре.',
			dynamicNote:
				'Непрерывное развитие — уровень профессиональных навыков растет ежедневно.',
			benchmarkLabel: 'ОЦЕНКА КОМПЕТЕНЦИИ',
			levelLabel: 'УРОВЕНЬ',
			auxTitleBadge: 'BACKEND, БАЗЫ ДАННЫХ И ИНФРАСТРУКТУРА',
			auxHeading: 'Дополнительные Технологии Разработки',
			auxTag: 'Активно используется в проектах ORDA',
			integratedBadge: 'Интегрировано',
			items: [
				{
					name: 'HTML5',
					category: 'core',
					proficiency: 80,
					description:
						'Семантическая разметка, доступность (a11y), современные веб-стандарты, SEO-структура.',
				},
				{
					name: 'CSS3',
					category: 'core',
					proficiency: 70,
					description:
						'Адаптивный дизайн, CSS Grid, Flexbox, кастомные дизайн-системы, CSS-переменные.',
				},
				{
					name: 'Tailwind CSS',
					category: 'frontend',
					proficiency: 50,
					description:
						'Utility-first стилизация, адаптивные брейкпоинты, светлая и темная темы оформления.',
				},
				{
					name: 'JavaScript (ES6+)',
					category: 'core',
					proficiency: 40,
					description:
						'Асинхронные события, манипуляции с DOM, функциональное программирование, Web API.',
				},
				{
					name: 'TypeScript',
					category: 'core',
					proficiency: 40,
					description:
						'Строгая типизация, интерфейсы, дженерики, надежность кодовой базы и удобство рефакторинга.',
				},
				{
					name: 'React',
					category: 'frontend',
					proficiency: 30,
					description:
						'Компонентная архитектура, хуки, жизненный цикл состояния, динамический роутинг.',
				},
				{
					name: 'Python',
					category: 'backend',
					proficiency: 20,
					description:
						'Скриптинг, обработка данных, автоматизация процессов, алгоритмическая база.',
				},
			],
		},
		projects: {
			badge: 'ПОРТФОЛИО И СТАРТАПЫ',
			title: 'Реализованные Системы и SaaS-Проекты',
			description:
				'Программные решения, развернутые в розничной торговле, сфере услуг и корпоративном секторе.',
			clickNote: 'Нажмите на карточку для просмотра архитектурного кейса',
			caseStudyBtn: 'Архитектурный кейс',
			livePlatformBtn: 'Открыть платформу',
			items: [
				{
					id: 'sartaroshlar',
					title: 'Sartaroshlar.uz',
					subtitle:
						'Многоролевая онлайн-запись, CRM и 20–30 дневные SMS-напоминания',
					category: 'SaaS-экосистема / Стартап',
					status: 'Активный SaaS',
					description:
						'Комплексная SaaS-платформа для барбершопов и салонов: клиентская онлайн-запись, расписание мастеров, учет выручки и умный сервис SMS-удержания клиентов через 20–30 дней.',
					metrics: [
						{ label: 'Цикл удержания', value: '20–30 дней авто-SMS' },
						{ label: 'Архитектура', value: 'Многоарендный RBAC' },
						{ label: 'Роли', value: 'Клиент, Мастер, Владелец, Админ' },
					],
					architectureDetails: [
						'Разработана многоуровневая модель доступа: клиентский портал бронирования, календарь мастера и финансовая аналитика владельца салона.',
						'Спроектирован cron-сервис, рассчитывающий периодичность стрижек (20-30 дней) и отправляющий персональные SMS-напоминания.',
						'Создан бесконфликтный механизм бронирования тайм-слотов, исключающий накладки между рабочими местами.',
						'Реализованы дашборды выручки, учет чаевых и сверка кассы в реальном времени.',
					],
					techStack: [
						'React',
						'TypeScript',
						'Tailwind CSS',
						'Node.js',
						'Express',
						'PostgreSQL',
						'SMS Gateway API',
					],
					liveUrl: 'https://orda-sigma.vercel.app/',
				},

				{
					id: 'angsa',
					title: 'Angsa (Онлайн Долговая Книга)',
					subtitle: 'Цифровая книга учета долгов для розничной торговли',
					category: 'Финтех / Торговля',
					status: 'В эксплуатации',
					description:
						'Цифровая система долговых расчетов, заменившая бумажные тетради ("qarz daftar") в магазинах, с верификацией записей, балансом клиентов и напоминаниями по SMS.',
					metrics: [
						{ label: 'Надежность', value: 'ACID PostgreSQL' },
						{ label: 'Эффект', value: 'Заменил бумажные тетради' },
						{ label: 'Скорость', value: '< 80ms время ответа' },
					],
					architectureDetails: [
						'Спроектирована реляционная схема в PostgreSQL с неизменяемыми транзакционными логами для исключения разногласий.',
						'Создан сверхбыстрый мобильный интерфейс, позволяющий продавцу записать долг за 3 касания в часы пик.',
						'Интегрирована история платежей клиентов и расчет остатка задолженности.',
						'Реализована автоматическая отправка SMS-уведомлений с напоминанием о сроках погашения.',
					],
					techStack: [
						'Node.js',
						'Express',
						'PostgreSQL',
						'Tailwind CSS',
						'REST API',
						'JWT Auth',
					],
					liveUrl: 'https://orda-sigma.vercel.app/',
				},
				{
					id: 'nazorat',
					title: 'Nazorat',
					subtitle:
						'Автоматизированный учет посещаемости с защищенными PDF-отчетами',
					category: 'Учет кадров и телеметрия',
					status: 'Корпоративно готов',
					description:
						'Система учета сотрудников и учащихся с проверкой по QR-кодам и формированием защищенных от редактирования официальных PDF-отчетов для руководства.',
					metrics: [
						{ label: 'Защита аудита', value: 'Криптографическая печать PDF' },
						{ label: 'Генерация отчетов', value: 'Автоматически день/месяц' },
						{ label: 'Фальсификации', value: '0% — Строгий контроль' },
					],
					architectureDetails: [
						'Разработан серверный генератор отчетов, создающий нередактируемые официальные PDF-документы с метками времени и цифровыми хэшами.',
						'Настроен cron-сервис, автоматически отправляющий руководителям сводку посещаемости в конце дня.',
						'Внедрена логика категорий статуса (Присутствовал, Опоздал, Уважительная, Прогул) с автоматическим учетом штрафов.',
						'Оптимизированы SQL-запросы для мгновенной обработки тысяч ежемесячных отметок.',
					],
					techStack: [
						'React',
						'TypeScript',
						'Node.js',
						'PDFKit Engine',
						'PostgreSQL',
						'Tailwind CSS',
					],
					liveUrl: 'https://orda-sigma.vercel.app/',
				},
			],
			modal: {
				abstractTitle: 'Кратко о проекте',
				architectureTitle: 'Архитектурные и инженерные решения',
				techStackTitle: 'Стек технологий',
				certifiedBadge: 'Сертифицированный проект ORDA',
				launchBtn: 'Открыть проект',
				closeBtn: 'Закрыть',
			},
		},
		contact: {
			badge: 'ОФИЦИАЛЬНАЯ СВЯЗЬ',
			title: 'Прямой Диалог',
			description:
				'Открыт для партнерства по стартапам, консультаций по архитектуре ПО, заказной разработки или вопросов по экосистеме ORDA.',
			emailTitle: 'Прямая электронная почта',
			emailDesc:
				'Для контрактов, партнерских предложений и технических запросов.',
			primaryBadge: 'ОСНОВНОЙ КАНАЛ',
			copyBtn: 'Копировать',
			copiedBtn: 'Скопировано!',
			channelsTitle: 'Официальные каналы',
			telegramTitle: 'Telegram напрямую',
			githubTitle: 'Репозитории GitHub',
			ordaTitle: 'Штаб-квартира ORDA',
			assuranceText:
				'Полная конфиденциальность корпоративных переговоров и проектных деталей.',
			formTitle: 'Отправить официальный запрос',
			formDesc: 'Передайте спецификации проекта напрямую Мустафо Тохиржанову.',
			labelName: 'Ваше имя и фамилия',
			labelEmail: 'Рабочая электронная почта',
			labelSubject: 'Тема / Направление проекта',
			labelMessage: 'Сообщение / Детали проекта',
			placeholderName: 'Например: Дмитрий Васильев',
			placeholderEmail: 'dmitriy@enterprise.com',
			placeholderSubject: 'Например: Разработка корпоративной CRM-системы',
			placeholderMessage:
				'Опишите цели проекта, сроки и технические требования...',
			btnSubmit: 'Отправить сообщение',
			btnSubmitting: 'Отправка...',
			btnSuccess: 'Сообщение успешно доставлено!',
		},
		footer: {
			founderRole: 'Основатель и Руководитель ORDA',
			bio: 'Разработка масштабируемого ПО для бизнеса и воспитание нового поколения инженеров в студии ORDA.',
			statusActive: 'Операции студии ORDA: Активны',
			navTitle: 'Навигация',
			socialsTitle: 'Экосистема и сети',
			backToTop: 'Наверх к началу',
			rightsReserved: 'Все права защищены.',
			techStackStamp:
				'Разработано на React + TypeScript + Tailwind + Framer Motion',
		},
	},
}
