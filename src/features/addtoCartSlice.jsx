import { createSlice } from "@reduxjs/toolkit";

const initialState={totalamount:0,listItemAdded:[]}
//state=initialState
export const addtoCartSlice=createSlice({
    name:"addtoCart",
    initialState,
    reducers:{
        addto:(state,action)=>{
        // console.log(state,action)
        const newItem={id:action.payload.mySelecteditem.id,
            imageUrl:action.payload.mySelecteditem.image,
            title:action.payload.mySelecteditem.title,
            price:action.payload.mySelecteditem.price,
            numberofItem:action.payload.numberofItem,
            ItemSum:action.payload.numberofItem*action.payload.mySelecteditem.price    
        }

        
        const productItem=state.listItemAdded.find((each)=> each.id===action.payload.mySelecteditem.id)
        if(productItem){
            state.listItemAdded.map((each)=>{
                if(each.id===action.payload.mySelecteditem.id){
                    each.numberofItem+=1
                    each.ItemSum=(each.numberofItem*each.price)

                    }
                    return each
                    
               
            })

        }
        else if(productItem===undefined){
            state.listItemAdded.push(newItem)
            // state.totalamount+=newItem.price
        }
       
        const totalSummary=state.listItemAdded.reduce((total,each)=>{
            return total+((each.numberofItem)*(each.price))
        },0)
        state.totalamount=totalSummary

       
        
    },
    increment:(state,action)=>{
        console.log(action)
        
        const productItem=state.listItemAdded.find((each)=> each.id===action.payload.myId)
        console.log("items is ",productItem)
        if(productItem){
            console.log("Verified")
            state.listItemAdded.map((each)=>{
                if(each.id===action.payload.myId){
                    //we haven't use action.payload.quantity
                    each.numberofItem+=1
                }
                return each
            })
        }
        const totalSummary=state.listItemAdded.reduce((total,each)=>{
            return total+((each.numberofItem)*(each.price))
        },0)
        state.totalamount=totalSummary
        
       
    },
    decrement:(state,action)=>{
        console.log(action)
        const productItem=state.listItemAdded.find((each)=> each.id===action.payload.myId)
        console.log("items is ",productItem)
        if(productItem && productItem.numberofItem>1 ){
            console.log("Verified")
            state.listItemAdded.map((each)=>{

                if(each.id===action.payload.myId ){
                    //we haven't use action.payload.quantity
                    each.numberofItem-=1
                }
               return  each
            })
        }
        else{
            const UpdatdState=state.listItemAdded.filter((each)=>{
                return each.id!==productItem.id
            })
            state.listItemAdded=UpdatdState
        }
        const totalSummary=state.listItemAdded.reduce((total,each)=>{
            return total+((each.numberofItem)*(each.price))
        },0)
        state.totalamount=totalSummary
    },
   
}


})


export const {addto,increment,decrement}=addtoCartSlice.actions
export default addtoCartSlice.reducer
// export const myCartState=(state)=> {
//     return state.listItemAdded
// }
