@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    border: none;
    text-decoration: none;
}

html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* MENU */



.content {
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1f1e1f;
    position: fixed;
    padding-left: 30rem;
}

.logo {
    width: 70px;
    height: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
}


.logo h3 {
   color: white;
   font-size: 1.6rem;

}


.logo img {
    width: 100%;
    height: 100%;
}

.content .list-menu {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content .list-menu li a{
    padding-top: 3rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: rgb(255, 255, 255);
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 200ms ease-in;
}

.content .list-menu li a:hover{
    background-color: #333333;
    border-bottom: 4px solid #ffc506;  
    color: #ffc506;
}

/* Primeira Seção */

.first-section{
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.8)), url(./img/fundopizza.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.first-section .conteudo-principal{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.first-section h1{
    color: #ffc506;
    font-size: 6rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Indie Flower', cursive;
}

.first-section h2{
    color: rgb(177, 177, 177);
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Indie Flower', cursive;
    margin-bottom: 3rem;
}

.btn button {
    width: 230px;
    height: 60px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #ffc506;
    border-radius: 10px;
    color: black;
    font-weight: 700;
    transition: all 400ms ease-in;
    margin-top: 5rem;
}

.btn button:hover {
    border: 1px solid #ffc506;
    background-color: transparent;
    color: #ffc506;
}

.btn {
    width: 480px;
    display: flex;
    justify-content: space-between;
   
}

/* CATALOGO */

.catalogo {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(12, 12, 12, 0.8), rgba(15, 15, 15, 0.8));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.catalogo h2 {
    font-size: 5rem;
    color: #e6e6e6;
    text-transform: uppercase;
}

.itens-catalogo {
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 550px));
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.itens-catalogo.info {
    background-color: rgb(221, 221, 221);
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.itens-catalogo .info h3 {
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-decoration: underline;
}

.itens-catalogo .info h4 {
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 150px 150px;
    margin-left: 6rem;
}

.itens-catalogo .info h4 span{
    font-size: 1.6rem;
    color:#585858;
    margin-left: 1.5rem;
    text-decoration: underline;
}

.itens-catalogo div {
    background-color: #5e5252;
    box-shadow: 0px 0px 4px 1px ;
}

.itens-catalogo img {
    width: 100%;
    height: 200px;
}

.itens-catalogo .info .pedir {
    width: 200px;
    height: 35px;
    margin-top: 0.5rem;
    background-color: #ffc506;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: rgb(0, 0, 0);
    transition: all 200ms ease-in;
}

.itens-catalogo .info .pedir:hover {
    background-color: #5e5252;
    color: rgb(255, 255, 255);
}

/* Sobre nós */

.sobre-nos {
    background-color: #1f1e1f;
    width: 100%;
    padding-bottom: 5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contentsobre {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main{
    
    display: flex;
    justify-content: space-between;
}

.sobre-nos img {
    width: 400px;
    height: 400px;
    margin-top: 10rem;
    margin-left: 10rem;
    border: 2px solid rgb(155, 155, 155);
}

.contentsobre h2 {
   font-size: 6rem;
   margin-bottom: 1rem;
   font-family: 'Indie Flower', cursive;
}

.contentsobre p {
   text-align: center;
   font-size: 1.8rem;
   width: 600px;
}

.contatos {
    width: 100%;
    background-color: #1f1e1f;
    display: flex;
    flex-direction: column;
    justify-content: Center;
    align-items: center;
    font-size: 1.8rem;
    color: white;
    padding-bottom: 4rem;
}

.contatos h3 {
   font-size: 6rem;
   margin-bottom: 3rem;
   font-family: 'Indie Flower', cursive;
}

.contatos-secao {
    width: 650px;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
}

.contatos-secao i{
    margin-right: 1rem;

}

.contatos-secao div{
    cursor: pointer;
}

.contatos-secao div:hover{
    color: #ffc506;
}

footer {
    height: 25px;
    background-color: #000000;
    color: rgb(255, 255, 255);
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1200px) {
    .main {
        display: block;
        
    }

    .sobre-nos img {
        width: 600px;
        margin-left: -2px;
    }

    
}

@media (max-width: 980px) {
   
    html {
        font-size: 50%;
    }
    
}

@media (max-width: 870px) {
    .content {
        justify-content: space-between;
        padding: 0px 40px;
    }

    .content .list-menu{
        display: none;
    }

    .one,
    .two,
    .three {
        width: 100%;
        height: 4px;
        background-color: white;
        margin: 6px auto;

        transition-duration: 0.5s ;
    }

    .menu-toggle {
        width: 40px;
        height: 30px;
        

    }

    .content.on {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1f1e1f;
        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content.on .logo {
        display: none;
    }

    .content.on .menu-toggle {
        position: absolute;
        right: 40px;
        top: 20px;
    }

    .content.on .list-menu {
        display: block;
        
    }

    .content.on .list-menu li {
        text-align: center;
        display: flex;
        justify-content: center;
        
    }

    .content.on .list-menu li a {
        font-size: 4rem;
        display: block;
    }


    .content.on .menu-toggle .one {
        transform: rotate(45deg) translate(8px, -7px);
    }
    .content.on .menu-toggle .two {
        opacity: 0;
    }

    .content.on .menu-toggle .three {
        transform: rotate(-45deg) translate(20px, -6px);
    }

    .contatos-secao {
        display: block;
        text-align: center;
        font-size: 2rem;
        
    }

    .contatos-secao div {
        margin: 2rem;
        
    }

}


@media (max-width: 720px) {
    .conteudo-principal h1 {
        width: 350px;
        text-align: center;
    }
}

@media (max-width: 645px) {
    .sobre-nos img {
        width: 400px;
        margin-left: 10px;
    }

    .contentsobre p {
        text-align: center;
        width: 400px;
     }

     .btn {
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }

     .contatos-secao {
       width: 200px;
        
    }
    .conteudo-principal h2 {
        width: 200px;
        text-align: center;
    }

    .btn {
        width: 150px;
    }
}

@media (max-width: 399px) {

    .conteudo-principal h1 {
       font-size: 3rem;
    }
    .conteudo-principal h2 {
       font-size: 2rem;
    }


    .sobre-nos img {
        width: 300px;
        height: auto;
        margin-left: 10px;
    }

    .contentsobre p {
        text-align: center;
        width: 200px;
     }

    
}


