import Container from "../layouts/Container";
import Index from "../components/Index";
import SkillsTools from "../components/SkillsTools";
import Myproject from "../components/Myproject";
import Contacts from "../components/Contacts";
import Activitys from "../components/Activitys";

const Home = () => {
  return (
    <>
      <Container>
        <Index />
        <Activitys />
        <SkillsTools />
        <Myproject />
        <Contacts />
      </Container>
    </>
  );
};

export default Home;
