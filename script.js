//1.Creating request object
var req = new XMLHttpRequest();

//2.Opening request connenction
req.open("GET","https://jsonplaceholder.typicode.com/users");

//3.Send a request
req.send();

//4.Data after request
req.onload = function(){
    var data=JSON.parse(this.response);
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}