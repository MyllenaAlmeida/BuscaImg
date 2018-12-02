//Função que pega o input do user e faz a pesquisa 
function searchImage(){
	var caracter = document.getElementById('entrada').value;
	//limpando o campo
	document.getElementById('entrada').value="";
	console.log(caracter);
	//verifica se a entrada é vazia, null, undefined, etc, para não fazer a pesquisa na API nesses casos
	if (!caracter){
		alert('Preencha o campo de busca.');
	}
	else{
		var API_KEY = '10857736-8d864d46a761c16b92f8e3296';
		var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+caracter;
		console.log(URL);
		$.getJSON(URL, function(data){
		if (parseInt(data.totalHits) > 0)$.each(data.hits, function(i, hit){ 
			//Exibindo valores na tela
		    	var img =[
		    		hit.pageURL
		    	];
		    	console.log(img);
		    	//Caso a parte do código abaixo não funcione, os resultados da pesquisa são abertos na pag oficial
		    	window.open(img);
		    	event.preventDefault();
		    	var div= document.querySelector('div');
		    	document.querySelector('.form').addEventListener('submit', function(event){
		    		var divisao= document.createElement('div');
		    		img.forEach(function(imagem){
		    			var divisao2= document.createElement('div');
		    			divisao2.textContent=imagem.value;
		    			divisao.appendChild(divisao2);

		    		});
		    		div.appendChild(div);
		    	});
		})
		else{
		    console.log('No hits');
			};
		});
	};
};
