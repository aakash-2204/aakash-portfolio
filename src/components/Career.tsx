import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const progress = sectionRef.current?.querySelector(
        ".career-progress"
      ) as HTMLElement;

      if (!progress) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });

      timeline.fromTo(
        progress,
        { height: 0 },
        { height: "100%", ease: "none" }
      );
      return () => {
        timeline.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="career-section section-container" id="journey">
      <div className="career-container" ref={sectionRef}>
        <h2>
          My <span>Journey</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-progress">
              <div className="career-dot"></div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started B.E. in Computer Science & Engineering</h4>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              <strong>Kumaraguru College of Technology</strong>
              Built a strong foundation in programming, problem-solving, data structures, algorithms, and software development while beginning my journey in computer science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Explored Web Development</h4>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started building responsive websites using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> while learning frontend development, UI design principles, and modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Built Full Stack Applications</h4>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed scalable web applications using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>MySQL</strong>, focusing on clean architecture, REST APIs, authentication, and responsive user interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Published IEEE Research Paper (Co-author)</h4>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Co-authored an IEEE research paper on <strong>Optimized UAV Trajectory Planning for Precision Agriculture Using Wireless Sensor Networks</strong>, contributing to intelligent agricultural monitoring and UAV optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Real-World Projects</h4>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built AI-powered and full-stack solutions including <strong>OracleFMCG</strong>, <strong>GigFlow</strong>, and <strong>SIMRRS</strong>, applying modern technologies to solve practical business problems through scalable and production-ready applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building Interactive 3D Web Experiences</h4>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently creating immersive web applications using <strong>React</strong>, <strong>Three.js</strong>, <strong>React Three Fiber</strong>, <strong>GSAP</strong>, and modern frontend technologies while continuously exploring new tools and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
