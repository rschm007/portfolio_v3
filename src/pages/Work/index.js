import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import LinkButton from '../../components/LinkButton';
import Stars from '../../components/Animations/Stars';
import ContentCard from "../../components/Cards/ContentCard";

const Work = (props) => {
    return (
        <Wrapper class="background background_3">
            <Stars />
            <Navigation />

            <Header tag="h1" content="Work" class="header_work__hero">
                <Subtitle tag="p" content="Here's some samples of my projects." class="work" />
            </Header>

            <Wrapper class="work_container">
                <Wrapper class="cards_work_1">
                    <ContentCard
                        header="Babelbox"
                        description="Play a game of Liar Liar live with your friends."
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton href="https://github.com/https-github-com-steversonTong/BabelBox" icon="fab fa-github" content="Github" class="card_button github" />
                            <LinkButton href="https://babelbox-react.herokuapp.com/" icon="fas fa-external-link-alt" content="Deployed app" class="card_button link" />
                        </div>
                    </ContentCard>

                    <ContentCard
                        header="Recipe Generator"
                        description="Find recipes based on inputted ingredients."
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/" icon="fab fa-github" content="Github" class="card_button github" />
                            <LinkButton href="https://bavel-technology.github.io/Recipe-Generatorf/" icon="fas fa-external-link-alt" content="Deployed app" class="card_button app" />
                        </div>
                    </ContentCard>
                </Wrapper>

                <Wrapper class="cards_work_2">
                    <ContentCard
                        header="Forbes Andersen"
                        description="Wordpress site built with Elementor Plugin."
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton href="https://www.faisi.ca/" icon="fas fa-external-link-alt" content="Visit site" class="card_button site" />
                        </div>
                    </ContentCard>

                    <ContentCard
                        header="Express Info Systems"
                        description="Wordpress site built with Laravel framework."
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton href="https://www.expressinfo.com/" icon="fas fa-external-link-alt" content="Deployed app" class="card_button site" />
                        </div>
                    </ContentCard>
                </Wrapper>
            </Wrapper>


        </Wrapper>
    );
};

export default Work;