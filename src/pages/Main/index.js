import Campfire from '../../components/Animations/Campfire';
import Header from "../../components/Header";
import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';

const Main = (props) => {
    return (
        <Wrapper class="background">
            <Navigation />

            <Header tag="h1" content="Hi! My name is Robert Schmahl" class="header_main__hero" />

            <Wrapper class="campfire">
                <Campfire />
            </Wrapper>
        </Wrapper>
    );
};

export default Main;