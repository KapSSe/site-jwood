        $(document).ready(function () {
            $('#menu').click(function () {
                $('nav').fadeToggle('slow');
            });
            $('.navigaton_item').click(function () {
                $('#menu').hide();
            });
        });