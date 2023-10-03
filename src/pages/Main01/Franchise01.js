import Header from './Header';
import Footer from './footer';
function Franchise01(){
  let imagebox = [1,2,3,4,5,6,7,8,9]
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
        <p>그릭하다<span>커뮤니티</span></p>
            <h2>창업 절차</h2>
          </div>
          </div>
        <div className="container">
            <div className='con_wrap'>
            {imagebox.map(()=>{
              return(
                <div className='con-box'></div>
              )
            })}
            </div>
          </div>
        <Footer></Footer>
      </div>
      
    )
  }

export default Franchise01