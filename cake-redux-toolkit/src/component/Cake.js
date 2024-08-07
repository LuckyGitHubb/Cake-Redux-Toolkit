import React, { useState } from 'react'
import cakeSlice from '../features/cakeSlice'
import { useSelector, useDispatch }  from 'react-redux' 

function Cake() {
  const [buy_Cake,setbuy_Cake] = useState('');
  const [reorder_Cake,setreorder_Cake] = useState('');
  function onChange_BuyCake(e){setbuy_Cake(e.target.value)}
  function onChange_ReorderCake(e){setreorder_Cake(e.target.value)}
  const cakeSelector = useSelector((state)=>{
    return state.cake.totalCake;
  })
  const dispatch = useDispatch()
  function btn_BuyCakeClick(){
    (dispatch(cakeSlice.actions.buyCake(parseInt(buy_Cake))));
  }
  function btn_ReorderCakeClick(){
    (dispatch(cakeSlice.actions.reorderCake(parseInt(reorder_Cake))));
  }  
  return (
    <div>
      <label htmlFor="">Buy Cake: </label>
      <input onChange={onChange_BuyCake} type="text" value={buy_Cake} />
      <input onClick={btn_BuyCakeClick} type="button" value='Buy Cake' />
      <br/>
      <label htmlFor="">Reorder Cake: </label>
      <input onChange={onChange_ReorderCake} type="text" value={reorder_Cake} />
      <input onClick={btn_ReorderCakeClick} type="button" value='Reorder Cake' />
      <br/>
      <label htmlFor="">Total Availability:{cakeSelector} </label>
    </div>
  )
}

export default Cake