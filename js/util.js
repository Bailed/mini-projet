/*
Librairie de fonction autre que celle liées à Flickr 
*/

function initAutocompleteLocation(numberCommune){
	$("#location").autocomplete({
		autoFocus : true,
		delay : 50,
		minLength : 3,		
		source : function(request, response){
					$.post("http://infoweb-ens/~jacquin-c/codePostal/commune.php?commune=",{commune:$("#location").val(), maxRows:numberCommune}, function(data)
					{
								response($.map(data, function(value)
								{
									return{
										label: value.Ville,
										value: value.Ville
									}
								}))
					}
				)}
	});

}