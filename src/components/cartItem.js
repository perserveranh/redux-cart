import React, { Component } from 'react';
import * as Message from './../constants/Message';
class CartItem extends Component {
  render() {
     var {item} = this.props;
    return (
              <tr>
                                    <th scope="row">
                                        <img src={item.product.image}
                                            alt="" className="img-fluid z-depth-0" />
                                    </th>
                                    <td>
                                        <h5>
                                            <strong>{item.product.name}</strong>
                                        </h5>
                                    </td>
                                    <td>{item.product.price}$</td>
                                    <td className="center-on-small-only">
                                        <span className="qty">{item.quantity} </span>
                                        <div className="btn-group radio-group" data-toggle="buttons">
                                            <label 
                                            onClick={() => this.onUpdateProductInCart(item.product,item.quantity-1)}
                                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                >
                                                <a>—</a>
                                            </label>
                                            <label 
                                            onClick={() => this.onUpdateProductInCart(item.product,item.quantity+1)}
                                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                >
                                                <a>+</a>
                                            </label>
                                        </div>
                                    </td>
                                    <td>{this.showPriceTotal(item.product.price,item.quantity)}$</td>
                                    <td>
                                        <button 
                                        type="button" 
                                        className="btn btn-sm btn-primary waves-effect waves-light"
                                         data-toggle="tooltip" 
                                         data-placement="top"
                                        title="" data-original-title="Remove item"
                                        onClick={() => this.onDelete(item.product)}
                                        >
                                            X
                                        </button>
                                    </td>
                                    
                                </tr>
    );
  }
  showPriceTotal = (price,quantity) => {
      return price * quantity;
  }
  onDelete = (product) => {
      var {onDeleteProductInCart,onChangeMessage} = this.props;
      onDeleteProductInCart(product);
      onChangeMessage(Message.MSG_DELETE_TO_CART_SUCCESS);
  }
  onUpdateProductInCart = (product,quantity) => {
      if(quantity>0) {
          var { onUpdateProductInCart,onChangeMessage} =this.props;
          onUpdateProductInCart(product,quantity);
          onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
      }
  }
}

export default CartItem;
