import { Link, Outlet } from "react-router-dom";

const boxStyle = {
  height:50,
  lineHeight:'50px',
  textAlign:'center',
  backgroundColor:'#ccc'
}

const Articles = ()=>{
  return (
    <>
      {/* <header style={boxStyle}>아티클즈 헤더영역</header> */}
      {/* Outlet 만 바뀌고 나머지는 공통영역이 됨.  */}
      {/* App.js에서 <Route path='/articles' element={<Articles />} > </Route> 가 공통, 그안의 <Route path=':id' element={<Article />} /> 만 바뀜 */}
      <Outlet />
      <ul>
        <li><Link to="/articles/1">게시글-1</Link></li>
        <li><Link to="/articles/2">게시글-2</Link></li>
        <li><Link to="/articles/3">게시글-3</Link></li>
      </ul>
      {/* <footer style={boxStyle}>아티클즈 푸터영역</footer> */}
    </>

  );
}

export default Articles;