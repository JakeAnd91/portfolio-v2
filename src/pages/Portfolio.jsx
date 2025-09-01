const projects = [
  { title: "Project One", description: "Cool project", link: "https://github.com/yourname/project1" },
  { title: "Project Two", description: "Another cool project", link: "https://github.com/yourname/project2" }
]

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Code Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div key={i} className="p-4 border rounded-lg shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} className="text-blue-500" target="_blank">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  )
}