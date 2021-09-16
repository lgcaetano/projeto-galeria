import $ from 'jquery'
import { addToCallbackQueue } from '../core/includes'

$.fn.showPhotos = function(){
    
    let cidade = this.html()

    if (cidade == 'Todas'){
        $('[wm-city]').each(function(i, e){
            $(e).parent().css('display', 'block')
        })
        return
    }



    $('[wm-city]').each(function(i, e){
        $(e).parent().css('display', 'none')
    })

    $('[wm-city]').each(function(i, e){
        if($(e).attr('wm-city') == cidade){
            $(e).parent().css('display', 'block')
        }
    })
    
    return this
}


function addClassesToButton(query){
    query.addClass('btn')
    query.addClass('col-2')
    query.addClass('offset-1')
    // query.addClass('mx-3')
    query.addClass('text-white')
    query.addClass('bg-dark')
    query.css('font-size', '10px')
    // query.addClass('bg-dark')

}

function existsSameButton(city){
    $('button').each(function(i, e){
        if($(e).html() == city)
            return true
    })
    return false
}

const addedButtons = new Set

function renderButtons(){

    const cidades = []

    $('[wm-city]').each(function(i, e){
        let cidadeAtual = $(e).attr('wm-city')
        if(!cidades.includes(cidadeAtual)) cidades.push(cidadeAtual) 
    })

    cidades.forEach(cidade => {
        if(!addedButtons.has(cidade)){      
            const newButton = $('<button/>')
            newButton.html(cidade)
            newButton.on('click', function(){
                newButton.showPhotos()
            })
            addClassesToButton(newButton)
            $('.buttons-row').append(newButton)
            addedButtons.add(cidade)
        }
    })
}



addToCallbackQueue(renderButtons)