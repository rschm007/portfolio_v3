import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Wrapper from '../../components/Wrapper';
import Stars from "../../components/Animations/Stars";
import AboutCard from "../../components/Cards/AboutCard";
import List from "../../components/List/List";

const About = () => {
    const tools = ["Javascript", "C#", "PHP", "Blazor", "React", "NextJS", "Node", "ASP.net", "ThreeJS", "MongoDB", "MySQL", "Laravel"];

    return (
        <Wrapper class="background">
            <Stars />

            <Wrapper class="background_2">
                <Header tag="h1" content="About" class="header_about__hero">
                    <Subtitle tag="p" content="I love animals, the outdoors, and building cool things." class="about" />
                </Header>

                <Wrapper class="about_container">
                    <AboutCard class="tools" icon="fas fa-tools" header="Tools">
                        <List list={tools} />
                    </AboutCard>
                </Wrapper>
            </Wrapper>

        </Wrapper>
    );
};

export default About;