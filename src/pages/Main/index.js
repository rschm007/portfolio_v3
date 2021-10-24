import Campfire from '../../components/Animations/Campfire';
import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import LinkButton from '../../components/LinkButton';

const Main = (props) => {
    return (
        <Wrapper class="background">
            {/* <Navigation />'      */}

            <Header tag="h1" content="Hi! I'm Robert." class="header_main__hero">
                <Subtitle tag="p" content="I'm a Web Developer and Designer from California." class="header_main__subtitle" />
                
                <Wrapper class="flex_row buttons">
                    <LinkButton href="https://github.com/rschm007" icon="fab fa-github" content="Github" underline="true" />
                    <LinkButton href="https://www.linkedin.com/in/robert-schmahl/" icon="fab fa-linkedin-in" content="LinkedIn" underline="true" />
                </Wrapper>
            </Header>

            <Wrapper class="campfire">
                <Campfire />
            </Wrapper>
        </Wrapper>
    );
};

export default Main;