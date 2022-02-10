import { useState } from "react";
import LinkButton from "../LinkButton";

import Wrapper from "../Wrapper";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Wrapper class={`navigation ${open}`}>
        <div className={`nav_button ${open}`} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="nav_menu">
            <LinkButton class="nav_link" href="/home" content="home" />
            <LinkButton class="nav_link" href="/about" content="about" />
            <LinkButton class="nav_link" href="/work" content="work" />
            <LinkButton class="nav_link" href="/contact" content="contact" />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navigation;