// Guide: 
// meaning of Telegram.WebApp : An object or module in web programming to communicate with Telegram features.
// meaning of colorScheme : The color scheme currently used in the Telegram app. Either “light” or “dark”.

// This function is used to set the theme class on the HTML element of the web page.
// function setThemeClass(){ 
//     document.documentElement.className = Telegram.WebApp.colorScheme
// }

// Controller (onEvent) for themeChnaged.
// When the theme changes, setThemeClass() is called.
// Telegram.WebApp.onEvent("themeChanged", setThemeClass);
// setThemeClass();


function changePaymentMethod(event){
    let paymentMethodItem = document.getElementsByClassName("paymentMethod");
    let i;
    for(i = 0; i < paymentMethodItem.length; i++){
        paymentMethodItem[i].classList.remove("active")
    }
    event.classList.add("active");
}

function changeAccountType(event){
    let accountTypeItem = document.getElementsByClassName("accountType");
    let i = 0;
    for(i = 0; i < accountTypeItem.length; i++){
        accountTypeItem[i].classList.remove("active");
    }
    event.classList.add("active");
}
