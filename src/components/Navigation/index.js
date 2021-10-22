import Wrapper from '../Wrapper';
import NavButton from './NavButton';

const Navigation = (props) => {
    return (
        <nav>
            <Wrapper class="navigation">
                <NavButton class="home" href="/" icon="far fa-home" />
                <NavButton class="about" href="/about" icon="far fa-user" />
                <NavButton class="portfolio" href="/portfolio" icon="fas fa-puzzle-piece" />
                <NavButton class="contact" href="/contact" icon="fas fa-phone" />
            </Wrapper>
        </nav>
    );
};

export default Navigation;