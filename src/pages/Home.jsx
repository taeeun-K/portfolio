import { Link } from "react-router-dom";

const Home = ()=>{
  return (
    <div>
      <h1>홈</h1>
      <p>방문해 주셔서 감사합니다.</p>

      <p>
        {/* 새로고침 X표시 안뜸, 검사(F12)에서는 a로 자동 변환되어 출력됨. */}
        {/* 즉, 새로고침되는게 아니라 페이지 안의 데이터만 주고받는다는 뜻(a를 바로 쓰면 새로고침(X표시뜸)됨) */}
        {/* <Link to='경로'>링크이름</Link> */}
        <Link to='/about'>About으로 이동</Link>
      </p>
    </div>
  );
};

export default Home;