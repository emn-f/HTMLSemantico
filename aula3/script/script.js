window.onload = function () {
    var itens = document.querySelectorAll('.navbar div')
    itens.forEach(function (item) {
        item.onclick = function () {
            var textoOriginal = this.textContent;
            this.textContent = 'CLICOU!';
            var el = this;
            setTimeout(function () { el.textContent = textoOriginal }, 500);
        }
    })
};  