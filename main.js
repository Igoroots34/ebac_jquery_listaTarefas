$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const adicionarTarefa = $('#nome-tarefa').val()
        const novoItem = (`<li>${adicionarTarefa}</li>`)
        $().appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#nome-tarefa').val('')
        console.log('submit')
    })

    $('#list').on('click', 'li', function(){
        $(this).css({"text-decoration": "line-through"})
    })
})