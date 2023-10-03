import { useNavigate } from "react-router-dom";

function Main(props){
    let navigate = useNavigate();
    return(
      <div  className='first_container' onClick={()=>{props.show(false)}}>
       <div className='brand' onClick={()=>{navigate('/brand')}}></div>
       <div className='franchise' onClick={()=>{navigate('/franchise')}}></div>
        </div>
    )
  }

export default Main