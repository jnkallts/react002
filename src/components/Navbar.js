import logo from "../images/reactlogo.png";

export default function Navbar() {
   return (
      <nav>
         <img src={logo} alt="logo" className="nav--icon" />
         <h3 className="nav--logotext">React Facts</h3>
         <h4 className="nav--title">React Course - Project 2</h4>
      </nav>
   );
}
