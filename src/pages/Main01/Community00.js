import Header from './Header';
import Footer from './footer';
function Community00(){
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
        <p>그릭하다<span>커뮤니티</span></p>
            <h2>공지사항</h2>
          </div>
        </div>
        <div className="container">
            <br/>
            <div className='container'>
            <ul className='list-line'>
                <li className='list-item thead'>
                    <div className='number-box'>NO</div>
                    <div className='tit-box'>제목</div>
                    <div className='date-box'>날짜</div>
                </li>
                <li className='list-item tbody'>
                    <div className='number-box'>01</div>
                    <div className='tit-box'>그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!</div>
                    <div className='date-box'>9/21</div>
                </li>
                <li className='list-item tbody'>
                    <div className='number-box'>02</div>
                    <div className='tit-box'>그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!</div>
                    <div className='date-box'>9/22</div>
                </li>
            </ul>
            <div className='asdasda'><p>1</p></div>
            </div>
          </div>
        <Footer></Footer>
      </div>
      
    )
  }

export default Community00