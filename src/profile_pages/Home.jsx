import styled from "styled-components";
import {motion} from 'framer-motion';

const Section = styled.section`
  height:660px;
  text-indent:-9999px;
  background-image:url(./images/home.png);
  background-position:center center;
  background-size:cover;
`;

const Home = ()=>{
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Section>Home</Section>
    </motion.div>
  );
}

export default Home;