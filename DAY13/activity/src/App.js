import React, { Component } from 'react'


function Validation(props) {
  if(!props.valid){
    return (
      <div className='error-msg'>{props.message}</div>
    )
    return null;
  }
}
export default class App extends Component {

state = {
  product: '', productID: false,
  name: '', nameID: false,
  price: '', priceVal: false,
  manuDate: '', manuDateVal: false,
  expiDate: '', expiDateVal: false,
  formValid: false,
  errorMsg: {}
}

validateForm = () => {
  const {productID,nameID,priceVal,manuDateVal,expiDateVal} = this.state;
  this.setState({
    formValid: productID && nameID && priceVal && manuDateVal && expiDateVal
  })
}

updateProduct = (product) => {
  this.setState({product}, this.validateProduct)
}

validateProduct = () => {
  const {product} = this.state;
  let productID = true;
  let errorMsg = {...this.state.errorMsg}

  if(isNaN(product)){
    productID = false
    console.log('Only Numbers')
    errorMsg.product = 'Must only contain Numbers'
  }
  this.setState({productID, errorMsg}, this.validateForm)
}

updateName = (name) => {
  this.setState({name}, this.validateName)
}

validateName = () => {
  const {name} = this.state;
  let nameID = true;
  let errorMsg = {...this.state.errorMsg}

  if(!/^[A-Za-z]*$/.test(name)){
    nameID = false;
    errorMsg.name = 'Must only contain Letters'
  }
  this.setState({nameID, errorMsg}, this.validateForm)
}

updatePrice = (price) => {
  this.setState({price}, this.validatePrice)
}

validatePrice = () => {
  const {price} = this.state;
  let priceVal = true;
  let errorMsg = {...this.state.errorMsg}

  if(isNaN(price)){
    priceVal = false
    console.log('Only Numbers')
    errorMsg.Price = 'Must only contain Numbers'
  }
  this.setState({priceVal, errorMsg}, this.validateForm)
}

  render() {
    return (
      <div className="App">
      <form action='#' id='form'>
        <div className='form-group'>
          <label htmlFor='product'>PRODUCTID</label>
          <Validation valid = {this.state.productID} message={this.state.errorMsg.product}  />
          <input type='text' id='product' name='product' className='form-field' value={this.state.product} onChange={(e) => this.updateProduct(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>NAME</label>
          <Validation valid = {this.state.nameID} message={this.state.errorMsg.name} />
          <input type='text' id='name' name='name' className='form-field' value={this.state.name} onChange={(e) => this.updateName(e.target.value)}/>
        </div>

        <div className='form-group'>
          <label>Price</label>
          <Validation valid = {this.state.priceVal} message={this.state.errorMsg.price} />
          <input type='text' id='price' name='price' className='form-field' value={this.state.price} onChange={(e) => this.updatePrice(e.target.value)}/>
        </div>

        <div className='form-group'>
          <label>MAnufacturing Date</label>
          <br/>
          <input type='date' id='manuDate' name='manuDate' className='form-field'/>
        </div>

        <div className='form-group'>
          <label>Expiration Date</label>
          <br/>
          <input type='date' id='expDate' name='expDate' className='form-field'/>
        </div>
        <div className='form-controls'>
          <button className='button' type='submit' disabled ={!this.state.formValid}>Submit</button>
        </div>
      </form>
    </div>
    )
  }
}

