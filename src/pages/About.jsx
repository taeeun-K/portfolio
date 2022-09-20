import { Link } from "react-router-dom";

const About = ()=>{
  return (
    <div>
      <h1>소개</h1>
      <p>웹퍼블리셔, 프론트엔드 개발자를 꿈꾸고 있습니다.</p>

      <p>
        {/* 새로고침 X표시 안뜸, 검사(F12)에서는 a로 자동 변환되어 출력됨. */}
        {/* 즉, 새로고침되는게 아니라 페이지 안의 데이터만 주고받는다는 뜻(a를 바로 쓰면 새로고침(X표시뜸)됨) */}
        {/* <Link to='경로'>링크이름</Link> */}
        <Link to='/'>Home으로 이동</Link>
      </p>
    </div>
  );
};

export default About;