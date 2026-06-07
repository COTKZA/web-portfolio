import Container from "../layouts/Container";
import Index from "../components/Index";
import SkillsTools from "../components/SkillsTools";
import Myproject from "../components/Myproject";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <>
      <Container>
        <Index />
        <SkillsTools />
        <Myproject />
        <Contacts />
      </Container>
    </>
  );
};

export default Home;
