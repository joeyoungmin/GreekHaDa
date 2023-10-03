import Header from './Header';
import Footer from './footer';
import { useNavigate } from "react-router-dom";
import Topping from './data/topping';
import { useState } from 'react';
function Nutrition(){
    let navigate = useNavigate();
    let [topping] = useState(Topping)
    const [changed,setChanged] = useState([])
    const selectList = [ "그릭요거트M_70g-70kcal", "그릭요거트L_130g-125kcal","그릭요거트Big_300g-270kcal",'그릭요거트Super_500g-450kcal'];
    const [Selected, setSelected] = useState( "그릭요거트M_70g-70kcal");
    const [checkedList, setCheckedList] = useState([]);

    const onCheckedElement = (checked, item) => {
      if (checked) {
        setCheckedList([...checkedList, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter(el => el !== item));
      }
    };

    const onRemove = item => {
      setCheckedList(checkedList.filter(el => el !== item));
    };

    const handleSelect = (e) => {
      setSelected(e.target.value);
    };

    const calculateTotalKcal = () => {
      let totalKcal = 0;
    
      const selectedYogurt = Selected.split('_');
      if (selectedYogurt.length === 2) {
        totalKcal += parseFloat(selectedYogurt[1].split('-')[1]);
      }
    
      checkedList.forEach(itemName => {
        const toppingItem = topping.find(item => item.name === itemName);
        if (toppingItem) {
          totalKcal += parseFloat(toppingItem.kcal2);
        }
      });

    return totalKcal;
  };
    return(
      <div>
        <Header></Header>
        <div className='container container00'>
        <div className="NameText">
            <p>그릭하다<span>성분</span></p>
            <h2>칼로리계산기</h2>
          </div>
        </div>
        <div className="container">
         <div className='con'>
         <div className='kcal' onClick={(e)=>{ e.stopPropagation(); navigate('/Nutrition')}}><h3>칼로리계산기</h3></div>
          <div className='allergy' onClick={(e)=>{ e.stopPropagation(); navigate('/Allergy')}}><h3>알러지</h3></div>
         </div>
        <div className='yogurt_name'>
        <p>요거트 선택</p>
        <select onChange={handleSelect} value={Selected}>
        {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        </div>
        <div className='yogurt_name'>
        <p>토핑 선택</p>
        <ul className='topping_name'>
        {topping.map((a, i) => (
          <label
            key={i}
            className={changed.includes(a) ? 'topping_pick toppingtopping' : 'toppingtopping'}
            onClick={() => {
              const updatedList = changed.includes(a) ? changed.filter((button) => button !== a) : [...changed, a];
              setChanged(updatedList);
            }}
          >
            <div className='topping_img'>{<img src={a.img} alt='topping' className='topping_img00'/>}</div>
            <input
              type='checkbox'
              data-kcal={a.kcal2}
              value={a.name}
              onChange={(e) => {
                onCheckedElement(e.target.checked, e.target.value);
              }}
              checked={checkedList.includes(a.name)}
            />
          </label>
           ))}
          </ul>
        </div>
        <div className='kcal_plus'>
            <p className='kcal_name'><span>계산된 칼로리</span></p>
            <div className='plus-yogurt'><p>그릭요거트</p>{Selected}</div>
            <div className='plus-topping'><p>토핑</p>{checkedList.length === 0 && (
              <p>{'카테고리를 지정해 주세요.'}</p>
            )}
             {checkedList.map(item => {
              return (
                <div className='topping_wrap001' key={item}>
                  <div className='topping_name001'>{item}</div>
                  <div className='topping_remove001' onClick={() => onRemove(item)}>
                    X
                  </div>
                </div>
              );
            })}
            </div>
        </div>
        <div className='topping_total'>
              <p>선택한 토핑 칼로리 합계:</p>
              <div className='total_kcal'>{calculateTotalKcal()} kcal</div>
            </div>
          </div>
        <Footer></Footer>
      </div>
      
    )
    
  }

export default Nutrition