const getInputValue = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    
    return inputValue;
}
const addProduct = ()=>{
    const product = getInputValue('product-field');
    const quantity = getInputValue('quantity-field');
    // set local storage not proper way
    // localStorage.setItem(product,quantity);
    // set cart to local storage
    saveCartToLocalStorage(product,quantity);
    // display product
    addProductToDisplay(product,quantity)
}
const getCartFromLocalStorage =()=>{
    let savedCart=localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
};
const saveCartToLocalStorage =(product,quantity)=>{
   const cart = getCartFromLocalStorage();
   cart[product]=quantity;
   const cartStringified = JSON.stringify(cart);
//    console.log(cartStringified);
   //save cart to local storage
   localStorage.setItem("cart",cartStringified);
}
const addProductToDisplay = (product,quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li= document.createElement('li');
    li.innerText=`${product} : ${quantity}`;
    productContainer.appendChild(li);
}
const displayProduct =()=>{
    const cart = getCartFromLocalStorage();
    for(product in cart){
        const quantity= cart[product];
        addProductToDisplay(product,quantity);
    }
}
displayProduct();