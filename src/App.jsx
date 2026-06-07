import { useEffect, useState, useContext } from "react"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import UserCard from "./components/UserCard"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"

import { ThemeContext } from "./context/ThemeContext.jsx"

function App() {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  const [menu, setMenu] = useState("home")
  const [following, setFollowing] = useState([])

  const { darkMode, setDarkMode } =
    useContext(ThemeContext)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.address.city.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-[linear-gradient(to_bottom_right,#000000,#18181b,#09090b)]"
          : "bg-gray-200"
      }`}
    >

      <Navbar />

      <div className="flex flex-col md:flex-row">

        <Sidebar
          menu={menu}
          setMenu={setMenu}
        />

        <div className="flex-1 p-3 md:p-5">

          <h1 className="text-2xl md:text-3xl text-white font-bold mb-5">
            Discover Users
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-xl mb-5"
          >
            Toggle Theme
          </button>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          {menu === "home" && (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">

              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  following={following}
                  setFollowing={setFollowing}
                />
              ))}

            </div>

          )}

          {menu === "following" && (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">

              {following.length > 0 ? (

                following.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    following={following}
                    setFollowing={setFollowing}
                  />
                ))

              ) : (

                <p className="text-zinc-400">
                  No following users yet.
                </p>

              )}

            </div>

          )}

        </div>

      </div>

      <Footer />

    </div>

  )
}

export default App