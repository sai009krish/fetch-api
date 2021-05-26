fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res => res.json())
.then(data => {
 var main=document.getElementById('main');
for(obj of data){
    var div= document.createElement("div");
    div.style.width="190px";
    div.style.height="190px";
    div.style.margin="5px";
    div.style.border="2px solid orange";
     
    var p4 = document.createElement("p");
    var p1 = document.createElement("p");
  var p2 = document.createElement("p");
   var p3 = document.createElement("p");
   
    
     p1.textContent = "TITLE : " + obj.title;
     p2.textContent = "userid : " + obj.userid;
     p3.textContent =  "STATUS : " + obj.completed;
      p4.textContent = "ID : " + obj.id;
      
     div.append(p4,p2,p3,p1);
     main.append(div);
}
//console.log(main);
console.log(obj);
//console.log(data);


})