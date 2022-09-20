/**
 * 애니메이션 작성 - npm i framer-motion 모듈 설치
 * 
 */
import {motion} from 'framer-motion';

const AboutMe = ()=>{
  return (
    // <motion>으로 컴포넌트를 감싸준다.
    // initial - 마운트(컴포넌트가 화면에 나타나는시점)될때
    // animate - 마운트가 완료된 직후
    // exit - 언마운트(화면에서 사라지는 시점)될때
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section>
        <img src="./images/aboutme.png" alt="#" />
      </section>
    </motion.div>
  );
}

export default AboutMe;