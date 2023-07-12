import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Wrapper from "../../components/Wrapper";
import AboutCard from "../../components/Cards/AboutCard";
import List from "../../components/List/List";

const About = () => {
  const code = ["HTML", "CSS/SCSS", "TS/JS", "PHP", "C#"];

  const tech = [
    "Next.js",
    "Remix",
    "React",
    "TailwindCSS",
    "Shopify",
    "Firebase",
    "MySQL"
  ];

  const programs = [
    "Figma",
    "Adobe Creative Suite",
    "VSCode",
    "Postman",
    "Git",
  ];

  const fun = [
    "Hiking",
    "Kayaking",
    "Woodworking",
    "Aquascaping",
    "Art & design",
    "Powerlifting",
  ];

  return (
    <Wrapper id="about">
      <Header tag="h1" content="About" class="header_about__hero">
        <Subtitle
          tag="p"
          content="My name is Robert Schmahl. I'm a full stack engineer based in Orange County, CA."
          class="about"
        />
        <Subtitle
          tag="p"
          content="I have developed many types of web applications through varying platforms including custom React applications, Shopify ecommerce sites, artist portfolios, and Wordpress multi-page sites."
          class="about"
        />
        <Subtitle
          tag="p"
          content="I'm passionate about building elegant, intuitive application interfaces that are a joy to use."
          class="about"
        />
      </Header>

      {/* <Wrapper class="about_container">
        <AboutCard class="code" icon="fa-solid fa-laptop-code" header="Code">
          <List list={code} />
        </AboutCard>

        <AboutCard class="tech" icon="fas fa-tools" header="Tech">
          <List list={tech} />
        </AboutCard>

        <AboutCard
          class="programs"
          icon="fa-solid fa-file-code"
          header="Programs"
        >
          <List list={programs} />
        </AboutCard>

        <AboutCard class="fun" icon="fa-solid fa-face-smile" header="Fun">
          <List list={fun} />
        </AboutCard>
      </Wrapper> */}
    </Wrapper>
  );
};

export default About;