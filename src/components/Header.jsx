import logo from "../assets/logo-color.svg";

function Header() {
  return (
    <div className="header-container">
      <img src={logo} className="logo" placeholder="logo-img" />
      <nav>
        <ul className="header-items">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
