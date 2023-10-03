import Header from './Header';
import Footer from './footer';
function Brand01(){
  let num = [1,2,3,4]
    return(
      <div>
      <Header></Header>
      <div className='container container00'>
        <div className="NameText">
        <p>그릭하다<span> 소개</span></p>
        <h2>Introduction</h2>
          </div>
        </div>
      <div className="container">

        <div className="container">
        {num.map((a,i)=>{
          return(
            <div className="main_box04">
          {num[i]%2 === 1 ? <div className="sub_box_wrap">
          <div className="sub_box04"></div>
          <div className="sub_text04">
            <h4>나는야 그릭하다</h4>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
          </div>
          </div> : <div className="sub_box_wrap">
          <div className="sub_box05" style={{float:'right'}}></div>
          <div className="sub_text05">
            <h4>나는야 그릭하다</h4>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
            <p>그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야그릭하다가 최고야</p>
          </div>
          </div>}
        </div>
          )
        })}
       </div>
       <div className='it-name'><h3>브랜드 인테리어</h3></div>
       <ul className='it-first'>
        <li></li>
        <li></li>
       </ul>
       <ul className='it-last'>
        <li></li>
        <li>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </li>
       </ul>
       </div>
      <Footer></Footer>
      </div>
    )
  }
  export default Brand01;