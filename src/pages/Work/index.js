import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Wrapper from '../../components/Wrapper';
import LinkButton from '../../components/LinkButton';
import ContentCard from "../../components/Cards/ContentCard";
import BavelImg from "../../assets/bavel.jfif";
import CashCommandsImg from "../../assets/cashcommands.jpg";
import ForbesAndersenImg from "../../assets/forbesandersen.png";
import ExpressImg from "../../assets/expressinfo.png";
import TecLogo from "../../assets/tec_logo.svg";

const Work = () => {
    return (
        <Wrapper id="work">

            <Header tag="h1" content="Work" class="header_work__hero">
                <Subtitle tag="p" content="Some samples of my projects." class="work" />
            </Header>

            <Wrapper class="work_container">
                <Wrapper class="cards_work_1">
                    {/* <ContentCard
                        header="Babelbox"
                        description="Play a game of Liar Liar live with your friends. Built in React."
                        img={true} imgSrc={BavelImg} imgAlt="Bavel Logo" imgClass="project_logo"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://github.com/https-github-com-steversonTong/BabelBox" icon="fab fa-github" content="Github" class="card_button github" />
                            <LinkButton relativeLink={false} href="https://babelbox-react.herokuapp.com/" icon="fas fa-external-link-alt" content="Deployed app" class="card_button app" />
                        </div>
                    </ContentCard> */}

                    <ContentCard
                        header="The Event Community"
                        description="Find event vendors and venues, leave reviews, and book services. Built in Remix."
                        img={true} imgSrc={TecLogo} imgAlt="The Event Community Logo" imgClass="project_logo logo_bg"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://theeventcommunity.com/" icon="fas fa-external-link-alt" content="Visit site" class="card_button app" />
                        </div>
                    </ContentCard>

                    <ContentCard
                        header="Cash Commands"
                        description="Shopify site built for a local dog training business."
                        img={true} imgSrc={CashCommandsImg} imgAlt="Cash Commands Logo" imgClass="project_logo"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://www.cashcommandsdogtraining.com/" icon="fas fa-external-link-alt" content="Visit site" class="card_button site" />
                        </div>
                    </ContentCard>
                </Wrapper>

                <Wrapper class="cards_work_2">
                    <ContentCard
                        header="Forbes Andersen"
                        description="Wordpress site for a financial service company."
                        img={true} imgSrc={ForbesAndersenImg} imgAlt="Forbes Andersen Logo" imgClass="project_logo"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://www.faisi.ca/" icon="fas fa-external-link-alt" content="Visit site" class="card_button site" />
                        </div>
                    </ContentCard>

                    <ContentCard
                        header="Express Info Systems"
                        description="Wordpress site built in Laravel framework."
                        img={true} imgSrc={ExpressImg} imgAlt="Express Information Systems Logo" imgClass="project_logo"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://www.expressinfo.com/" icon="fas fa-external-link-alt" content="Visit site" class="card_button site" />
                        </div>
                    </ContentCard>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};

export default Work;