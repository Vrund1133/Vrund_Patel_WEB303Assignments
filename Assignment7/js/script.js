$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        
        var photo = $("#img");
        $('.photo-box').on('click',  function(e){
            $(modal).show()
            $(photo).attr('src', $('.active').children('.images').map(function () {
                return $(this).attr('src')
                }).get());
        })
        
    });
    });

