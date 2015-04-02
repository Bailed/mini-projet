// Fonction qui se charge de lancer les animations chronologiquement
			function launch(){
				setTimeout("appTitle()", 1000);
				setTimeout("deplace()",2000);
				setTimeout("appHeader()",3000);
				setTimeout("appText()",4000);
				setTimeout("enableOpen()",5500);
				setTimeout("appRetour()", 7500);
				setTimeout("appSlider()",4500);
				setTimeout("appV(1)", 5000);
				setTimeout("appV(2)", 5500);
				setTimeout("appV(3)", 6000);
				setTimeout("appV(4)", 6500);
				setTimeout("appV(5)", 7000);
				setTimeout("appV(6)", 7500);

			}

			// Fonction pour faire varier la luminositÃ© de chargement en cours
			function changeOpaLoading(x){
				document.getElementById("loading").style.opacity = x;
			}

			// Fonction pour faire apparaÃ®tre le titre
			function appTitle(){
				document.getElementById("logo").style.opacity = "1";
			}

			// Fonction pour faire apparaÃ®tre la flÃ¨che pour rejouer l'animation
			function appRetour(){
				document.getElementById("retour").style.opacity = "0.5";
			}

			function hoverRetour(x){
				document.getElementById("retour").style.opacity = x;
			}

			// Fonction qui permet de sÃ©parer l'image d'accueil en deux (effet de porte)
			function deplace(){
				document.getElementById("top_part").style.top = "-55%";
				//document.getElementById("top_part").style.borderRadius = "15%";
				document.getElementById("bot_part").style.top = "95%";
				document.getElementById("search-l").style.top = "0em";
				//document.getElementById("bot_part").style.borderRadius = "5%";
				// document.getElementById("bg_top").style.top = "-42%";
				// setTimeout("appVign()", 1000);
				// setTimeout("deplaceVignettes()", 1500);
			}

			// Fonction qui place les vignettes une fois la porte ouverte
			function deplaceVignettes(){
				document.getElementById("vignettes").style.top = "250px";
			}

			// Fonction qui ferme la porte 
			function retour(){
				document.getElementById("bg_top").style.top = "0px";
				document.getElementById("bg_bottom").style.top = "21%";
				enableOpen();
				setTimeout("appOpen()", 4000);
			}

			// Fonction pour faire apparaÃ®tre les vignettes
			function appVign(){
				document.getElementById("vignettes").style.opacity = "1";
			}

			// Fonction permettant d'afficher une vignette en fonction de l'id de la div
			function appV(x){
				document.getElementById("v"+x).style.opacity = "1";
			}

			// Fonction qui permet d'afficher le trait 
			function appHeader(){
				document.getElementById('trait').style.opacity = "1";
			}

			// Fonction qui permet d'afficher et le pve_progress/paragon serv et le motif			
			function appText(){
				document.getElementById('text1').style.width = "245px";
				document.getElementById('text2').style.width = "260px";
				document.getElementById('motif').style.opacity = "1";
			}

			// Function permettant d'afficher le slider des derniers boss
			function appSlider(){
				document.getElementById('boss_last').style.opacity = "1";
			}