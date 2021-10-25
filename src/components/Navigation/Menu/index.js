const Menu = ({ open, setOpen }) => {
    return (
      <div
        className={`text-white -mt-16 mb-0 h-screen text-5xl font-bold flex items-center justify-center ${open}`}
      >
        <ul>
          <a href="#welcome" >
            <li className="nav_button" onClick={() => setOpen(!open)} >HOME</li>
          </a>
          <a href="#about" >
            <li className="nav_button" onClick={() => setOpen(!open)} >ABOUT</li>
          </a>
          <a href="#projects" >
            <li className="nav_button" onClick={() => setOpen(!open)} >PROJECTS</li>
          </a>
          <a href="#contact" >
            <li className="nav_button" onClick={() => setOpen(!open)} >CONTACT</li>
          </a>
        </ul>
      </div>
    );
  };
  
  export default Menu;