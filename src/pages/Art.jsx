const artworks = [
  "./src/assets/glitch.jpg",
  "./src/assets/No Risk.jpg",
  "./src/assets/Madden.jpg",
  "./src/assets/Greatest Lie.jpg"
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