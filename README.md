# 🌩️ Nimbus  – Modern Weather Application

Nimbus Lite is a fast, elegant, and minimal weather app built using **React + TypeScript + Vite**, styled with **Tailwind CSS** and enhanced with **shadcn/ui** components. The app provides accurate weather data, search history, geolocation support, and a clean UI optimized for both dark and light modes.

---

## 🚀 Features

### 🌤 Real-Time Weather Data
- Current temperature  
- Humidity, wind speed, pressure  
- Weather descriptions  
- Dynamic weather icons  

### 📅 Forecast
- Hourly and multi-day forecast (if API supports)

### 🔍 Search
- Search any city  
- Saves search history using custom hooks  
- Deduplication & timestamps

### 🧭 Location
- Detect weather using user’s device location (Geolocation API)

### 🎨 UI & UX
- Fully responsive layout  
- Light & Dark mode support  
- Tailwind CSS + shadcn/ui  
- Smooth transitions and animations  

### ⚡ Code & Performance
- Vite for ultra-fast development  
- TypeScript for strong typing  
- Modularity with custom hooks  
- Organized folder structure  

---

## 🧱 Directory Structure
```
NIMBUS/
│── .vscode/
│── node_modules/
│── public/
│
└── src/
├── api/ # Weather API handlers
├── assets/ # Images, icons, static content
├── components/ # UI components (cards, search bar, etc.)
├── context/ # Global state providers
├── hooks/ # Custom hooks (useSearchHistory, useWeather, etc.)
├── lib/ # Utility helpers, wrappers
├── pages/ # Page-level components
├── App.css
├── App.tsx
├── index.css
├── main.tsx
│
│── .env
│── .gitignore
│── components.json # shadcn/ui registry file
│── eslint.config.js
│── package.json
│── README.md
│── vite.config.js

```


---

## ⚙️ Tech Stack

| Category | Technology |
|---------|------------|
| Framework | React + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS, shadcn/ui |
| Icons | Lucide Icons |
| API | OpenWeather API / WeatherAPI |
| State | React Hooks, Context API |
| Deployment | Vercel / Netlify |

---

## 🔧 Installation & Setup

### 1️⃣ Clone the project
```bash
git clone https://github.com/your-username/Nimbus.git
cd Nimbus
npm install
npm run dev

```
---
## 🌐 Deployment
🚀 Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import repo into Vercel

3. Add environment variables under “Project Settings → Environment Variables”

4. Deploy instantly

---

## 👨‍💻 Author

Jayant R Habbu
Creator of Nimbus — a clean and modern weather experience.
