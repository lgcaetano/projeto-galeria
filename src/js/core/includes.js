import $ from 'jquery'

function loadIncludes(){

    $('[wm-include]').each(function() {
        
        let url = $(this).attr('wm-include')

        $(this).load(url, function(){
            $(this).removeAttr('wm-include')
        })

    })
}

loadIncludes()