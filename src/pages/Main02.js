import Header from "./Main01/Header";
import Footer from "./Main01/footer";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style3.css'
import money from "./Main01/data/money";
import bm from "./Main01/data/bm";
function Main02(){
  let num = [1,2,3,4]
  let [Money] =useState(money)
  let [Bm] =useState(bm)
  let imagebox = [1,2,3,4,5,6,7,8,9]
    return(
      <div>
       <Header></Header>
       <div className='container container00'>
        <div className="NameText">
        <p>그릭하다<span>프렌차이즈</span></p>
        <h2>경쟁력</h2>
          </div>
          </div>
       <div className="container">
       </div>
       {/* header end */}
       <div className="background-container">
        <div className="container"><p>대한민국에서 가장 많은 그릭요거트 전문점 </p></div>
       </div>
       <div className="container">
       <div className="main_box01">
        <h3>2년만에 폭풍성장중인 그릭하다..!</h3>
        <p>그릭하다는 지금 이 시간에도 다수의 가맹점이 계약 진행 중에 있습니다.</p>
        <ul className="sub_box001">
          <li>부산대연본점</li>
          <li>부산명지점</li>
          <li>부산주례점</li>
          <li>서울신림점</li>
          <li>경남대점</li>
          <li>김해내외점</li>
          <li>양산덕계점</li>
          <li>창원도계점</li>
          <li>명지대점</li>
          <li>통영무전점</li>
          <li>거제문동점</li>
          <li>양산물금점</li>
          <li>서울방이올림픽점</li>
          <li>대구범어점</li>
          <li>동아대부민점</li>
          <li>부산대점</li>
          <li>부산사직점</li>
          <li>울산삼산점</li>
          <li>창원상남점</li>
          <li>충남성연점</li>
          <li>부산수영점</li>
          <li>거제아주점</li>
          <li>부산엄궁점</li>
          <li>부산온천장점</li>
          <li>울산대점</li>
          <li>부산일광점</li>
          <li>부산정관점</li>
          <li>부산하단점</li>
          <li>진해신항점</li>
          <li>창원중앙역점</li>
          <li>진해자은점</li>
          <li>부산해운대점</li>
          <li>부산화명점</li>
          <li>경기부천점</li>
          <li>서울발산점</li>
          <li>울산우정점</li>
        </ul>
       </div>
       </div>
       <div className="total_money">그릭하다 전국 가맹점 일매출 현황을 확인하세요!</div>
       <div className="container">
       <Swiper
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="money-swiper"
      >
        {Money.map((a,i)=>{
          return (<SwiperSlide className="money-slide">
            {Money[i].name}
            <br/>
            {Money[i].money}
            </SwiperSlide>)
        })}
      </Swiper>
      <div className="total_money">※오픈일부터 2023.07까지 집계된 기록입니다.</div>
       </div>
       {/* main01 end */}
       <div className="container">
        <div className="main_box02_name"><h3>그릭하다 창업 경쟁력</h3></div>
        <ul className="main_box02 main_box02-1">
          <li>
            <div className="sub_box01"><h4>창업경쟁력1</h4></div>
            <div className="sub_box02">내용</div>
          </li>
          <li>
          <div className="sub_box01"><h4>창업경쟁력2</h4></div>
            <div className="sub_box02">내용</div>
          </li>
        </ul>
        <ul className="main_box02">
          <li>
          <div className="sub_box01"><h4>창업경쟁력3</h4></div>
            <div className="sub_box02">내용</div>
          </li>
          <li>
          <div className="sub_box01"><h4>창업경쟁력4</h4></div>
            <div className="sub_box02">내용</div>
          </li>
        </ul>
       </div>
       {/* main02 end */}
       <div className="container">
        <h2>그릭하다는 왜 잘될까?
        </h2>
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
       <h2>그릭하다만의 배달의 민족 경쟁력</h2>
        <p>평점 만점이 기본인 브랜드</p>
       <div className="bm_wrap">
        <div className="container bm_images">
          <div></div>
        </div>
        <div className="container bm_images">
          {Bm.map((a,i)=>{
            return(
              <div className="bm_image">{Bm[i].id}</div>
            )
          })}
        </div>
      <div className="container bm_images">
          <div></div>
        </div>
       </div>
       <div className="haccp_wrap">
       <h2>CERTIFICATIONS</h2>
       <div className="container">
       <div className="haccp">
        <div className="haccp_logo"></div>
        <div className="haccp_text"></div>
       </div>
       </div>
       </div>
       <div className="collaboration_wrap">
        <h2>COLLABORATION</h2>
        <div className="container">
          <div className="collaboration_main">
        </div>
       </div>
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
       {/*  */}

       <div className="container">
            <div className='con_wrap'>
            {imagebox.map(()=>{
              return(
                <div className='con-box'></div>
              )
            })}
            </div>
          </div>
       {/*  */}
       <div className="container">
            <br/>
            <div className='franchiseImage'></div>
          </div>
          {/*  */}
          <div className="container con001">
            <br/>
            <div className="text0_1">
            <h3>지금 그릭하다와 함께해보세요.</h3>
            <h2>그릭하다 창업문의</h2>
            </div>

            <div>
            <p className="name_tack">개인정보 수집 및 동의</p>
            <div className='text_1'>
                <div className='text_1-1'>
                (이하 '회사’라 함)은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다. 본 방침은 년 월 일부터 시행됩니다.
<br/><br/><br/>
1. 개인정보의 수집 및 이용 목적
① 회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
가. 고객상담 : 가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
나. 정보제공 : 회사에서 주최하는 프로그램에 대한 정보 제공 등의 목적으로 개인정보를 처리합니다.
② 회사는 다음과 같은 방법으로 개인정보를 수집합니다.
- 홈페이지
<br/><br/><br/>
2. 처리하는 개인정보 항목
① 회사는 다음의 개인정보 항목을 처리하고 있습니다.
가. 고객상담
- 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)
- 선택항목 : 없음
나. 정보제공
- 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)
- 선택항목 : 없음
<br/><br/><br/>
3. 개인정보의 처리 및 보유 기간
① 회사는 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.
② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
가. 고객상담 : 사이트 이용자의 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
나. 정보제공 : 회사에서 주최하는 프로그램에 대한 정보 제공 등의 목적으로 개인정보를 처리합니다.
다. 개인정보 보유기간 : 5년
<br/><br/><br/>
4. 개인정보의 파기
① 회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는 보유기간을 거친 후 지체 없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
- 파기절차 : 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
- 파기기한 : 이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
- 파기방법 : 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
<br/><br/><br/>
5. 개인정보의 제3자 제공에 관한 사항
① 회사는 원칙적으로 이용자의 개인정보를 1. 개인정보의 수집 및 이용 목적에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
단, 다음의 경우에는 개인정보를 처리할 수 있습니다.
- 이용자가 사전에 제3자 제공 및 공개에 동의한 경우
- 법령 등에 의해 제공이 요구되는 경우
- 서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적/기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우
- 개인을 식별하기에 특정할 수 없는 상태로 가공하여 이용하는 경우
② 개인정보를 제3자에게 제공하게 될 시 개인정보 취급방침을 통하여 반드시 제공받는 자, 이용목적, 제공하는 개인정보 항목, 보유 및 이용기간 등에 대한 내용을 고지합니다.
③ 단, 이용자가 제3자 제공 및 공개에 동의하지 않은 경우 회사에서 제공하는 서비스의 제한 혹은 정보 습득에 있어 불이익을 얻을 수 있습니다.
<br/><br/><br/>
6. 개인정보 처리의 위탁
① 회사는 개인정보를 위탁하지 않으며, 개인정보를 위탁하게 될 시 최소 15일 전에 별도로 공지사항을 통해 공지한 뒤 개인정보 취급방침을 개정합니다.
<br/><br/><br/>
7. 정보주체의 권리, 의무 및 행사방법
① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
가. 개인정보 열람요구
나. 오류 등이 있을 경우 정정 요구
다. 삭제요구
라. 처리정지 요구
② 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, FAX 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
<br/><br/><br/>
8. 개인정보 수집 장치의 설치, 운영 및 거부에 관한 사항
① 회사는 고객님의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다.
가. 쿠키란?
- 회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
- 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트 파일로 이용자 컴퓨터의 하드디스크에 저장됩니다. 이후 이용자가 웹 사이트에 방문할 경우 웹 사이트 서버는 이용자의 하드 디스크에 저장되어 있는 쿠키의 내용을 읽어 이용자의 환경설정을 유지하고 맞춤화된 서비스를 제공하기 위해 이용됩니다.
- 쿠키는 개인을 식별하는 정보를 자동적/능동적으로 수집하지 않으며, 이용자는 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.
나. 회사의 쿠키 사용 목적
- 이용자들이 방문한 회사의 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 이용자 규모 등을 파악하여 이용자에게 광고를 포함한 최적화된 맞춤형 정보를 제공하기 위해 사용합니다.
다. 쿠키의 설치/운영 및 거부
- 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
- 다만, 쿠키의 저장을 거부할 경우에는 일부 서비스는 이용에 어려움이 있을 수 있습니다.
- 쿠키 설치 허용 여부를 지정하는 방법 (Internet Explorer의 경우)은 다음과 같습니다.
(1) [도구] 메뉴에서 [인터넷 옵션]을 선택합니다.
(2) [개인정보 탭]을 클릭합니다.
(3) [개인정보취급 수준]을 설정하시면 됩니다.
<br/><br/><br/>
9. 개인정보관리책임자
① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
▶ 개인정보 보호 책임자
- 부서명:
- 담당자:
- 연락처:
② 정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
</div>
                
            </div>

            <div className="container">
            <div className='e-name'><input type='text' placeholder="고객명"/></div>
            <div className='e-phone'><input type='text' placeholder="연락처"/></div>
            <div className='need'><input type="text" placeholder="창업희망지역"/></div>
            <div className='yorn'><input type="text" placeholder="점포보유유무"/></div>
            <div className='and'><input type="text" placeholder="상세문의내용"/></div>
            <div className='check'><input type="checkbox" /><label>개인정보수집 및 동의</label></div>
            <button className="check_button">상담 신청하기</button>
            </div>
            </div>
          </div>
       <div className="container container00000">
        <ul>
          <li>입점제안</li>
          <li>식품제안</li>
          <li>마케팅제안버튼</li>
        </ul>
       </div>
       <Footer></Footer>
      </div>
    )
  }

  export default Main02;