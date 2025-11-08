export const codeExemples = {
  "app.jsx": `
//Import section
import { useState, useEffect } from "react";

// Simulated AI completion import
import { codeEx } from "codeEx/ai";
// Minimal CodeEditor component placeholder
function CodeEditor({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-64 sm:h-96 p-4 rounded-lg bg-gray-900 text-green-400 font-mono"
    />
  );
}

export default function App() {
  const [code, setCode] = useState(\`console.log("Hello World!");\`);
  const [output, setOutput] = useState("");

  // Simulate running code
  useEffect(() => {
    try {
      // eslint-disable-next-line no-new-func
      const result = new Function(code)();
      setOutput(result || "Code executed. Check console for logs.");
    } catch (err) {
      setOutput(err.message);
    }
  }, [code]);

  // AI completion simulation
  const handleAICompletion = async () => {
    try {
      const suggestion = await codeEx.complete(code); // your AI API
      setCode(suggestion);
    } catch (err) {
      console.error("AI Completion failed:", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-800 text-white flex flex-col gap-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">My Mini IDE</h1>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Code Editor */}
        <div className="flex-1">
          <CodeEditor value={code} onChange={setCode} />
          <button
            onClick={handleAICompletion}
            className="mt-2 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition"
          >
            AI Complete
          </button>
        </div>

        {/* Output / Preview */}
        <div className="flex-1 bg-gray-900 p-4 rounded-lg h-64 sm:h-96 overflow-auto">
          <h2 className="font-semibold mb-2">Output:</h2>
          <pre className="font-mono">{output}</pre>
        </div>
      </div>
    </div>
  );
}
  `,

  "Hero.jsx": `
//Import section
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-8 overflow-hidden">
      {/* Mouse-follow gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: \`radial-gradient(600px circle at \${mousePosition.x}px \${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)\`,
        }}
      />

      {/* Animated background blobs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Card / IDE preview */}
      <div className="relative w-full max-w-lg">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10">
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[450px] border border-white/5">
            {/* IDE header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  `,

  "Navbar.jsx": `
//Import section
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold cursor-pointer">MyIDE</div>

      {/* Desktop links */}
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li
            key={link}
            onClick={() => setActiveLink(link)}
            className={\`cursor-pointer hover:text-blue-400 \${activeLink === link ? "text-blue-500 font-semibold" : ""}\`}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none p-2 rounded bg-gray-800"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 flex flex-col gap-2 p-4 md:hidden">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => {
                setActiveLink(link);
                setIsOpen(false);
              }}
              className={\`cursor-pointer hover:text-blue-400 \${activeLink === link ? "text-blue-500 font-semibold" : ""}\`}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
  `,
};
export const floatingCards = {
  "app.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "AI",
    title: "AI Code Completion",
    content:
      "Get smart code suggestions instantly while you type in your editor.",
  },
  "Hero.jsx": {
    bgColor: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    textColor: "text-cyan-200",
    contentColor: "text-cyan-300",
    icon: "⚡",
    title: "Live Preview",
    content: "See your UI updates in real-time as you edit your code.",
  },
  "Navbar.jsx": {
    bgColor: "bg-green-500/20",
    iconColor: "text-green-400",
    textColor: "text-green-200",
    contentColor: "text-green-300",
    icon: "🛠️",
    title: "Smart Tools",
    content:
      "Quick access to refactor, debug, and format your code with AI assistance.",
  },
};
