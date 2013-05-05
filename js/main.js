//load Data with unique ID
function loadiddata(id){
  $.getJSON("getdata.php",{"id":id}, // le fichier qui recevera la requête
    function(data){  // la fonction qui traitera l'objet reçu
      $("#title").html(data.title);
      $("#data").html(data.data);
  });
}
//load random Data
function loadnewdata(){
  $.getJSON("getdata.php",
    function(data){
      $("#title").html(data.title);
      $("#data").html(data.data);
      window.location.hash = "#"+data.id;
  });
}

if(location.hash.length > 1){
	id = location.hash.substr(1);
	loadiddata(id);
}
else{
loadnewdata();
}
//Button New Data
$("#fetchata").click(function(){
	loadnewdata();
});