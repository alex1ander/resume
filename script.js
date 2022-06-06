


jQuery('.changeLanguageEN').click(function(e) {
    $.ajax({
        type: "POST",
        url: "en/index.php",
        success: function(result){
            $('body').html(result);
        }
    })
});

jQuery('.changeLanguageRU').click(function(e) {
    $.ajax({
        type: "POST",
        url: "/index.php",
        success: function(result){
            $('body').html(result);
        }
    })
});