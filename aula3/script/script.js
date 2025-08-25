window.onload = function () {
    alert('hey :)');
    var itens = document.querySelectorAll('.navbar div')
    itens.forEach(function(item) {
        item.onclick = function () {
            this.textContent = 'clicado';
        }
    })
};  