import { useEffect, useState } from "react"

function App() {
  let [game, setGame] = useState("loading...")
  useEffect(() => {
    fetch("/.netlify/functions/latestGame")
      .then(res => res.json())
      .then(res => setGame(res))
      .then(data => {
        console.log(data)
      })
  }, [])
  return (
    <div className="h-screen w-full flex justify-center p-32 bg-[#0a0a0a] text-white">
      <div className="w-2/5">
        <h1 className="text-5xl">Alex (<i>axmc</i>)</h1>
        <h2 className="text-2xl">Apprentice Software Developer</h2>
        <br />
        <p className="text-xl">
          web developer at heart, doing a bit here and there for the past 7 years.
          i also contribute to my local community, currently working in addiction prevention.
          in my free time im also a gamer and floorball player. The last game I played was {game.name}.
        </p>
      </div>
    </div>
  )
}

export default App
