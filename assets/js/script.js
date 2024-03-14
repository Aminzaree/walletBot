// Guide: 
// meaning of Telegram.WebApp : An object or module in web programming to communicate with Telegram features.
// meaning of colorScheme : The color scheme currently used in the Telegram app. Either “light” or “dark”.

// This function is used to set the theme class on the HTML element of the web page.
function setThemeClass(){ 
    document.documentElement.className = Telegram.WebApp.colorScheme
}

// Controller (onEvent) for themeChnaged.
// When the theme changes, setThemeClass() is called.
Telegram.WebApp.onEvent("themeChanged", setThemeClass);
setThemeClass();