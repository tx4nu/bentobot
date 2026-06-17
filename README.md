# 🍱 BentoBot – Custom Lunchbox Planner & Doodle Generator

BentoBot is a delightful, premium single-page web application that helps you plan cute, character-themed Japanese bento boxes using whatever ingredients you have in your fridge. 

Upload a photo of your fridge ingredients (or select them manually), choose a kawaii theme, and watch BentoBot generate a custom **Doodle Blueprint** alongside a step-by-step assembly guide with custom "Kawaii Tips"!

---

## ✨ Features

* **📸 Multimodal Ingredient Analysis**: Upload a picture of your fridge, and BentoBot scans the photo to identify the food items inside using the Gemini 2.5 Flash API.
* **🎨 Cartoon Doodle Blueprint**: Connects to the free Pollinations.ai API to render a custom vector-style outline blueprint of your finished bento box layout.
* **📋 Structured Recipe Assembly**: Enforces a strict Pydantic-style JSON schema from Gemini to provide exact step-by-step instructions, ingredient checklists, and funny tips.
* **🎵 Web Audio Synthesizer**: Custom retro sound effects (cooking bubbles, click pops, and success chimes) synthesized directly in the browser using the native Web Audio API (no heavy audio files to download).
* **⚡ Double Engine Mode**:
  * **Demo Mode**: Instantly test the application offline using beautiful pre-configured cute bento layouts.
  * **Live Mode**: Plug in your Gemini API key (stored safely in local storage) to run real-time custom ingredient recognition and design plans.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, Vanilla CSS3 (custom variables, glassmorphic drawers, responsive layouts), and ES6+ JavaScript.
* **AI Models**: Google Gemini 2.5 Flash (for ingredient analysis & structured recipe design).
* **Image Generation**: Pollinations.ai (for kawaii bento doodle drawing generation).
* **Audio**: Native Web Audio API (synthesized retro sound effects).

---

## 📄 Strict JSON Schema Compliance

BentoBot uses Gemini's structured output controls (`responseSchema`) to enforce a strict JSON output matching this structure:

```json
{
  "bento_name": "string",
  "theme_description": "string",
  "nutritional_tags": ["string"],
  "cute_factor_rating": 1-5,
  "identified_ingredients": ["string"],
  "assembly_steps": [
    {
      "step_number": 1,
      "instruction": "string",
      "kawaii_tip": "string"
    }
  ],
  "doodle_image_prompt": "string"
}
```

---

## 🚀 Getting Started Locally

### Prerequisites
* You only need a web browser! 
* (Optional) A Gemini API Key from [Google AI Studio](https://aistudio.google.com/) to use Live Mode.

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/bentobot.git
   ```
2. Open `index.html` directly in your browser, or run a simple local server:
   ```bash
   # Using Node.js
   npx http-server -p 8080
   
   # Using Python
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your web browser.

---

## 🌐 Deploying to GitHub Pages (For Free!)

Since BentoBot is a pure client-side SPA with no backend servers, you can host it for free on **GitHub Pages** in under a minute:

1. Go to your repository settings on GitHub.
2. Scroll down to the **Pages** section in the left sidebar.
3. Under **Build and deployment**, set the source to **Deploy from a branch**.
4. Select the `main` (or `master`) branch and directory `/ (root)`.
5. Click **Save**. Within a few seconds, your site will be live at `https://your-username.github.io/bentobot/`!
