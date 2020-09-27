const request = require('request')

const jokes = (address, callback) => {
    const url = 'https://theentertainmentcompany.azurewebsites.net/jokes'

    request({url:url, json:true }, (error, response)=>{
        if(error){
            callback('Unable to connect to Server!', undefined)
        }else {
            callback("",{
                joke: response.body.joke,
            })
        }

        //console.log("Here is a fact! " + response.body.name + "It is authored by: " + response.body.author + ".")

    })
}    

module.exports = jokes