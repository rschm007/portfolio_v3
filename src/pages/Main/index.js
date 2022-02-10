import Campfire from '../../components/Animations/Campfire';
import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import LinkButton from '../../components/LinkButton';
import Stars from '../../components/Animations/Stars';

const Main = (rops) => {
    return (
        <Wrapper class="background">
            <Stars />

            <Wrapper class="background_1">
                <Navigation />

                <Header tag="h1" content="Hi! I'm Robert." class="header_main__hero">
                    <Subtitle tag="p" content="I'm a Web Developer and Designer from California." class="about" />

                    <Wrapper class="flex_row buttons">
                        <LinkButton href="https://github.com/rschm007" icon="fab fa-github" content="Github" />
                        <LinkButton href="https://www.linkedin.com/in/robert-schmahl/" icon="fab fa-linkedin-in" content="LinkedIn" />
                    </Wrapper>
                </Header>

                <Wrapper class="campfire_container">
                    <Campfire />
                </Wrapper>
            </Wrapper>

        </Wrapper>
    );
};

export default Main;