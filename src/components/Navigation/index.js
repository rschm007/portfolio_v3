import { useState } from 'react';
import Burger from "./Burger";
import Menu from "./Menu";
import Wrapper from '../Wrapper';

const Navigation = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <Wrapper class="navigation">
                <Wrapper className="navigation_content">
                    <Burger className="menu_button" open={open} setOpen={setOpen} />
                    <Menu className="menu_button" open={open} setOpen={setOpen} />
                </Wrapper>
            </Wrapper>
        </nav>
    );
};

export default Navigation;