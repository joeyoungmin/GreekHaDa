import '../../App.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { yogurtBowl,sweetenedYogurt,shavedIce,dessert,yogurNut,bagel,greekCheese } from './data/menu';
export default function Section02() {
    let menuName = ['요거트볼','가당요거트','빙수','디저트','요거넛','베이글','그릭치즈']
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
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
            <div key={i} className='menu_box' onClick={(e) => { e.stopPropagation(); navigate('/Menu') }}>
                <img src={item.image} className='menu_box_img' />
                <p className='menu_box_box'>{item.name}</p>
            </div>
        ));
    }
    return(
        <>
        <div className="section02_container">
                <ul className="menu_name">
                    {menuName.map((a, i) => (
                        <li key={i} className={index === i ? "is-active" : ""} onClick={() => tabClickHandler(i)}>
                            {menuName[i]}
                        </li>
                    ))}
                    <li className='product_all' onClick={(e) => { e.stopPropagation(); navigate('/Menu') }}>
                        <p>전체보기</p>
                    </li>
                </ul>
                <div className='menu_container'>
                    <div className='menu01'>
                        {renderMenuItems()}
                    </div>
                </div>
            </div>
        
        </>
    )
}