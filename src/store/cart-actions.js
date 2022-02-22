import { uiActions } from './ui-slice';

import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://redux-course-3c172-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'There was an error'
                  }));
            }
    
            const data = await response.json();
    
            return data;
        }

        try {
            const cartData =  await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: `${error}`
            }));
        }
    }
} 

export const sendCartData = (cart) => {
    return async dispatch => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Cart...'
      }));
  
      const sendRequest = async () => {
        const response = await fetch('https://redux-course-3c172-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart),
        });
  
        if (!response.ok) {
          dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error',
            message: 'There was an error'
          }));
        };
      }
      
      try {
        await sendRequest();
        dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success',
            message: 'Cart sent succesfully'
        }));
      } catch (error) {
        dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error',
            message: `${error}`
        }));
      }
    }
  }