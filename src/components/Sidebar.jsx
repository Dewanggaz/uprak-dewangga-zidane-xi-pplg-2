import {
  FaHome,
  FaCompass,
  FaUserFriends,
  FaUser
} from "react-icons/fa"

export default function Sidebar({ menu, setMenu }) {
  return (
    <div className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 text-white p-5">

      <h1 className="text-3xl font-bold mb-10">
        SocialX
      </h1>

      <ul className="space-y-5">

        <li
          onClick={() => setMenu("home")}
          className={`flex items-center gap-3 cursor-pointer ${
            menu === "home" ? "text-blue-400" : ""
          }`}
        >
          <FaHome />
          Home
        </li>

        <li
          onClick={() => setMenu("explore")}
          className={`flex items-center gap-3 cursor-pointer ${
            menu === "explore" ? "text-blue-400" : ""
          }`}
        >
          <FaCompass />
          Explore
        </li>

        <li
          onClick={() => setMenu("following")}
          className={`flex items-center gap-3 cursor-pointer ${
            menu === "following" ? "text-blue-400" : ""
          }`}
        >
          <FaUserFriends />
          Following
        </li>

        <li
          onClick={() => setMenu("profile")}
          className={`flex items-center gap-3 cursor-pointer ${
            menu === "profile" ? "text-blue-400" : ""
          }`}
        >
          <FaUser />
          Profile
        </li>

      </ul>
    </div>
  )
}