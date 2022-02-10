import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import Stars from "../../components/Animations/Stars";
import AboutCard from "../../components/Cards/AboutCard";

const About = () => {
    return (
        <Wrapper class="background">
            <Stars />

            <Wrapper class="background_2">
                <Navigation />

                <Header tag="h1" content="About" class="header_about__hero">
                    <Subtitle tag="p" content="I love animals, the outdoors, and building cool things." class="about" />
                </Header>

                <Wrapper class="about_container">
                    <AboutCard class="tools" icon="fas fa-tools" header="Tools"
                        content="Javascript, C#, PHP, Blazor, React, Laravel." />
                </Wrapper>
            </Wrapper>

        </Wrapper>
    );
};

export default About;