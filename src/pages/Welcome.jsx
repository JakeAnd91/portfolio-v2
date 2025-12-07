"use client";
import ColorBends from "../components/ColorBends";

export default function Welcome() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ColorBends
          transparent={true}
          colors={["#ff3d7f", "#3dffcf", "#8d3dff"]}
          autoRotate={5}
          speed={0.3}
          warpStrength={1.5}
        />
      </div>

      <div className="relative z-10 text-white p-10">
        <h1 className="text-4xl font-bold">Hello Jake</h1>
        <p>Here is your website content.</p>
      </div>
    </div>
  );
}
