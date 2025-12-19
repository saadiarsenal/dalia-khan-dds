# Dalia Khan, DDS - Portfolio Website

Professional portfolio website for Dr. Dalia Khan, a graduate of NYU Dental School, working as an associate dentist in Bayonne, New Jersey.

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment.

## Deployment to Cloudflare Pages

### Initial Setup

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to Cloudflare Pages**:
   - Log in to your Cloudflare dashboard
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Connect your Git repository

3. **Configure Build Settings**:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (or leave empty if repository root)

4. **Environment Variables** (if needed):
   - Add any required environment variables in the Cloudflare Pages dashboard
   - Go to Settings → Environment Variables

5. **Deploy**:
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site

### Custom Domain Setup

1. **Add Custom Domain in Cloudflare Pages**:
   - Go to your project in Cloudflare Pages
   - Navigate to "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain name

2. **DNS Configuration**:
   
   **Option A: Domain managed by Cloudflare**:
   - If your domain is already using Cloudflare nameservers, DNS will be automatically configured
   - Cloudflare will create the necessary CNAME record

   **Option B: Domain managed elsewhere**:
   - Add a CNAME record in your DNS provider:
     - **Name**: `@` or `www` (depending on your preference)
     - **Target**: Your Cloudflare Pages URL (e.g., `your-project.pages.dev`)
   - Or add an A record pointing to Cloudflare's IP addresses

3. **SSL/TLS**:
   - Cloudflare automatically provides SSL certificates for custom domains
   - SSL will be enabled automatically after DNS propagation

4. **Wait for DNS Propagation**:
   - DNS changes can take up to 24-48 hours to propagate
   - Usually completes within a few minutes to an hour

### Automatic Deployments

Cloudflare Pages automatically deploys:
- **Production**: Every push to your main/master branch
- **Preview**: Every pull request gets a preview deployment

## Project Structure

```
dalia-khan-dds/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── education/         # Education page
│   ├── gallery/           # Gallery page
│   ├── testimonials/      # Testimonials page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── ServiceCard.tsx   # Service display cards
│   ├── TestimonialCard.tsx # Testimonial cards
│   ├── GalleryGrid.tsx   # Image gallery
│   └── ContactForm.tsx   # Contact form
├── lib/                   # Utility functions and data
│   └── data.ts           # Static content data
├── public/                # Static assets
│   └── images/           # Image files
└── next.config.js        # Next.js configuration (static export)
```

## Customization

### Updating Content

Most content is stored in `lib/data.ts`. Update the following:
- Services
- Testimonials
- Education and certifications
- Contact information
- About content

### Adding Images

1. Place images in `public/images/`
2. Update image references in components or `lib/data.ts`
3. Use Next.js Image component for optimized images

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles use Tailwind utility classes

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Fast loading with static generation
- ✅ Accessible components
- ✅ Smooth transitions and animations
- ✅ Image gallery with lightbox
- ✅ Contact form
- ✅ Professional dental/medical aesthetic

## License

ISC
