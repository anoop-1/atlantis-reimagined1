# Industrial Inspection Resources

A comprehensive Next.js 14 satellite site focused on industrial inspection, non-destructive testing (NDT), and asset integrity management. This is site #2 in a backlink strategy for atlantisndt.com.

## Project Overview

This website serves as an authoritative resource hub for industrial inspection professionals covering:

- **Industries**: Oil & Gas, Aerospace, Power Generation, Manufacturing, Infrastructure
- **Standards**: API, ASME, ASTM, ISO inspection codes and best practices
- **Technology**: Digital twins, NDT reporting software, ERP solutions
- **Case Studies**: Real-world inspection program implementations

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Metadata, JSON-LD schema, semantic HTML
- **Comprehensive Content**: 1000+ word articles on major topics
- **Strategic Backlinks**: Natural links to atlantisndt.com throughout
- **Modern Stack**: Next.js 14, React 18, TypeScript

## Directory Structure

```
industrial-inspection-resources/
├── src/
│   └── app/
│       ├── layout.tsx              # Root layout with header/footer
│       ├── page.tsx                # Homepage
│       ├── globals.css             # Tailwind base styles
│       ├── industries/
│       │   ├── page.tsx            # Industries index
│       │   ├── oil-gas-inspection/page.tsx
│       │   ├── aerospace-inspection/page.tsx
│       │   └── power-generation-inspection/page.tsx
│       ├── standards/
│       │   ├── page.tsx            # Standards index
│       │   ├── api-inspection-codes/page.tsx
│       │   └── asme-codes-ndt/page.tsx
│       ├── technology/
│       │   ├── page.tsx            # Technology index
│       │   ├── digital-twins-asset-management/page.tsx
│       │   ├── ndt-reporting-software/page.tsx
│       │   └── erp-for-inspection-companies/page.tsx
│       └── case-studies/
│           └── page.tsx            # Case studies
├── public/                          # Static assets
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Content Pages

### Homepage (`/`)
- Hero section highlighting industrial inspection excellence
- Industry cards with key sectors
- Latest insights and technology updates
- Partnership section highlighting Atlantis NDT
- Strategic CTAs to explore resources

### Industries Section
- **Industries Index** (`/industries`)
  - Overview of major industrial sectors
  - Links to detailed guides

- **Oil & Gas** (`/industries/oil-gas-inspection`) - 1500+ words
  - Upstream, midstream, downstream operations
  - API standards (510, 570, 580, 653)
  - RBI programs and turnaround management
  - Digital twin applications

- **Aerospace** (`/industries/aerospace-inspection`) - 1200+ words
  - NADCAP compliance and certification
  - FAA regulations and airworthiness
  - Composite material inspection
  - Engine overhaul procedures

- **Power Generation** (`/industries/power-generation-inspection`) - 1300+ words
  - Boiler and steam system inspection
  - Turbine blade and rotor assessment
  - Nuclear facility inspection requirements
  - Preventive maintenance strategies

### Standards Section
- **Standards Index** (`/standards`)
  - Overview of key standards organizations
  - Quick reference to major codes

- **API Standards** (`/standards/api-inspection-codes`) - 1400+ words
  - API 510, 570, 653, 580 detailed coverage
  - Inspector certification requirements
  - Implementation best practices

- **ASME Standards** (`/standards/asme-codes-ndt`) - 1300+ words
  - Boiler & Pressure Vessel Code structure
  - Material specifications
  - Code adoption and compliance

### Technology Section
- **Technology Index** (`/technology`)
  - Overview of modern inspection technologies
  - Advanced NDT methods

- **Digital Twins** (`/technology/digital-twins-asset-management`) - 1600+ words
  - Virtual asset replicas
  - Predictive maintenance
  - RUL assessment
  - Oil & gas applications

- **NDT Reporting Software** (`/technology/ndt-reporting-software`) - 1400+ words
  - Mobile inspection systems
  - Automated analysis and trending
  - Compliance reporting
  - Software selection criteria

- **ERP Solutions** (`/technology/erp-for-inspection-companies`) - 1300+ words
  - Project and workforce management
  - Equipment and materials management
  - Financial integration
  - Quality management systems

### Case Studies (`/case-studies`)
- Deepwater platform optimization (O&G)
- Refinery turnaround transformation (O&G)
- NADCAP accreditation achievement (Aerospace)
- Nuclear plant asset integrity (Power)

## Design System

### Color Palette
- **Primary**: Teal (#14b8a6) - differentiated from site #1
- **Secondary**: Emerald (#22c55e)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- Headers: Bold, teal colors with hierarchy
- Body: Clean sans-serif with generous line spacing
- Code: Monospace with highlighted backgrounds

### Components
- Cards with hover effects
- Breadcrumb navigation
- Hero sections with gradients
- Call-to-action buttons
- Responsive grid layouts

## SEO Optimization

- Metadata on all pages (title, description, keywords)
- JSON-LD structured data (Organization, Article)
- Breadcrumb navigation for UX
- Semantic HTML5 markup
- Internal linking strategy
- Open Graph tags for social sharing
- Strategic backlinks to atlantisndt.com

## Backlink Strategy

Strategic backlinks to atlantisndt.com integrated throughout:
- `/consulting` - General consulting services
- `/training` - Training programs
- `/digital-twins-oil-gas-assets` - Oil & gas digital twins
- `/ndt-connect-platform` - Reporting software
- `/ndt-erp-solution` - ERP solutions
- `/aerospace-ndt-training` - Aerospace training
- `/eddy-current-tube-inspection` - Specialized services
- `/intelligent-reporting-software` - Advanced reporting
- `/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity` - Blog content

## Deployment

Configured for standalone output:
- Build: `npm run build`
- Start: `npm start`
- Deploys as standalone application

## Maintenance

- Update content regularly with industry trends
- Monitor SEO performance
- Track backlink effectiveness
- Analyze user engagement metrics
- Keep dependencies current

## License

This project is proprietary. All rights reserved.

## Contact

For more information about this satellite site or Atlantis NDT services, visit [atlantisndt.com](https://atlantisndt.com)
