window.addEventListener("load", () => {
    const options = {
        // el: element
        el: '#app',
        // data: contiendra toutes les variables de notre application
        data: {
            message: 'Hello World From Data !',
            date: new Date()

        }
    }
    // viewmodel
    const vm = new Vue(options);  
});
