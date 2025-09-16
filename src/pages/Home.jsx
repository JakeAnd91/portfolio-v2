import { useState } from "react";

export default function Home() {
  const sections = [
    { title: "Digital Art", link: "/art", color: "#EC4899", description: "Explore my visual creations", origin: "top-left" },
    { title: "Coding Projects", link: "/portfolio", color: "#3B82F6", description: "Web apps and experiments", origin: "top-right" },
    { title: "Freelance", link: "/contact", color: "#10B981", description: "Hire me for web development", origin: "bottom-left" },
    { title: "Contact Me", link: "/contact", color: "#1F2937", description: "Get in touch", origin: "bottom-right" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getOriginClass = (origin) => {
    switch (origin) {
      case "top-left": return "origin-top-left";
      case "top-right": return "origin-top-right";
      case "bottom-left": return "origin-bottom-left";
      case "bottom-right": return "origin-bottom-right";
      default: return "origin-center";
    }
  };

  return (
    <div className="w-screen h-screen grid grid-cols-2 grid-rows-2">
      {sections.map((section, index) => {
        const isHovered = index === hoveredIndex;
        const scale = isHovered ? 1.1 : 1;
        const zIndex = isHovered ? 10 : 1;

        return (
          <a
            key={index}
            href={section.link}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: section.color,
              transform: `scale(${scale})`,
              zIndex: zIndex,
              transition: "transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
            }}
            className={`relative flex items-center justify-center w-full h-full ${getOriginClass(section.origin)}`}
          >
            <div className="relative text-center px-4 z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                {section.description}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
