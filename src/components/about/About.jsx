import { PHOTO } from "../../data/profile";
import { values } from "../../data/about";

export default function About() {
  return (
    <div className="aboutBox" id="about">
      <div className="about">
        <span className="badge">🛡 Identity & Background</span>
        <h2>About <span className="grad">Me</span></h2>
        <p className="tagline">Developer with a passion for building products people actually want to use</p>

        <div className="agrid">
          <div className="pcard">
            <div className="photo">
              {PHOTO ? <img src={PHOTO} alt="Bhavik Mithaiwala" /> : <span className="init">B</span>}
              <span className="pos">⌨ Full-Stack Developer</span>
            </div>
          </div>

          <div className="ov">
            <div className="ovh">
              <div className="ico">🚀</div>
              <div>
                <small>Executive Summary</small>
                <h3>Professional Overview</h3>
              </div>
            </div>
            <p>
              I don’t just build interfaces, I build experiences people actually want to use. 
              I’m a Full-Stack Developer with a Master’s in Computer Engineering from the University of Guelph, focused on creating scalable, high-performance 
              web applications with React, Node.js and TypeScript.
              </p>
            <p>
              At ShareCharge, I work on a peer-to-peer EV charging marketplace, and at L&T Technology Services I built secure, role-based systems that automated workflows. 
              I build scalable applications with React, Angular, Node.js, TypeScript and JavaScript, covering responsive interfaces, RESTful APIs, microservices and secure authentication. 
              With a background in performance optimization, automated testing, CI/CD and Agile teams, I focus on delivering reliable solutions to real business problems, and 
              I’m especially interested in system design. I’m now adding AI-powered workflows to my toolkit.
            </p>
          </div>
        </div>

        <div className="vals">
          {values.map(([emoji, title, desc]) => (
            <div className="val" key={title}>
              <span className="e">{emoji}</span>
              <div>
                <b>{title}</b>
                <i>{desc}</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
