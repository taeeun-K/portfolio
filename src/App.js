import { Link } from 'react-router-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = ()=>{
  return (
    // 라우터를 적용할 때는 가장 최상단에 BrowserRouter를 꼭 해줘야한다.
    <BrowserRouter>
      <Routes>
        {/* 공통레이아웃 컴포넌트 역할 */}
        <Route element={<Layout />}>
          {/* index는 path='/'와 동일한 의미이다. */}
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />

          {/* 중첩(서브) 라우팅 - 공통레이아웃 작성 원리 */}
          <Route path='/articles' element={<Articles />} >
            <Route path=':id' element={<Article />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;