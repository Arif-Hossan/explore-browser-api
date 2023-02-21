//show alert message
const showAlert = () =>{
    alert("Hello, Brother");
}

// Show Confirm message which will return (Confirm) a boolean result
const showConfirm = () =>{
   const decision= confirm('Are you sure ?');
   console.log("Decision ",decision);
   // check truthy value using two !!
   if (!!decision){
    alert("Please pay the registration fee");
    console.log(`Welcome for our journey`);
   }else {
    console.log(`DGM`);
   }
}
// show prompt dialog for input something
const showPrompt= () =>{
    const name = prompt("Give your name");
    const number = prompt("Enter your number","+8801........");
    if (!!name){

        console.log(`Welcome to the World .This is your info`, name,number);
    }
    else {
        console.log(`Bye Bye from prompt`);
    }
}