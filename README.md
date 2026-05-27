# SocialX App

SocialX App adalah project website social media sederhana berbasis React yang menggunakan API dari JSONPlaceholder untuk menampilkan data users.

Website ini dibuat menggunakan React JS dan Tailwind CSS dengan tampilan modern seperti aplikasi social media. User dapat mencari pengguna, mengikuti user lain, melihat halaman following, serta mengganti tema dark mode.

## Technologies
- React JS
- Tailwind CSS
- Vite
- React Icons

## Functions & Features
- Menampilkan data users dari API
- Search users berdasarkan username, email, dan kota
- Follow & unfollow users
- Following page
- Dark mode
- Responsive design
- Sidebar navigation
- Interactive UI

## React Hooks
- useState
  Digunakan untuk menyimpan data users, search, menu, following, dan dark mode.

- useEffect
  Digunakan untuk mengambil data API users saat website pertama kali dibuka.

- useContext
  Digunakan untuk membuat dark mode menggunakan ThemeContext.

- useRef
  Digunakan pada SearchBar untuk fokus otomatis ke input search.

## API
https://jsonplaceholder.typicode.com/users

## Installation
npm install

## Run Project
npm run dev