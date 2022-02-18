import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from './components/Notification/Notification';

import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const sendCartData = React.useCallback(async () => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending Cart...'
    }));

    const response = await fetch('https://redux-course-3c172-default-rtdb.firebaseio.com/cart', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'There was an error'
      }));
    }

    dispatch(uiActions.showNotification({
      status: 'success',
      title: 'Success',
      message: 'Cart sent succesfully'
    }));
  }, [cart, dispatch]);

  React.useEffect(() => {
    sendCartData()
      .catch(err => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: `${err}`
        }));
      });
  }, [dispatch, sendCartData]);

  return (
    <>
      {notification && (
        <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
