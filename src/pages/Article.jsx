import {useParams} from 'react-router-dom';

const Article = ()=>{

  // const paramData = useParams();
  // const id = paramData.id;

  const {id} = useParams();


  return (
    <section>
      <h2>게시글 {id}번 제목</h2>
      <p>
        기쁘며, 앞이 고동을 행복스럽고 방지하는 뜨고, 그들의 것이다. 평화스러운 천고에 소리다.이것은 새 보이는 위하여서. 우리는 인생에 크고 찾아다녀도, 더운지라 그들은 그들은 얼마나 그들의 것이다. 어디 따뜻한 속에 얼음 힘차게 칼이다. 인간에 새 위하여 따뜻한 사막이다. 인생을 풀이 눈이 실로 있는 위하여서. 낙원을 무엇을 인간의 같이 모래뿐일 사랑의 있음으로써 오아이스도 칼이다. 이 얼음이 같지 더운지라 우리 그들은 내는 청춘이 쓸쓸하랴? 유소년에게서 그들은 것이 착목한는 무한한 청춘은 그들의 사막이다. 두손을 끝에 작고 인간에 인간이 이 이상은 보라.
      </p>
    </section>
  );
}

export default Article;