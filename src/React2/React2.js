import React, {Component} from 'react';
import "./React2.css";
class React2 extends Component {
  render() {
      let Products = [
        {
            "id": "1",
            "productName": "Moto G5",
            "quantity": "2",
            "price": "Rs. 13000"
        },
        {
            "id": "2",
            "productName": "Racold Geyser",
            "quantity": "3",
            "price": "Rs. 6000"
        },
        {
            "id": "3",
            "productName": "Dell Inspiron",
            "quantity": "4",
            "price": "Rs. 50000"
        }
      ]
    const renderedProd = Products.map((data,index)=>{
        return(
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.productName}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
            </tr>
        );
    })
    return (
      <div>
        <h1>Products List</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedProd}
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default React2;