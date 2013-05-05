
function loadnewdata(){
  $.getJSON("getdata.php",  // le fichier qui recevera la requête
    function(data){  // la fonction qui traitera l'objet reçu
      $("#title").html(data.title);
      $("#data").html(data.data);
  });
}

if(navigator.onLine){
loadnewdata();
$("#fetchata").click(function(){
	loadnewdata();
});
}
else{
	$("#title").html("Connection Error");
}
