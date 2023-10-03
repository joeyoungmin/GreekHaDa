import Header from './Header';
import Footer from './footer';
import { useState } from 'react';
import { yogurtBowl,sweetenedYogurt,shavedIce,dessert,yogurNut,bagel,greekCheese }  from './data/menu';
function Menu(){
    let menuName = ['요거트볼','가당요거트','빙수','디저트','요거넛','베이글','그릭치즈']
    const [index, setIndex] = useState(0);
    const tabClickHandler=(index)=>{
        setIndex(index)
    }
    const renderMenuItems = () => {
      let selectedMenu = [];

      switch (index) {
          case 0:
              selectedMenu = yogurtBowl;
              break;
          case 1:
              selectedMenu = sweetenedYogurt;
              break;
          case 2:
              selectedMenu = shavedIce;
              break;
          case 3:
              selectedMenu = dessert;
              break;
          case 4:
              selectedMenu = yogurNut;
              break;
          case 5:
              selectedMenu = bagel;
              break;
          case 6:
          case 7:
              selectedMenu = greekCheese;
              break;
          default:
              break;
      }

      return selectedMenu.map((item, i) => (
          <div key={i} className='menu_box'>
              <img src={item.image} className='menu_box_img' />
              <p className='menu_box_box'>{item.name}</p>
          </div>
      ));
  }
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
              <p>그릭하다<span>메뉴</span></p>
            {menuName.map((a,i)=>{
                return <h2 className={index===i ? "is-active3" : "is-active4"} onClick={()=>tabClickHandler(i)}>{menuName[i]}</h2>
            })}
          </div>
        </div>
        <div className="container container000000">
          {/*  */}
          <div className='main_menu_nv'>
            {menuName.map((a,i)=>{
                return  <div className={index===i ? "is-active2" : ""} onClick={()=>tabClickHandler(i)}>{menuName[i]}</div>
            })}
          </div>
          <div className='main_menu'>
          {renderMenuItems()}
          </div>
        </div>
        <Footer></Footer>
      </div>
      
    )
  }
  export default Menu;