# Anirudha Dey — Software Engineer Portfolio

A modern, high-performance, accessible, and SEO-optimized personal portfolio engineered for **Anirudha Dey** (Full-Stack Software Engineer with 3.5+ years of experience).

Built with **React 18 + Vite**, **TypeScript**, a custom **2026 design system**, **strict type safety**, **centralized content management**, and **interactive system architecture inspection**.

---

## 🚀 Live Demo & Production Links

- **Production URL**: [portfolio-gray-phi-10.vercel.app](https://portfolio-gray-phi-10.vercel.app)
- **LinkedIn**: [linkedin.com/in/anirudha-dey](https://www.linkedin.com/in/anirudha-dey)
- **GitHub**: [github.com/anirudhadey](https://github.com/anirudhadey)
- **Email**: [anirudha.dey.official@gmail.com](mailto:anirudha.dey.official@gmail.com)

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, Vite 5, Modern TypeScript (Strict mode)
- **Styling**: Tailwind CSS + Custom CSS Design System Tokens (Obsidian/Slate theme, glass surfaces, ambient glow, custom scrollbars)
- **Icons**: Lucide Icons + Custom Vector SVGs (zero external CDN blocking)
- **Email & Forms**: `@emailjs/browser` with honeypot spam protection & fallback
- **Quality & Standards**: ESLint Flat Config, Prettier formatting, TypeScript compiler check (`tsc --noEmit`)
- **SEO & a11y**: JSON-LD Structured Data (`Person`, `WebSite`), Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`, WCAG-conscious contrast, and `prefers-reduced-motion` compliance

---

## 📁 Project Architecture & Folder Structure

```
├── public/
│   ├── assets/
│   │   ├── images/              # Project screenshots & profile avatar
│   │   └── resume/              # Downloadable resume PDF
│   ├── robots.txt               # Search engine crawler permissions
│   └── sitemap.xml              # Search engine index sitemap
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI primitives (Button, Modal, TechBadge, Icons, SectionHeading)
│   │   ├── navigation/          # Responsive Navbar with mobile drawer & scroll spy
│   │   ├── hero/                # Hero section with live availability & tech spec terminal
│   │   ├── about/               # Engineering philosophy, metrics, and academic honors
│   │   ├── experience/          # Career timeline with enterprise impact & tech tags
│   │   ├── skills/              # Categorized skills matrix with interactive domain filtering
│   │   ├── projects/            # Project cards with interactive System Architecture modal
│   │   ├── contact/             # Accessible contact form with EmailJS & 1-click copy feedback
│   │   └── footer/              # Sleek footer with navigation, social links, and scroll-to-top
│   ├── data/
│   │   ├── profile.ts           # Centralized profile, bio, education, and social links
│   │   ├── experience.ts        # Career timeline & responsibilities data
│   │   ├── projects.ts          # Project specifications, problems, solutions & architectures
│   │   ├── skills.ts            # Categorized skills by architectural domain
│   │   └── navigation.ts        # Navigation link definitions
│   ├── hooks/
│   │   ├── useActiveSection.ts  # Scroll-spy hook for nav highlighting
│   │   └── useReducedMotion.ts  # System motion accessibility hook
│   ├── types/
│   │   └── index.ts             # Complete TypeScript interface definitions
│   ├── utils/
│   │   └── cn.ts                # ClassName string composer utility
│   ├── App.tsx                  # Main application landmark composition
│   ├── index.css                # 2026 Design system tokens, utilities & reset
│   ├── main.tsx                 # Type-safe application mount point
│   └── vite-env.d.ts            # Vite client types & environment interface
├── .env.example                 # Environment variables template
├── eslint.config.js             # Modern ESLint configuration
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.js               # Vite bundler configuration & code-splitting
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/anirudhadey/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install
```

### Environment Configuration

Copy `.env.example` to create your local `.env`:

```bash
cp .env.example .env
```

Set your configuration values:

```env
VITE_EMAILJS_SERVICE_ID=service_s0wsybe
VITE_EMAILJS_TEMPLATE_ID=template_jxr7ict
VITE_EMAILJS_PUBLIC_KEY=4yT0nAU8p5Z1-7-4N
VITE_SITE_URL=https://portfolio-gray-phi-10.vercel.app
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🔍 Validation & Production Build

```bash
# Verify TypeScript types
npm run typecheck

# Run linter
npm run lint

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 How to Update Content & Assets

### 1. Updating Personal Information
Edit [`src/data/profile.ts`](src/data/profile.ts):
- Name, title, tagline, bio paragraphs
- Email, phone, location, availability
- Social links (LinkedIn, GitHub)
- Academic education and honors

### 2. Updating Resume PDF
1. Replace or place your new PDF file inside `public/assets/resume/` (e.g., `Anirudha_Dey_Resume.pdf`).
2. If the filename changes, update `resumePath` and `resumeFileName` in [`src/data/profile.ts`](src/data/profile.ts):
   ```ts
   resumePath: '/assets/resume/Your_New_Resume.pdf',
   resumeFileName: 'Your_New_Resume.pdf',
   ```

### 3. Updating Profile Avatar
1. Place your new photo inside `public/assets/images/` (e.g., `profile.jpg`).
2. Update `avatar` in [`src/data/profile.ts`](src/data/profile.ts):
   ```ts
   avatar: '/assets/images/profile.jpg',
   ```

### 4. Updating Projects & Architectural Specs
Edit [`src/data/projects.ts`](src/data/projects.ts):
- Add/update projects, problem-solution statements, and tech stacks.
- Update the `architecture` object (`client`, `api`, `services`, `database`) to populate the interactive system architecture modal.

### 5. Updating Skills
Edit [`src/data/skills.ts`](src/data/skills.ts) to adjust proficiencies, add skills, or create new categories.

### 6. Updating Work Experience
Edit [`src/data/experience.ts`](src/data/experience.ts) to update timeline dates, roles, responsibilities, and impact metrics.

---

## 🚢 Deployment

### Vercel
1. Connect your GitHub repository to Vercel.
2. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add environment variables (`VITE_EMAILJS_*`) in the Vercel dashboard.

### Netlify
1. Connect repo to Netlify.
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`

### Cloudflare Pages
1. Create a new Cloudflare Pages project from git.
2. Set build command to `npm run build` and output directory to `dist`.

---

## 📄 License

MIT © [Anirudha Dey](https://github.com/anirudhadey)