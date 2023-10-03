import '../../footerStyle.css'

export default function Footer() {
    
    return(
        <>
        <div className='footer'>
        <div className="footer_container">
           <div className='footerLogo'>GreekHada</div>
           <ul className='footerText'>
            <li><span>Company/CEO</span> HADA / Youngmin Jang</li>
            <li><span>Address</span> 대충 주소</li>
            <li><span>Customer Service</span> 대충 고객상담센터번호</li>
            <li><span>Registration Number</span> 대충 사업자 등록번호</li>
           </ul>
           <div className='footerIcon'>
            <button>가맹 문의하기</button>
            <div className='footer_sns_wrap'>
            <p>SNS</p>
            <ul className='footer_SNS'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </div>
            <ul className='footer_contact'>
                <li>CONTACT</li>
                <li>주소</li>
            </ul>
           </div>
        </div>
        </div>
        <div className='copyright'>COPYRIGHT© 그릭하다. ALL RIGHTS RESERVED.</div>
        </>
    )
}