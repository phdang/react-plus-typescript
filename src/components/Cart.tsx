import React from 'react';
import CartCss from './Cart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { AppStateContext } from './AppState';

interface Props {

}

interface State {
    isOpened: boolean;
}

class Cart extends React.Component<Props, State>  {

    constructor(props: Props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
        this.setState(prevState => {
            return {isOpened: !prevState.isOpened}
        });
    }

    render() {
        return  (
            <AppStateContext.Consumer>
                {(state) => {
                    const itemCount = state.cart.items.reduce((sum, item) => {
                        return sum + item.quantity;
                    }, 0);
                    return (<div className={ CartCss.cartContainer }>
                        <button type="button" className={ CartCss.button } onClick={ this.handleClick }>
                            <FiShoppingCart />
                            <span>{ itemCount } Pizza(s)</span>
                            </button>
                        <div>
                            {this.state.isOpened ?
                                (
                                <ul className={CartCss.cartDropDown}>
                                    {state.cart.items.map(item => <li key={item.id}>{ item.name } &times; { item.quantity }</li>)}
                                </ul>
                                )
                                : null
                            }
                        </div>
                    </div>);
                }}
            </AppStateContext.Consumer>
            
        );
    }
}

export default Cart;



