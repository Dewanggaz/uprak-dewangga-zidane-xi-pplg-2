import { useRef } from "react"

export default function SearchBar({ search, setSearch }) {

  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div className="flex gap-3 w-full bg-zinc-900 text-white p-4 rounded-2xl outline-none border border-zinc-800 focus:border-blue-500 transition">

      <input
        ref={inputRef}
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-zinc-900 text-white p-4 rounded-2xl outline-none border border-zinc-800 focus:border-blue-500 transition"
      />

      <button
        onClick={focusInput}
        className="bg-blue-500 hover:bg-blue-600 transition px-5 rounded-2xl text-white font-semibold"
      >
        Search
      </button>

    </div>
  )
}

