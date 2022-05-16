import Modal from 'react-modal';
import React,{useState} from 'react';
import Select from 'react-select';
import {  OrderStatus } from 'data/orders/Order';
import { Button, Row } from 'react-bootstrap';
import { useAppDispatch } from "controllers/store/Hooks";
import { updateOrderStatus } from 'utils/api/OrdersApi';
import { update } from 'controllers/store/reducers/OrdersReducer';

export default function OrderStatusButton(props:{orderState:OrderStatus,orderId:string ,modalStyle:any}){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedStatus , setSelectedStatus] = useState({value:props.orderState,label:props.orderState}); 
    const dispatch = useAppDispatch()

    const orderStates = [
        {value : OrderStatus.Waiting, label :OrderStatus.Waiting},
        {value : OrderStatus.Confirmed, label :OrderStatus.Confirmed},
        {value : OrderStatus.onDelivery, label :OrderStatus.onDelivery}
    ]

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    function setSelectedState(value:any){
        setSelectedStatus(value)
    }    

    function confirm(){
        updateOrderStatus(
            {
                id: props.orderId,
                status:selectedStatus.value
            },
            {
                onSuccess:(response)=>{
                    dispatch(update({orderId : props.orderId, orderState:selectedStatus.value}))
                },
                onFail :(error)=>{console.log(error)}
            })
            
            closeModal()

    }

    return (
        <div>
            <button className= 'btn btn-link' onClick={openModal}>{props.orderState}</button>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={props.modalStyle}
      >
         <Select
        value={selectedStatus}
        onChange={setSelectedState}
        options={orderStates}
        />
        <Row className = "pt-5 px-2">
        <Button className ="position-relative bottom-0 start-0 w-25"  onClick={closeModal}>Cancel</Button>
        <Button className ="position-relative bottom-0 start-50 w-25" onClick={confirm}>Confirm</Button>
        </Row>
      </Modal>
    </div>
    )
}