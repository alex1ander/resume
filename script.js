


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

    let name = "Theme";

    if(document.cookie == 'Theme=dark'){
        jQuery( "body" ).removeClass( "brightTheme" ).addClass( "darkTheme" );
    }

    if(document.cookie == 'Theme=bright'){
        jQuery( "body" ).removeClass( "darkTheme" ).addClass( "brightTheme" );
    }

    jQuery(".buttonDarkTheme" ).click(function() {
        let value = 'dark';
        jQuery( "body" ).removeClass( "brightTheme" ).addClass( "darkTheme" );
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    });

    jQuery( ".buttonBrightTheme" ).click(function() {
        let value = 'bright';
        jQuery( "body" ).removeClass( "darkTheme" ).addClass( "brightTheme" );
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    });