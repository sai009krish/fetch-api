fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => {
   var content = document.getElementById('content') ;  
   for(object of data) {
       console.log(object);
       var div = document.createElement('div');
       var p1 = document.createElement('p');
       var p2 = document.createElement('p');
       var p3 = document.createElement('p');
       var p4 = document.createElement('p');
       var p5 = document.createElement('p');

       p1.innerHTML = " ID : "+object.id;
       p2.innerHTML = " Name : " + object.name;
        p3.innerHTML = " Email : " + object.email;
        p4.innerHTML =  " Body : " + object.body;
        p5.innerHTML = " Postid : " + object.postId
          div.append(p1,p2,p3,p4,p5);
          content.append(div);

});


   }