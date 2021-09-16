import $ from 'jquery'



const sucessCallbacks = []

export function addToCallbackQueue(cb){
    sucessCallbacks.push(cb)
}

function executeCallbacks(){
    sucessCallbacks.forEach(cb => cb())
}


function loadIncludes(){

    $('[wm-include]').each(function() {
        
        let url = $(this).attr('wm-include')

        $(this).load(url, function(){
            $(this).removeAttr('wm-include')
            executeCallbacks()
        })

    })

    setTimeout(loadIncludes, 100)
}

loadIncludes()