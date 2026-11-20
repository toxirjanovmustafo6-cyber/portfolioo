# Mustafo Toxirjanov — Rasmiy Developer Portfolio & ORDA Ekotizim Portali

**Mustafo Toxirjanov** — Frontend Dasturchi, Texnologik Tadbirkor hamda **[ORDA](https://orda-sigma.vercel.app/)** ekotizimi va startap studiyasining asoschisi va boshqaruvchi rahbari uchun yaratilgan rasmiy, yuqori darajadagi shaxsiy portfolio veb-sayti.

---

## 🌐 3 Xil Til Dastagi (Ko‘p tillilik)

Sayt to‘liq 3 xil tilda professional darajada tarjima qilingan bo‘lib, **asosiy (default) tili o‘zbek tili**:

1. **O‘zbekcha (`uz`)** — Asosiy standart til (O‘zbekiston IT bozori, startaplar va mahalliy bizneslar uchun).
2. **English (`en`)** — Xalqaro hamkorlar, xorijiy mijozlar va global investorlar uchun.
3. **Русский (`ru`)** — MDH va mintaqaviy korporativ hamkorlar uchun.

- Til tanlovi `localStorage` orqali xotirada saqlanadi va sahifa qayta ochilganda eslab qolinadi.

---

## ☀️ / 🌙 Kun va Tun Rejimi (Day / Night Mode)

- **Tungi rejim (Dark Mode / Tun):** Chuqur obsidian qora (`#09090B`), to‘q ko‘mir rangli sirtlar (`#121215`), nafis oltin-sariq (`#EAB308` / `#FACC15`) urg‘ular va xira rux matnlar.
- **Kunduzgi rejim (Light Mode / Kun):** Toza, yorug‘ korporativ oq-kulrang sirtlar (`#F8FAFC` va `#FFFFFF`), aniq to‘q matnlar va hashamatli oltin-sariq ko‘rsatkichlar.
- Navbarda va mobil menyuda bir marta bosish orqali tezkor va silliq almashish imkoniyati.
- Tanlangan rejim brauzer xotirasida (`localStorage`) saqlanadi.

---

## 🏛️ Asosiy Bo‘limlar

1. **Navigatsiya & Oltin Oqim Chizig‘i (`Navbar.tsx`):**
   - Brauzer tepasida oltin rangdagi silliq scroll progress indikatori.
   - Kun/Tun (☀️ / 🌙) almashuv tugmasi.
   - 3 tilli menyu (`UZ` / `EN` / `RU`).
   - `ORDA Ekotizimi` va `Bog‘lanish` tugmalari.

2. **Asimmetrik Bosh Bo‘lim (`Hero.tsx`):**
   - Chap tomonda: Mustafo Toxirjanovning ORDA studiyasi rahbari sifatidagi roli, real SaaS mahsulotlar va IT murabbiylik faoliyati haqida ma’lumot.
   - O‘ng tomonda: Oltin burchakli ramkaga ega shaxsiy fotosurat konteyneri (`<img src="image/photo_2026-11-20_20-39-14.jpg" alt="Mustafo Toxirjanov" />`) hamda fotosurat kiritilmaganda avtomatik ishlovchi arxitekturaviy monogram (`MT`) fallback.

3. **ORDA Ekotizimi Taqdimoti (`OrdaSpotlight.tsx`):**
   - Mustafo Toxirjanovning **ORDA Asoschisi va Boshqaruvchi Rahbari** sifatidagi faoliyatiga bag‘ishlangan rasmiy vitrina.
   - `https://orda-sigma.vercel.app/` ga to‘g‘ridan-to‘g‘ri interaktiv terminal-karta.
   - 3 ta asosiy ustun:
     - **Startap Studiya** (MVP, inkubatsiya va biznes jarayonlarini avtomatlashtirish)
     - **Dasturchilar Akademiyasi** (Talabchan kod ko‘riklari, real loyihalar, amaliyot)
     - **Korporativ CRM va Boshqaruv** (Ichki tizimlar, audit jurnallari)

4. **Texnik Stack va Dinamik Rivojlanish (`Skills.tsx`):**
   - Majburiy maqom nishoni:
     > ⚡ _"Doimiy rivojlanishda — ko‘nikmalar darajasi har kuni faol ravishda oshib bormoqda."_
   - Oltin rangda silliq harakatlanuvchi animatsion progress barlar:
     - **HTML5:** `80%`
     - **CSS3:** `70%`
     - **Tailwind CSS:** `50%`
     - **JavaScript (ES6+):** `40%`
     - **TypeScript:** `40%`
     - **React:** `30%`
     - **Python:** `20%`
   - Qo‘shimcha texnologiyalar: Node.js, Express, PostgreSQL, REST API, Git, SMS shlyuzlar, PDF generatsiya.

5. **Amaliy Loyihalar & Startaplar (`Projects.tsx` & `ProjectModal.tsx`):**
   - **Sartaroshlar.uz:** Ko‘p rolli navbat, CRM, moliya hisobi va 20–30 kunlik avtomatlashtirilgan SMS eslatma SaaS platformasi.
   - **Angsa (Onlayn Qarz Daftar):** Chakana savdo korxonalari uchun qog‘oz daftarlar o‘rnini bosgan raqamli qarz va hisob-kitob daftari.
   - **Nazorat:** Xodimlar/talabalar davomatini nazorat qilish va tahrirlanmaydigan PDF audit hisobotlarini tuzish tizimi.
   - Har bir loyiha uchun to‘liq arxitektura va muhandislik tahlil modal oynasi.

6. **Muloqot va Ijtimoiy Tarmoqlar (`Contact.tsx` & `Footer.tsx`):**
   - Elektron pochtani bir bosishda nusxalash tugmasi (`toxirjanovmustafo@gmail.com`).
   - Telegram ([@toxirjanoovv](https://t.me/toxirjanoovv)), GitHub ([github.com/MustafoToxirjanov6-cyber](https://github.com/MustafoToxirjanov)), ORDA HQ ([orda-sigma.vercel.app](https://orda-sigma.vercel.app/)).
   - Rasmiy xabar yuborish formasi.

---

## 🛠️ Loyihani Ishga Tushirish

```bash
# Mahalliy serverni ishga tushirish (http://localhost:3000)
npm run dev

# Ishlab chiqarish uchun kompilatsiya qilish
npm run build

# Ishlab chiqarilgan loyihani ko‘rish
npm run preview
```
