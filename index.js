const link = "https://api.nasa.gov/planetary/apod?api_key=Zyr7bLccrIhZZgcecMhX5vecUnq9nU9lqOas2lIx"

$("#data").on ("change", function (){
 let data = $("#data").val()
 fazerRequisicao(link+ `&date=${data}`)
} ) 

function fazerRequisicao (url){
    $.ajax({
        url: url,
        success: function (responde){
    
            let imgElement = $("#image")
            let iframe     = $("#video")
            let explanation = $("#texto")
    
            imgElement.attr("src", responde.url )
            explanation.text(responde.explanation)
    
            if (responde.media_type == "video"){
                
                imgElement.hide()
                iframe.show()
                iframe.attr("src", responde.url )
    
            }
    
        }
    })
}







