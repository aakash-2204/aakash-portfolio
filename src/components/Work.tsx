import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    name: "OracleFMCG",
    category: "Cloud-Native AI Forecasting Platform",
    period: "01/2026 – 05/2026",
    description:
      "AI-powered FMCG demand forecasting solution using LightGBM with SHAP explainability, served through FastAPI and Streamlit. Complete CI/CD pipeline with GitHub Actions, containerized with Docker, and deployed on Microsoft Azure with Prometheus and Grafana for real-time monitoring.",
    tools: "Python, LightGBM, FastAPI, Streamlit, Docker, Azure, GitHub Actions, Prometheus, Grafana",
    link: "",
  },
  {
    name: "GigFlow",
    category: "Smart Lead Management Dashboard",
    period: "01/2026 – 02/2026",
    description:
      "Full-stack CRM dashboard for managing sales leads with secure JWT authentication and role-based access control. CRUD operations, search, filtering, pagination, and CSV export. Frontend deployed on Vercel, backend on Render.",
    tools: "React, TypeScript, Node.js, Express.js, MongoDB",
    link: "https://github.com/aakash-2204/Gigflow",
  },
  {
    name: "SIMRRS",
    category: "Smart Inventory Management Return Reduction System",
    period: "10/2025 – 12/2025",
    description:
      "AI-driven fashion e-commerce solution using XGBoost for demand forecasting (R² = 0.90) and return prediction (60%+ accuracy) on 30K+ records. Interactive Streamlit dashboard to optimize inventory, reduce stockouts, and minimize return-related losses.",
    tools: "Python, XGBoost, Streamlit, Pandas",
    link: "",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    const workContainer = document.querySelector(".work-container") as HTMLElement;

    if (!workFlex || !workContainer) return;

    translateX = Math.max(0, workFlex.scrollWidth - workContainer.clientWidth);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX * 0.9}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <p className="work-period">{project.period}</p>
                <p className="work-description">{project.description}</p>

                <h4>Tools and features</h4>
                <p>{project.tools}</p>

                {project.link && (
                  <a
                    className="work-repo-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor={"disable"}
                  >
                    View on GitHub <MdArrowOutward />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;