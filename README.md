# Jugadu Chef – AI-Powered Recipe Generator 🍳

A React + Vite application that lets users enter ingredients and get AI-generated recipes based on ingredients entered using Hugging Face's Mistral model. It uses Netlify Functions to securely call the Hugging Face API without exposing your secret key.

---

## Features

* Add ingredients dynamically
* Generate recipes using AI
* Smooth scroll to the recipe section
* Loading indicator while generating
* Secured API key via Netlify Functions
* Easily deployable on Netlify

---

## Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Netlify Serverless Functions
* **Markdown Rendering:** `react-markdown`
* **Hosting:** Netlify
* **AI API:** Hugging Face (Mistral model)

---

## Installation & Development

### 1. Clone the Project

```bash
git clone https://github.com/your-username/jugadu-chef.git
cd jugadu-chef
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variable

Create a `.env` file at the root:

```env
HF_API_KEY=your_huggingface_api_key
```

### 4. Install Netlify CLI (if not installed)

```bash
npm install -g netlify-cli
```

### 5. Run with Netlify Functions

```bash
netlify dev
```

Visit: [http://localhost:8888](http://localhost:8888)

---

## Deployment (Netlify)

### 1. Login to Netlify

```bash
netlify login
```

### 2. Initialize Project

```bash
netlify init
```

* Choose: **Create & configure a new site**
* Set build command: `npm run build`
* Set publish directory: `dist`

### 3. Add Environment Variable to Netlify

```bash
netlify env:set HF_API_KEY your_huggingface_api_key
```

### 4. Deploy

```bash
npm run build
netlify deploy --prod
```

---

## Project Structure

```
jugadu-chef/
├── netlify/
│   └── functions/
│       └── getRecipe.js         # API handler using Hugging Face
├── src/
│   ├── components/
│   │   ├── Main.jsx             # Core UI & logic
│   │   ├── Recipe.jsx           # Displays recipe
│   │   └── IngredientList.jsx   # Displays ingredients
│   ├── App.jsx
│   └── main.jsx
├── .env                         # Secret key (excluded from Git)
├── netlify.toml                 # Netlify config
├── vite.config.js
└── package.json
```

---

## UX Features

* **Auto-scroll** to recipe after generation
* **Loading indicator** ("🍳 Cooking up your recipe...")
* **Inline warning** if fewer than 4 ingredients
