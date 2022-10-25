function buscarDetalhes(){
    //          https://URL da API/versão/end-point/RouteParams/de "?" para frente é o query params e algumas são obrigatórias, no exemplo o 
    //                                                          language é o parâmetro e pt-BR é o seu valor, o "&" é o separador dos parâmetros
    //   key: live_sCsdkjpCymzUh2kQFFyVx2maPSTTY8FwSZw0fVAeMgx5mS6l7jd8MNXuWIKb5NZY 
    var lista = ['beng','bamb','bali', 'amau', 'asho', 'abys']
    var raca = lista[Math.floor(Math.random() * lista.length)]
    var url = "https://api.thecatapi.com/v1/images/search?api_key=live_sCsdkjpCymzUh2kQFFyVx2maPSTTY8FwSZw0fVAeMgx5mS6l7jd8MNXuWIKb5NZY&breed_ids="+raca+"&SIZE=max"
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET",url, false);
    xhttp.send(); 

    var retorno = JSON.parse(xhttp.responseText);
    var foto_gato = retorno[0].url
    var temperamento = retorno[0]["breeds"][0].temperament
    //var raca = retorno[0].breed
    var altura = retorno[0].height
    var largura = retorno[0].width
    var identificador = retorno[0].id

    console.log("Foto do Gato: " + foto_gato);
    console.log("Temperamento: " + temperamento);
    console.log("Raça: " + raca);
    console.log("Altura: " + altura)
    console.log("Largura: " + largura)
    console.log("Id: " + identificador)
    console.log(retorno)
    //if (breed){ document.getElementById("gato_foto").src=retorno[0].url } else { buscarDetalhes()}
    document.getElementById("gato_foto").src=retorno[0].url
    document.getElementById("nome_raca").innerHTML="Raça: "+retorno[0]["breeds"][0].name
    document.getElementById("temperamento_raca").innerHTML="Temperamento: "+retorno[0]["breeds"][0].temperament
    
    return(foto_gato)
}
 


function curtidas(foto_gato) {
    const imagem = document.createElement("img");
    const construtor = document.getElementById("historic")
    construtor.src=foto_gato
    console.log("Curtida")
}