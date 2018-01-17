function handle (request, response) {
    response.end(`Users`);
    module.exports = {
        name:function(){
            console.log('Danilo')
        },
        lastname:function(){
            console.log('Araújo')
        },
        nickname:function(){
            console.log('Van Helsing')
        },
        fone:function(){
            console.log('(11) 95488-7873') 
        },
        date:function(){
            console.log('12/01/1992')
        },
        sex:function(){
            console.log('male')
        },
        email:function(){
            console.log('araujotharssis@gmail.com')
      
          }
    } 
}


exports.user = handle;  