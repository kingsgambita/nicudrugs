$('#openAll').on('click', function() {
    $('.openMe').trigger('expand');
});
$('#closeAll').on('click', function() {
    $('collapsible.openMe').trigger('collapse');
});

$('#closeAll').on('click', function() {
    $('.openMe').each(function() {
        var coll = $(this);
        coll.trigger('collapse'); 
    });
});