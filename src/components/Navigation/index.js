import { useState } from "react";

import Wrapper from "../Wrapper";

const Navigation = (props) => {
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
      </Wrapper>
    </nav>
  );
};

export default Navigation;
