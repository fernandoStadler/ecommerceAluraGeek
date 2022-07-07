let footer = document.querySelector('footer');

function loadFooter() {
    footer.innerHTML = `
        <div class="footer">
            <div class="logo">
                <img src="assets/img/Logo.png" alt="" srcset="">
            </div>
            <div class="links">
                <a href="#">Quem somos nós</a>
                <a href="#">Politica de privacidade</a>
                <a href="#">Programa de fidelidade</a>
                <a href="#">Nossas lojas</a>
                <a href="#">Quero ser franqueado</a>
                <a href="#">Anuncie aqui</a>
            </div>
            <form class="contact-form">
                <input type="text" name="" id="name" placeholder="Nome">
                <textarea type="text" id="msg" cols="30" rows="10" placeholder="Escreva a sua mensagem"></textarea>
                <button class="btn-send">Enviar Mensagem</button>
            </form>
        </div>    
            <section class="developer-info">
            <p>Desenvolvido por Fernando Stadler</p>
            <p>2022</p>
            </section>
    `
} loadFooter();