# BuscaImg

A página acima tem a funcionalidade de fazer uma busca no banco de imagens do Pixabay,
tudo isso de acordo com a palavra digitada pelo usuário

-------- Tecnologias Usadas --------

HTML5;
CSS3;
Bootstrap 4;
Javascript;
Jquery;

-------- Definições Técnicas --------

Site responsivo;
Todas as imagens são do Pixabay;

-------- Como tudo foi criado? --------

HTML & CSS

A página HTML foi criada, usando uma nav e padrões de formulário para a criação de busca do usuário (campo de preenchimento que é obrigatório e o botão). Após esse feito toda a página  foi estilizada em CSS, obtendo responsividade.
  

Javascript & Jquery

Foi criada uma função chamada searchImage que pega o elemento digitado no campo do formulário, faz um tratamento para limpar esse campo. Depois, há uma estrutura condicional, para casos em que a entrada seja vazia, null, undefined, etc... isso permite que a busca por uma entrada desse tipo não seja efetuada e exiba uma mensagem pedindo ao usuário o preenchimento.

Caso a entrada cumpra os requisitos, o caracter recebido no início da função é concatenado com a URL e uma chave que retorna um resultado, esse resultado é percorrido (por ele ter muitas categorias de informações) e apenas a pageURL(URL da página com a imagem), ou seja, para cada imagem (com diversas informações) encontradas, nós acessamos a posição da URL e pegamos apenas esse dado.Após isso, esse valor é adicionado em um array e começa a ser exibido na página, através de métodos que criam uma div no html.
	
Obs.: Eu coloquei o método window.open, caso a parte do código não ocorra como o esperado, as páginas com o resultado serão
abertas diretamente no Pixabay.
	
	



