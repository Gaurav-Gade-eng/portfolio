# 🚀 Gaurav Gade Portfolio

Hello everyone! 👋
I’m **Gaurav Gade**, a passionate Web Developer.
This is my personal portfolio website showcasing my projects, certifications, and technical skills.

---

## 🌐 Live Website

👉 https://gaurav-portfolio.duckdns.org

---

## 🛠 Tech Stack

* React JS
* Tailwind CSS
* Firebase (Firestore)
* AOS (Animations)
* Material UI
* Lucide Icons
* JavaScript (ES6+)
* Node.js & Express (Backend Projects)
* MongoDB

---

## ✨ Features

* 🔥 Modern UI with animations
* 📁 Dynamic projects from Firebase
* 🏆 Certificates section with preview modal
* 🧠 Tech stack showcase
* 📱 Fully responsive design
* 🌐 Deployed on Render

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Gaurav-Gade-eng/portfolio.git
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run the project

```bash
npm run dev
```

---

### 4️⃣ Open in browser

```
http://localhost:5173
```

---

## 🏗 Build for Production

```bash
npm run build
```

👉 Output will be generated in:

```
dist/
```

---

## 🔥 Firebase Configuration

1. Go to 👉 https://console.firebase.google.com/
2. Create a project
3. Enable **Firestore Database**
4. Copy Firebase config

---

### Update your `firebase.js` file:

```js
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};
```

---

### 📁 Firestore Collections

#### 🔹 projects

```js
Title
Description
Img
Link
TechStack (array)
```

#### 🔹 certificates

```js
Img
```

---

## 📌 Notes

* Images must be stored inside:

```
public/images/
```

* Use correct path:

```js
/images/your-image.png
```

❌ Do NOT use:

```
/public/images/...
```

---

## 🙌 Credits

Inspired by open-source portfolio designs.
Customized and developed by **Gaurav Gade** 🚀

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
