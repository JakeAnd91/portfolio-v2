import ghost from "../assets/Screenshot 2025-12-07 150727.png";
import ch from "../assets/image.jpeg"
const projects = [
  { 
    title: "Ghost", 
    frameworks: ["Python", "C++", "Ollama", "AI", "TTS"],
    description: "A voice activated AI that learns and adapts to your conversation history. Modeled after the ghost in the video game Destiny.",
    link: "https://github.com/yourname/project1",
    img: ghost
  },
  { 
    title: "Cedar Hollow", 
    frameworks: ["Unity", "C", "Scripting", "Game Development"],
    description: "A 2D game built in Unity — players navigate a secluded mountain town to uncover the secrets woven into nature.",
    link: "https://github.com/yourname/project2",
    img: ch
  }
];

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Code Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="p-5 border rounded-lg shadow space-y-3"
          >

            {/* Special layout for Ghost */}
            {p.title === "Ghost" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <img 
                  src={p.img}
                  className="w-full h-full object-cover rounded-md"
                  alt={p.title}
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-xl">{p.title}</h3>
                    <p className="mt-2 text-white-700">{p.description}</p>

                    <h4 className="font-medium mt-3">Languages / Frameworks:</h4>
                    <ul className="list-disc list-inside text-white-700">
                      {p.frameworks.map((fw, idx) => (
                        <li key={idx}>{fw}</li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={p.link} 
                    className="text-blue-500 underline mt-3 inline-block"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </div>

              </div>
            ) : (
              
              // Default layout for other projects
              <div className="h-full flex flex-col">


                <h3 className="font-semibold text-xl">{p.title}</h3>
                <p className="mt-2 text-white-700">{p.description}</p>

                <h4 className="font-medium mt-2">Languages / Frameworks:</h4>
                <ul className="list-disc list-inside text-white-700 mb-2">
                  {p.frameworks.map((fw, idx) => (
                    <li key={idx}>{fw}</li>
                  ))}
                </ul>

                <img 
                  src={p.img}
                  className="w-full h-64 object-cover rounded-md mb-3"
                  alt={p.title}
                />

                <a 
                  href={p.link} 
                  className="text-blue-500 underline mt-auto inline-block"
                  target="_blank"
                >
                  View on GitHub
                </a>
                
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
