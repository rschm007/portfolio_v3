import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import LinkButton from '../../components/LinkButton';
import Stars from '../../components/Animations/Stars';

const Work = (props) => {
    return (
        <Wrapper class="background background_3">
            <Navigation />

            <Header tag="h1" content="Work" class="header_about__hero">
                <Subtitle tag="p" content="Here's some samples of my projects." class="about" />
            </Header>

            <Wrapper class="work_container">

            </Wrapper>
        </Wrapper>
    );
};

export default Work;