import Glitch from "../assets/Glitch.jpg"
import NoRisk from "../assets/No Risk.jpg"
import Madden from "../assets/Madden.jpg"
import GreatestLie from "../assets/Greatest Lie.jpg"
const artworks = [
Glitch,
NoRisk,
Madden,
GreatestLie
]

export default function Art() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Art Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {artworks.map((img, i) => (
          <img key={i} src={img} alt="Artwork" className="rounded-lg shadow" />
        ))}
      </div>
    </div>
  )
}

