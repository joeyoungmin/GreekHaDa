import Header from './Header';
import Footer from './footer';
function Brand02(){
  let number = [1,2]
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
        <p>그릭하다<span> 소개</span></p>
            <h2>Brand Identity</h2>
          </div>
        </div>
        <div className="container">

          {/*  */}
          <div className='b-i_images'>
            {number.map(()=>{
              return <div className='bi-logo'></div>
            })}
          </div>
          {/*  */}
          <div className='b-i_texts'>
            {number.map(()=>{
              return(
              <div>
                <h3>map2개</h3>
              <p>그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!</p>
              <p>그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!그릭하다!</p>
              </div>
              )
            })}
          </div>
        </div>
        <Footer></Footer>
      </div>
      
    )
  }
  export default Brand02;