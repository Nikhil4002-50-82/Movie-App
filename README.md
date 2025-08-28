## **Movie Guide App**

A cross-platform mobile application built with **React Native Expo**, and **NativeWind** (Tailwind CSS for React Native) that allows users to explore trending, popular, and upcoming movies using the **TMDB API**. Developed in **TypeScript** for better type safety and maintainability.

### **Features**

* Browse popular, trending, and top-rated movies.
* Search for movies by title.
* View detailed movie information including release date, rating, overview, and cast.
* Smooth, responsive UI using **NativeWind** for styling.
* Cross-platform support: Android, iOS (via Expo).

### **Installation & Setup**

#### **1. Clone the Repository**

```bash
git clone https://github.com/Nikhil4002-50-82/Movie-App.git
cd mobile
```

#### **2. Install Dependencies**

```bash
npm install
# or
yarn install
```

#### **3. Configure Environment Variables**

Create a `.env` file in server and add your TMDB API key:

```
TMDB_API_KEY=your_api_key_here
```

> **Note**: Ensure `.env` is added to `.gitignore` to keep your API key safe.

#### **4. Start the Development Server**

```bash
npx expo start
```

* Scan the QR code in the terminal with the **Expo Go app** (available on iOS & Android).

### **API Reference**

This project uses the [TMDB API](https://developer.themoviedb.org/) to fetch movie data.

### **Screens**

* **Home Screen** – Displays popular, trending, and upcoming movies.
* **Search Screen** – Allows users to search movies by title.
* **Details Screen** – Shows detailed info, including rating, release date, and overview.

### **Future Improvements**

* Add user authentication and favorites list.
* Implement offline caching for previously viewed movies.
* Enhance UI with animations using **React Native Reanimated**.

### **Contributing**

Contributions are welcome! Please fork the repo and submit a pull request for review.

