window.onload = function () {
    var itens = document.querySelectorAll('.navbar div')
    itens.forEach(function(item) {
        item.onclick = function () {
            this.textContent = 'clicado';
        }
    })
};  