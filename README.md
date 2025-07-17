# IC Smile – Dental Clinic Website

A modern, responsive, and beginner-friendly dental clinic website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project showcases a clean, professional design with a focus on accessibility, user experience, and mobile responsiveness.

![IC Smile Logo](https://png.pngtree.com/png-clipart/20220111/original/pngtree-gradient-dental-logo-png-png-image_7072759.png)

## ✨ Features

- **🎨 Beautiful, Responsive Design:** Adapts seamlessly to all screen sizes from mobile to desktop
- **⚡ Modern Tech Stack:** Built with React 18, TypeScript, Vite, and Tailwind CSS
- **🧭 Easy Navigation:** Sticky header, smooth scrolling, and a floating "Back to Top" button
- **📅 Interactive Appointment Booking:** Clean, accessible form for booking dental appointments
- **🗺️ Interactive Map:** Google Maps integration in the contact section
- **🖼️ Gallery:** Before & after images with a simple slider
- **⭐ Patient Reviews:** Testimonial cards with star ratings
- **♿ Accessible:** Keyboard navigable, focus styles, and semantic HTML
- **🎯 Consistent Branding:** All content uses the "IC Smile" brand with gradient dental logo

## 🏗️ Project Structure

```
src/
├── App.tsx                # Main app component with Back to Top functionality
├── main.tsx               # React entry point
├── index.css              # Tailwind CSS imports
└── components/
    ├── Header.tsx         # Sticky navigation with logo and menu
    ├── Hero.tsx           # Landing section with call-to-action
    ├── About.tsx          # About the clinic with statistics
    ├── Services.tsx       # List of dental services offered
    ├── Gallery.tsx        # Before & after gallery with slider
    ├── Reviews.tsx        # Patient testimonials and ratings
    ├── Appointment.tsx    # Appointment booking form
    ├── Contact.tsx        # Contact info, map, and contact form
    └── Footer.tsx         # Footer with links and information
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (v8 or higher) or **yarn**


### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Branding
- **Logo:** The gradient dental logo is used throughout the site. Update the image URL in components if needed.
- **Colors:** The site uses a sky blue color scheme (`sky-500`, `sky-600`). Modify Tailwind classes to change colors.
- **Content:** Update text, images, and testimonials in their respective components.

### Map Location
The Google Map in the Contact section points to a sample address. Update the `src` in the iframe in `Contact.tsx`:

```tsx
src="https://www.google.com/maps?q=YOUR+ACTUAL+ADDRESS&output=embed"
```

### Services
Modify the services array in `Services.tsx` to add or remove dental services.

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## ♿ Accessibility Features

- ✅ Keyboard navigation support
- ✅ Focus indicators for all interactive elements
- ✅ Semantic HTML structure
- ✅ Alt text for all images
- ✅ ARIA labels where needed
- ✅ High contrast color scheme

## 📋 Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## 🎯 Key Components

### Header
- Sticky navigation with logo
- Responsive mobile menu
- Contact information bar
- Smooth scroll navigation

### Hero Section
- Compelling headline and description
- Call-to-action buttons
- Feature highlights with icons
- Professional dental image

### Appointment Form
- Comprehensive booking form
- Service selection dropdown
- Date and time picker
- Contact information fields

### Contact Section
- Interactive Google Maps embed
- Contact information cards
- Contact form with validation
- Office hours and location details

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `package.json` - Dependencies and scripts

## 📄 License

feel free to use this project

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with customization, please open an issue in the repository.

---

**IC Smile** – Bringing beautiful, healthy smiles to everyone! 😊

*Built with ❤️ using modern web technologies* 