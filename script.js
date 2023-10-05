// Activity 3

// Declaration of variable
let password = '';

//check password length and print corresponding response
if(password.length == 8){
    console.log('Welcome');
}
else if(password.length <= 8 && password.length > 0){
    console.log('Password is too short');
}
else if(password.length >= 8){
    console.log('Too long password');
    console.log('Password should be 8 characters');
}
else{
    console.log('Please provide a password');
}