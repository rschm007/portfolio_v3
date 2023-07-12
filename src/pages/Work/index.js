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
import JemLDLogo from "../../assets/JQlogo-color.jpg";
import SoundandStageLogo from "../../assets/soundandstage.png";

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
                        header="JemLD"
                        description="A lighting design portfolio site for designer Jacqueline Malenke. Built with Next.js and Firebase."
                        img={true} imgSrc={JemLDLogo} imgAlt="JemLD logo" imgClass="project_logo logo_bg"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://jemld.com/" icon="fas fa-external-link-alt" content="Visit site" class="card_button site" />
                            <LinkButton relativeLink={false} href="https://github.com/rschm007/jemld" icon="fa-brands fa-github" content="Github" class="card_button app" />
                        </div>
                    </ContentCard>

                    <ContentCard
                        header="SoundandStage"
                        description="A custom Wordpress site for sound designer Vincent Olivieri."
                        img={true} imgSrc={SoundandStageLogo} imgAlt="SoundandStage" imgClass="project_logo logo_bg"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://www.soundandstage.net/" icon="fas fa-external-link-alt" content="Visit site" class="card_button site" />
                            <LinkButton relativeLink={false} href="https://github.com/rschm007/soundandstage" icon="fa-brands fa-github" content="Github" class="card_button app" />
                        </div>
                    </ContentCard>

                    <ContentCard
                        header="Southwest Dog Training"
                        description="Shopify ecommerce site for a Canadian dog training business."
                        img={true} imgSrc={CashCommandsImg} imgAlt="Southwest Dog Training Logo" imgClass="project_logo"
                    >
                        <div className="flex_row card_buttons">
                            <LinkButton relativeLink={false} href="https://www.southwestdogtraining.ca/" icon="fas fa-external-link-alt" content="Visit site" class="card_button site" />
                            <LinkButton relativeLink={false} href="https://github.com/rschm007/CashCommandsDogTraining" icon="fa-brands fa-github" content="Github" class="card_button app" />
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