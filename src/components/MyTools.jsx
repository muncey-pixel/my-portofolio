import { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiCplusplus } from "react-icons/si";

const tools = [
  { id: 1, name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
  { id: 2, name: "CSS", icon: <FaCss3Alt />, color: "#1572b6" },
  { id: 3, name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { id: 4, name: "React", icon: <FaReact />, color: "#61dafb" },
  { id: 5, name: "Python", icon: <FaPython />, color: "#3776ab" },
  { id: 6, name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  { id: 7, name: "VS Code", icon: <VscVscode />, color: "#007acc" },
  { id: 8, name: "C++", icon: <SiCplusplus />, color: "#007acc" },
];

function MyTools() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" className="tools" ref={sectionRef}>
      <h1 className={visible ? "tools-title show" : "tools-title"}>My coding Tools</h1>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className={visible ? "tool-card show" : "tool-card"}
            style={{ animationDelay: `${index * 0.12}s`, "--tool-color": tool.color }}
          >
            <span className="tool-icon">{tool.icon}</span>
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyTools;