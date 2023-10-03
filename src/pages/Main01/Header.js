import { useNavigate } from "react-router-dom";
function Header(){
    let navigate = useNavigate();
    return(
      <>
      <div className="header_container">
        <div className='container'>
          <div className='logo' onClick={()=>{navigate('/brand')}}><img src='/logo/logo02.png' alt='greekhadalogo'/></div>
          <div className='menu'>
          <ul className='lnb'>
            <li onClick={()=>{navigate('/Brand01')}}>BRAND
              <ul className='hidden_menu hidden_menu01'>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/Brand01')}}>Brand</li>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/Brand02')}}>B.I</li>
              </ul>
            </li>
            <li onClick={()=>{navigate('/Menu')}}>MENU</li>
            <li onClick={()=>{navigate('/Nutrition')}}>NUTRITION</li>
            <li onClick={()=>{navigate('/cm1')}}>CONTACT
              <ul className='hidden_menu hidden_menu02'>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/cm1')}}>공지사항</li>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/cm2')}}>문의접수</li>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/cm3')}}>자주하는질문</li>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/cm4')}}>창업비용</li>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/cm5')}}>창업절차</li>
                <li onClick={(e)=>{ e.stopPropagation(); navigate('/cm6')}}>가맹문의</li>
              </ul>
            </li>
          </ul>
          <ul className='gnb'>
          <li onClick={()=>{navigate('/인스타')}}></li>
          <li onClick={()=>{navigate('/페북')}}></li>
          <li onClick={()=>{navigate('/네이버')}}></li>
          <li onClick={()=>{navigate('/네이버')}}></li>
          <li onClick={()=>{navigate('/franchise')}}>가맹문의</li>
          </ul>
          </div>
        </div>
      </div>
      {/* 헤더 끝 */}
      </>
    )
  }

  export default Header