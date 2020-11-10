import React, {Component} from 'react';

class Prods extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        fetch('../db.json',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            let producs=data;
            this.setState({products:producs})
        });
    }
    render() {
    let renderedProd=null;
    if(this.state.products){
            renderedProd= this.state.products.map((data,index) => {
            return(
                <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.productName}</td>
                    <td>{data.quantity}</td>
                    <td>{data.price}</td>
                </tr>
            );
        })
    }
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

export default Prods;