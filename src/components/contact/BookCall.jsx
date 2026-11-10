import { EMAIL } from "../../data/profile";

export default function BookCall() {
  return (
    <div className="book">
      <span className="tg">Let’s find a time</span>
      <h3>Book a 1:1 Intro Call</h3>
      <p>Talk through your idea, technical roadmap or an opportunity to work together.</p>
      <div className="bx">
        <div><b>Quick introduction</b>Goals & first steps</div>
        <div><b>Technical deep dive</b>Architecture & scope</div>
      </div>
      <a className="bb" href={"mailto:" + EMAIL + "?subject=Intro%20call"}>
        Arrange a call by email →
      </a>
    </div>
  );
}
