import Header from './Header';
import Footer from './footer';
import { useNavigate } from "react-router-dom";
function Allergy(){
    let navigate = useNavigate();
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
            <p>그릭하다<span>성분</span></p>
            <h2>알러지</h2>
          </div>
        </div>
        <div className="container">
         <div className='con'>
         <div className='kcal' onClick={(e)=>{ e.stopPropagation(); navigate('/Nutrition')}}><h3>칼로리계산기</h3></div>
          <div className='allergy' onClick={(e)=>{ e.stopPropagation(); navigate('/Allergy')}}><h3>알러지</h3></div>
         </div>
          </div>
        <Footer></Footer>
      </div>
      
    )
  }

export default Allergy