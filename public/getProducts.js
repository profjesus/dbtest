function get (path) {
  return window.fetch(path)
  .then(function(response) {
    return response.json();
  })
};

function getProducts () {
  get('/products').then(function(prods) {
    //Creating table
    var table="<table>";
  	table+="<thead><th>id</th><th>Name</th><th>Section</th></thead>";
    for (var i = 0; i < prods.length; i++) {
      table+="<tr><td>"+prods[i].id+"</td><td>"+prods[i].name+"</td><td>"+prods[i].section+"</td></tr>";
    }
  	table+="</table>";
    //Showing the table inside table
    document.getElementById("result").innerHTML = table;
  });
};

getProducts();
