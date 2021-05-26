fetch("https://jsonplaceholder.typicode.com/users")
.then(got => got.json())
.then(give =>  {  
  var container = document.getElementById('container');

      for(object of give) {
        const {street, city,suite, zipcode}=object.address;
     // console.log(object.address);

      // element creation 
     var div = document.createElement('div');
     div.style.width = "230px";
     div.style.height = "290px";
     div.style.border = "1px solid blue"
     var p1 = document.createElement('p');
     var p2 = document.createElement('p');
     var p3 = document.createElement('p');
     var p4 = document.createElement('p');
     var p5 = document.createElement('p');
     var p6 = document.createElement('p'); 
      // inner html

       p1.textContent = "NAME :" + object.name;
       p2.innerHTML = "USERNAME : "+ object.username;
        p3.innerHTML = "EMAIL : " + object.email;



          p4.innerHTML = "ADDRESS : " + street +" SUITE : "+suite + "  CITY  :  " +city + " zipcode : " +zipcode 
          p5.innerHTML = " Phno : " + object.phone ;
          p6.innerHTML = " website :  " + object.website;

        // appending elements
          div.append(p1,p2,p3,p4,p5);  
          container.append(div);       
      }

})
