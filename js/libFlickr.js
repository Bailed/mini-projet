/*

Librairie jQuery - Propose des méthodes qui appels les ervices flick 
et qui renvoie des photos au format JSON
Enjoy maggle !

*/

// Retourne des photos en fonction de la location que tu demandes
// Number 		: le nombre que photos que tu veux
function getPhotosByLocation()
{
	// ON affiche un gif de loading
	$("#loading").fadeIn(500);

	// On vide la div au cas où il y est déjà des photos (dû à une précédente recherche)
	$("#div_photo").empty();

	// On récupère la localisation choisie par l'utilisateur. Il faut que la localisation soit entrée sinon on balance une erreur
	var location = $("#location").val();
	if(location == "")
	{
		alert("(faire une alert bootstrap) - Merci d'entrer une localisation");
		$("#loading").fadeOut(500);
		return -1;
	}

	// On récupère le nombre de photos choisis par l'utilisateur 
	var number = $("#number").val();
	
	// Construction de l'url vers les informations json (tag = location, per_page = number)
	var url = 	"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=621ee8228618e14a07c4de168ab2bd0e&"+
				"tags="+location+
				"&"+
				"per_page="+number+
				"&format=json&nojsoncallback=1"
				;

	// On récupère le JSON généré par Flickr
	$.getJSON(url, function(data){
		if(data['stat'] == "fail") // on détecte une erreur dans la réponse de flickr
		{
			// Faire une alert bootstrap plutôt
			alert("Erreur provenant de la reponse flickr. Regardez la console.")

			console.log(data['message'])
		}else
		{
			// Vérifions qu'il y a des images qui sont retournées
			if(data.photos.total <= 0)
			{
				alert("(faire alert bootstrap + fenetre modale) - Aucune photo.")
				$("#loading").fadeOut(500);
				return -1;
			}

			$.each(data.photos.photo, function(index, object){
				var new_photo_div 	= "";
				// Structure pour construire le lien source d'une photo : https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
				var init_div_image	= "<div class='image col-md-4 padding-buffer height-300' onclick='viewImage("+ object.id +")'>"
				var display_photo 	= "<img class='middle-center img-responsive' src='https://farm"+object.farm+".staticflickr.com/"+object.server+"/"+object.id+"_"+object.secret+"_n.jpg'/>";
				var end_div_image 	= "</div>";
				new_photo_div = init_div_image+display_photo+end_div_image;
				$("#div_photo").append(new_photo_div);
			})
		}
		// On va parcourir chacune des photos
		/*$.each(data.photo, function(index, object){
			alert(object);
			console.log(object);
		})*/
	});
	
	$("#loading").fadeOut(500);
	setInterval(function(){ deplace(); }, 1000);
}

function viewImage(idImage)
{
	var url_getViewImage = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=621ee8228618e14a07c4de168ab2bd0e&"+
	"photo_id="+idImage+
	"&format=json&nojsoncallback=1"

	/* Récupération des données relatives à la photo qui a été cliquée */
	$.getJSON(url_getViewImage, function(data){
		if(data.stat == "fail" && data.code == 1)
		{
			alert("Afficher alert avec bootstrap - Erreur aucune photo trouvée");
			return 0;
		}

		/* Récupération des informations propres à la photos à savoir : "id", "secret", "server", "farm", "dateuploaded", "isfavorite", "license", "safety_level", "rotation", "originalsecret", "originalformat" */
		image = data.photo;

		var display_photo 	= "<img src='https://farm"+image.farm+".staticflickr.com/"+image.server+"/"+image.id+"_"+image.originalsecret+"_o.jpg'/>";
		var display_txt = "<div class='display-txt'>blablabla</div>";
		$("#viewImage").html(display_photo);
		$("#viewImage").html(display_txt);

		$("#viewImage").fadeIn(500);

	});
	

	$("#viewImage").fadeIn(500);
}
