import "./header.scss";
import { LiaCogSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <header className="header">
      <div className="header__titles">
        <h1>Meckanonator</h1>
        <h2>Making your life easier since 2024</h2>
        <div className="header__cog-wrapper">
          <LiaCogSolid />
        </div>
      </div>
      <div className="header__github-wrapper">
        <a target="_blank" href="https://github.com/itsyanQA">
          <button>
            <FaGithub />
          </button>
        </a>
      </div>
    </header>
  );
}
