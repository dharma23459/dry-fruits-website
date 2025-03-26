Here’s a complete list of all the dependencies you need to install for your dry-fruits-website project.

Since you are using a React frontend and plan to run it separately, all frontend-related dependencies should be installed inside dry-fruits-frontend, not in the root dry-fruits-website.

📌 Steps to Set Up a New Azure VM and Install Dependencies
Follow these steps whenever you set up a new Azure VM.

1️⃣ Clone the Git Repository
First, clone your project from GitHub inside your VM:

sh
Copy
Edit
git clone <your-repository-url>
cd dry-fruits-website/dry-fruits-frontend
2️⃣ Install Node.js and npm
Since React requires Node.js, install it first:

sh
Copy
Edit
sudo apt update
sudo apt install -y nodejs npm
Check if Node.js and npm are installed:

sh
Copy
Edit
node -v
npm -v
If you need a specific Node.js version (e.g., 20.x), install it manually:

sh
Copy
Edit
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
3️⃣ Install Required Dependencies for Frontend
Navigate to dry-fruits-frontend and install all dependencies:

sh
Copy
Edit
cd dry-fruits-frontend
npm install
If node_modules is missing or corrupted, remove and reinstall:

sh
Copy
Edit
rm -rf node_modules package-lock.json
npm install
4️⃣ Install Specific Project Dependencies
Here’s a complete list of all dependencies used so far. Run this inside dry-fruits-frontend:

sh
Copy
Edit
npm install react react-dom react-router-dom axios bootstrap
npm install --save-dev autoprefixer postcss tailwindcss
react and react-dom → Core React library

react-router-dom → For navigation between pages

axios → For making HTTP requests

bootstrap → For UI styling

autoprefixer, postcss, tailwindcss (if needed) → For Tailwind CSS support

5️⃣ Start the React App
After installing everything, start the app:

sh
Copy
Edit
npm start
If you want to make it accessible via Azure VM IP, modify your package.json:

json
Copy
Edit
"scripts": {
  "start": "HOST=0.0.0.0 PORT=3000 react-scripts start"
}
Then restart the app:

sh
Copy
Edit
npm start
📌 Summary of Install Locations
Dependency	Where to Install?
Node.js & npm	Azure VM (Global)
React, React Router, Axios, Bootstrap	Inside dry-fruits-frontend
Tailwind CSS, PostCSS (if needed)	Inside dry-fruits-frontend
🚀 Now, if you set up a new Azure VM, just follow these steps:
Clone the repository

Install Node.js

Install project dependencies

Start the React app

With this, your website should be live on your Azure VM's public IP! 🎉
