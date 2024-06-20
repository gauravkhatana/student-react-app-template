import React from "react";
import { Link } from "react-router-dom";

const LandingNAv = () => {
  return (
    <section className="landing-nav">
      <div className="nav">
        <div className="logo"></div>
        <atricle className="btn">
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
          <button>
            <Link to={"/signup"}>Signup</Link>
          </button>
          <button>
            <Link to={"/contact"}>Contact</Link>
          </button>
        </atricle>
      </div>
      <div className="welcome">
        <h1>Welcome To our Leaf Ninja Academy</h1>
        <p>
          The Academy is quite large and is comprised of several buildings which
          were erected over time. The building can be identified by the tree in
          front of it which has a swing on it and more so, by the giant sign
          with the kanji for "fire" (火) on it. Classrooms in the Academy are
          large and have high ceilings, based on a theory that larger classrooms
          lead to expansive education, expanding even to the blackboard itself.
          In front of the blackboard is a podium, situated far from the
          students' desks and put in a position where the teacher can view
          everyone at once.
        </p>
      </div>
    </section>
  );
};

export default LandingNAv;
