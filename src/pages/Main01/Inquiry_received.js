import Header from './Header';
import Footer from './footer';
function InquiryReceived(){
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
        <p>그릭하다<span>커뮤니티</span></p>
            <h2>문의접수</h2>
          </div>
        </div>
        <div className="container">
            <br/>
            <h3 className='inquiry_received'>안녕하세요. 그릭하다입니다.</h3>
            <p>불편한 사항 및 기타 문의사항은 그릭하다 <span className='spanspanspan'>카카오톡 채널</span> 또는<br/>
            그릭하다 오피셜 <span className='spanspanspan'>인스타그램 DM</span>으로 접수해 주시면 감사하겠습니다.</p>
            <p>상담 가능 시간 [평일] 09:30~ 17:30</p>
            <div>
            <div className='FAQ_box'>KakaoTalk<span className='spanspan'>고객문의</span></div>
            <div className='FAQ_box'>Instagram<span className='spanspan'>고객문의</span></div>
            <p className='asfaf'>매장의 <span className='spanspanspanspan'>보유재고 및 예약 관련 문의</span>는 해당 <span className='spanspanspanspan'>매장에 문의</span>주시길 바랍니다.</p>
            </div>
          </div>
        <Footer></Footer>
      </div>
      
    )
  }

export default InquiryReceived