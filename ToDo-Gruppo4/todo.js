$(() => {
    let compiti = [];
    $('#aggiungi').on('click', function() {
        let nuovoPunto = $('#puntoLista').val();
        if (nuovoPunto != '') {
            compiti.push(nuovoPunto);
            console.log(compiti);
            $('#puntoLista').val('');
            aggiungiLista();
        } else {
            alert('Non hai scritto nulla!');
        }
    })

    function aggiungiLista() {
        $('#lista').text('');
        for (i = 0; i < compiti.length; i++) {
            $('#lista').append(`<li class="list-group-item"> ${compiti[i]} <button type="button" id="cancella" class="${i}">X</button> </li>`);
        }
        $('#puntoLista').val('');
    }
    $('#lista').on('click', '#cancella', function() {
        $('#puntoLista').val('');
        $(this).closest('li').remove();
        var classe = $(this).attr("class");
        console.log(classe);
        compiti.splice(classe, 1);
        console.log(compiti);
    });
});