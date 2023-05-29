import React from "react"

const ObtainTbody = ({item, index, setSelected})=>{
    return(
        <tr key={index} onClick={()=> {
            setSelected(item.obtainId)}
        }>
            <td>{index+1}</td>
            <td>{item.obtainId}</td>
            <td>{item.obtainDate.split("T")[0]}</td>
            <td>{item.item.itemCode}</td>
            <td>{item.item.itemName}</td>
            <td>{item.customer.customerName}</td>
            <td>{item.obtainAmount}</td>
            <td>{item.customerRequestDate.split("T")[0]}</td>
            <td>{item.expectDate.split("T")[0]}</td>
        </tr>
    )
}

export default ObtainTbody