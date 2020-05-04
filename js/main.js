//lightbox javascript

lightbox.option({
    'resizeDuration': 200,
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true
  });

// javascript for search input 

const $lightboxPhoto = $('.row a');
$(".lightbox-image").hide().delay(200).fadeIn(300);


$('#search').on('keyup', function() {
    let $search = $('#search').val().toLowercase();
    for (let i = 0; i < $lightboxPhoto.length; i += 1) {
        let $inputPhoto = $lightboxPhoto.eq(i);
        if ($inputPhoto.attr("data-title").toLowercase().indexOf($search) === -1) {
            $inputPhoto.fadeOut(200);
        }
        if ($inputPhoto.attr("data-title").toLowercase().indexOf($search) !== -1) {
            $inputPhoto.hide().fadeIn(200);
        }
    }
    
});

    