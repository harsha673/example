import React, {Component} from 'react';
import products from "../db.json";
import "./React3.css";

class Prod extends Component {
  render() {
    const renderedProd = products.products.map((data,index)=>{
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

export default Prod;