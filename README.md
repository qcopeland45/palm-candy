# Palm Candy Website

A modern, responsive single-page application (SPA) for Palm Candy's pre-launch page and product drops. Built with React + Vite, featuring parallax effects, pre-launch forms, and optimized for business use.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Parallax Effects** - Smooth scrolling animations
- **Pre-launch Form** - Collect customer data (first name, last name, email, phone)
- **Modern UI/UX** - Beautiful Palm Candy brand colors and styling
- **SEO Optimized** - Meta tags and proper HTML structure
- **GitHub Pages Ready** - Configured for easy deployment

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 4.5.14
- **Styling**: CSS3 with CSS Variables
- **Hosting**: GitHub Pages
- **Form Integration**: Google Sheets (via sheets.best)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/qcopeland45/palm-candy.git
cd palm-candy
```

### 2. Install Dependencies
```bash
npm install
```

## 🎯 Development Commands

### Start Development Server
```bash
npm run dev
```
- Starts the development server at `http://localhost:5173/`
- Features hot module replacement (HMR)
- Auto-reloads on file changes

### Preview Production Build Locally
```bash
npm run preview
```
- Builds the project first, then serves it locally
- Available at `http://localhost:4173/palm-candy/`
- Perfect for testing the production build before deployment

### Build for Production
```bash
npm run build
```
- Creates optimized production files in `dist/` folder
- Minifies CSS and JavaScript
- Optimizes assets for production

### Lint Code
```bash
npm run lint
```
- Runs ESLint to check code quality
- Identifies potential issues and enforces coding standards

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```
   This command:
   - Builds the project
   - Adds the `dist/` folder to git
   - Commits the build files
   - Pushes to the `gh-pages` branch

3. **Configure GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save the configuration

4. **Access Your Site**
   - Your site will be available at: `https://qcopeland45.github.io/palm-candy/`
   - First deployment may take 5-10 minutes

### Manual Deployment

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Copy contents of `dist/` folder to your web server
3. Ensure your server is configured for SPA routing

## 🔧 Configuration

### Vite Configuration
The project is configured for GitHub Pages in `vite.config.js`:
- Base path: `/palm-candy/`
- Build output: `dist/` folder
- Optimized for production

### Environment Variables
Create a `.env` file for any environment-specific configurations:
```env
VITE_API_ENDPOINT=your_sheets_best_endpoint
```

## 📁 Project Structure

```
palm-candy-website/
├── src/
│   ├── components/          # React components
│   │   ├── Header/         # Navigation header
│   │   ├── Hero/           # Main hero section
│   │   ├── Features/       # Product features
│   │   ├── PreLaunchForm/  # Customer data collection
│   │   └── Footer/         # Site footer
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.jsx            # App entry point
├── public/                  # Static assets
├── dist/                    # Production build (generated)
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary: #FF6B35;      /* Main brand color */
  --secondary: #4ECDC4;    /* Accent color */
  --accent: #FFE66D;       /* Highlight color */
}
```

### Content
- Update text content in component files
- Replace placeholder images in `public/` folder
- Modify form fields in `PreLaunchForm.jsx`

## 🐛 Troubleshooting

### Common Issues

**Blank Page on GitHub Pages**
- Ensure `base: '/palm-candy/'` is set in `vite.config.js`
- Check that GitHub Pages is configured for the correct branch
- Verify all files are properly committed and pushed

**Build Errors**
- Check Node.js version (requires 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Verify all dependencies are installed

**Development Server Issues**
- Check if port 5173 is available
- Kill any existing Vite processes
- Restart the development server

## 📞 Support

For issues or questions:
- Check the GitHub repository issues
- Review the deployment logs in GitHub Actions
- Ensure all prerequisites are met

## 📄 License

This project is proprietary to Palm Candy. All rights reserved.

---

**Built with ❤️ for Palm Candy's pickleball paddle grip business**

