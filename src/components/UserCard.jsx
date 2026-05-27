import { useState } from "react"

export default function UserCard({ user,following,setFollowing}) {
  const [liked, setLiked] = useState(false)
  const [followed, setFollowed] = useState(false)
  const isFollowing = following.some(
  (item) => item.id === user.id
)

const handleFollow = () => {
  if (isFollowing) {
    setFollowing(
      following.filter((item) => item.id !== user.id)
    )
  } else {
    setFollowing([...following, user])
  }
}

  return (
    <div className="bg-zinc-900/80 backdrop-blur-md p-5 rounded-3xl border border-zinc-800 text-white hover:border-blue-500 hover:scale-[1.02] transition duration-300 shadow-lg">
      
      <h2 className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold"  >
       {user?.username?.charAt(0)}
      </h2>

      <div className="flex gap-4 mt-3 text-sm text-zinc-400">
       <p>1.2K Followers</p>
       <p>532 Likes</p>
      </div>

      <p className="text-zinc-400 mt-2">
        {user.email}
      </p>

      <p className="text-zinc-400">
        {user.phone}
      </p>

      <p className="text-zinc-400">
        {user.address.city}
      </p>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => setLiked(!liked)}
          className={`px-4 py-2 rounded-xl ${
            liked ? "bg-red-500" : "bg-zinc-700"
          }`}
        >
          {liked ? "Liked" : "Like"}
        </button>

    <button
      onClick={handleFollow}
      className={`px-4 py-2 rounded-xl ${
      isFollowing ? "bg-blue-500" : "bg-zinc-700"
       }`}
  >
  {isFollowing ? "Following" : "Follow"}
</button>
      </div>
    </div>
  )
}

