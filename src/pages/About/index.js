import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Wrapper from "../../components/Wrapper";
import AboutCard from "../../components/Cards/AboutCard";
import List from "../../components/List/List";
import Campfire from "../../components/Animations/Campfire";

const About = () => {
  const code = ["HTML", "CSS/SCSS", "Javascript", "C#", "PHP", "Liquid"];

  const tech = [
    "React",
    "NextJS",
    "Git",
    "Blazor",
    "Node",
    "ThreeJS",
    "MongoDB",
    "MySQL",
    "Laravel",
  ];

  const programs = [
    "Figma",
    "Adobe Creative Suite",
    "VSCode",
    "Insomnia",
    "Git",
  ];

  const fun = [
    "Hiking",
    "Kayaking",
    "Woodworking",
    "Aquascaping",
    "Art & design",
    "Weightlifting",
  ];

  return (
    <Wrapper id="about">
      <Header tag="h1" content="About" class="header_about__hero">
        <Subtitle
          tag="p"
          content="I love animals, the outdoors, and building cool things."
          class="about"
        />
      </Header>

      <Wrapper class="about_container">
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
      </Wrapper>

      <Wrapper class="campfire_container">
        <Campfire />
      </Wrapper>

    </Wrapper>
  );
};

export default About;
