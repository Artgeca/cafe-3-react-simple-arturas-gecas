const cartToLocalStorage = (store: any) => (next: any) => (action: any) => {
  next(action);
  localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
};

export default cartToLocalStorage;
