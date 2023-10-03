import Header from './Header';
import Footer from './footer';
function Community(){
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
        <p>그릭하다<span>커뮤니티</span></p>
            <h2>자주하는 질문</h2>
          </div>
        </div>
        <div className="container">
            <br/>
            <h2>가장 자주 하는 질문 FAQ</h2>
            <ul className='FAQ'>
                <li>
                 <h3>보관기간은 언제까지인가요?</h3>
                 <p>제조일로부터 10일 입니다.</p>
                </li>
                <li>
                 <h3>그릭요거트의 맛은 어떤가요?</h3>
                 <p>기존 요거트에서 신맛을 뺀 담백한 맛입니다.</p>
                </li>
                <li>
                 <h3>영양성분의 당류 포함 되있는 원인이 뭔가요?</h3>
                 <p> 원유 자체에 포함된 “유당”에서 나온 함량 , 우유와 유산균 외 어떠한 첨가물도 들어가있지 않으니 안심하고 드세요!</p>
                </li>
                <li>
                 <h3>제품에 하얀 액체의 정체가 뭔가요?</h3>
                 <p>투명한 액체는 요거트 제조과정에 자연스럽게 나오는 “유청”이라는 액체로 제품이 변질된건 아니니 섞어 드시거나 유청을 따라낸 뒤 섭취하시면 됩니다.</p>
                </li>
                <li>
                 <h3>원유 등급이 무엇인가요?</h3>
                 <p> 1등급A제품 사용중 입니다.</p>
                </li>
                <li>
                 <h3>보관방법은 어떻게 되나요?</h3>
                 <p>무조건 구매 후 바로 냉장보관 해야 합니다. 온도가 잘 변하지 않는 구역에 보관 적정 보관 온도 0-5도로 보관해주시면 됩니다~!!!</p>
                </li>
            </ul>
          </div>
        <Footer></Footer>
      </div>
      
    )
  }

export default Community