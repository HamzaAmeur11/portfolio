# Portfolio Next.js

A modern personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✅ **Next.js 14** with TypeScript  
✅ **Tailwind CSS** for styling  
✅ **Dark/Light Mode** toggle with next-themes  
✅ **Internationalization (i18n)** with next-i18next (English, French, Spanish)  
✅ **Responsive Design** - Mobile-first approach  
✅ **Reusable Components** - Clean and maintainable code structure  
✅ **Smooth Animations** - Modern UI/UX experience  

## Project Structure

```
refactorNext/
├── components/          # Reusable React components
│   ├── Sidebar.tsx
│   ├── Navbar.tsx
│   ├── About.tsx
│   ├── Resume.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageSwitcher.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/             # Static assets
│   └── locales/        # Translation files
│       ├── en/
│       ├── fr/
│       └── es/
├── styles/             # Global styles
│   └── globals.css
└── Configuration files
```

## Getting Started

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Copy Assets

Copy the `assets` folder from your original project to the `public` folder:

```bash
cp -r ../assets ./public/
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Implementation

### 🌓 Dark/Light Mode

Toggle between themes using the button in the top-right corner. The theme preference is saved in localStorage.

### 🌍 Multi-language Support

Switch between English, French, and Spanish using the language selector. Translation files are in `public/locales/`.

### 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### 🎨 Components

All components are refactored from the original HTML:
- **Sidebar**: Contact information and social links
- **Navbar**: Page navigation
- **About**: Services, testimonials, and clients
- **Resume**: Education, experience, and skills
- **Portfolio**: Project gallery with filtering
- **Blog**: Blog posts grid
- **Contact**: Contact form with map

## Customization

### Update Personal Information

Edit translation files in `public/locales/[lang]/common.json`

### Modify Styles

- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in components

### Add New Languages

1. Create a new folder in `public/locales/` (e.g., `de` for German)
2. Add `common.json` with translations
3. Update `next-i18next.config.js` to include the new locale

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **next-themes** - Theme management
- **next-i18next** - Internationalization
- **React 18** - UI library

## License

This project is open source and available under the MIT License.
