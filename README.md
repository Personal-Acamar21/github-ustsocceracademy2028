## UST Soccer Academy Website

A modern, responsive website for UST Soccer Academy built with React, TypeScript, and Tailwind CSS.

### Features

- **Programs & Training**
  - Youth Development Programs
  - Elite Training Programs
  - Cozy Feet Program (Ages 2-7)
  - Camps & Clinics

- **Event Management**
  - Upcoming Events Calendar
  - Online Registration System
  - Event Details & Schedules
  - Automated Registration Confirmations

- **Content Management**
  - Decap CMS Integration
  - Blog Posts & News Updates
  - Newsletter System
  - Dynamic Content Updates

- **User Experience**
  - Responsive Design
  - Fast Page Loading
  - Interactive Components
  - Real-time Form Validation

### Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Query
- React Router
- Decap CMS
- Vite

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Content Management

Content is managed through Decap CMS with the following collections:

- Events
- Sponsors
- Camps & Clinics
- Tryouts

### Deployment

The site is deployed on Netlify with continuous deployment from the main branch.

### Environment Variables

```env
VITE_SITE_URL=your-site-url
VITE_CMS_BRANCH=main
```

### Project Structure

```
├── public/
│   ├── admin/          # Decap CMS admin interface
│   └── images/         # Static images
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities and APIs
│   ├── types/         # TypeScript types
│   └── utils/         # Helper functions
├── content/           # CMS content
└── netlify/          # Netlify functions
```

### License

All rights reserved © UST Soccer Academy