const app = new Vue (
    {
        el : '#app',
        

        
        data : {
            randomEmail : [],
        },
        method : {
            generateRandomEmail : function(){
                for (let i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function (response){
                    this.randomEmail.push(response.data)
                    });
                }
                
            } 
        }
    }); 
