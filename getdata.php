<?php
try{
$bdd = new PDO('mysql:host=127.0.0.1;dbname=databasename', 'username', 'password');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$reponse = $bdd->query('SELECT * FROM data');

$count = $reponse->rowCount();
//echo $count;

if(isset($_GET['id'])){
$id = $_GET['id'];
}else{
$id = rand(1,$count);
}
$reponse = $bdd->query('SELECT * FROM data WHERE `id`='.$id);
// On affiche chaque entrée une à une
if ($donnees = $reponse->fetch())
{	
	$data['id'] = $donnees['id'];
	$data['title'] = $donnees['title'];
	$data['data'] = $donnees['data'];
	header('Content-Type: application/json');
 	echo json_encode($data);

}
 
$reponse->closeCursor();
?>