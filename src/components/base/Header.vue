<template>
<div class="header">
    <div class="barra_superior">
        <b-container class="barra_superior__container">
        <p class="barra_superior__data-atual"> {{ dataAtual }}</p>
        <nav>
            <ul class="barra_superior__lista">
                <li class="barra_superior__item">
                    <a href="https://www.facebook.com/Sindibrj/" ><img class="barra_superior__imagem" src="src\assets\logoFacebook.png" alt="LogoFacebook"></a>
                </li>
                <li class="barra_superior__item">
                    <a href="https://twitter.com/SINDIBRJ" ><img class="barra_superior__imagem" src="src\assets\logoTwitter.png" alt="LogoTwitter"></a>
                </li>
            </ul>
        </nav>
        </b-container>
    </div>
        
    <div class="logo">
        <div class="imagem">
           <img src="src\assets\Logo-SINDIBRJ.PNG" alt="LogoDoSINDIBRJ">
        </div>
    </div>
        <b-navbar class="menu">
        <b-container>
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item-dropdown text="Sobre" bottom>
                    <b-dropdown-item to="Historia">Historia do sindicato</b-dropdown-item>
                    <b-dropdown-item to="Missao">Missão</b-dropdown-item>
                    <b-dropdown-item to="Estatuto">Estatuto</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item to="Contato">Contato</b-nav-item>

                <b-nav-item-dropdown text="Gestão" bottom>
                    <b-dropdown-item to="Diretoria">Diretoria</b-dropdown-item>
                    <b-dropdown-item to="Agenda">Agenda de reuniões</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Filiar-se" bottom>
                    <b-dropdown-item to="ImportanciaBeneficios">Importancia e Beneficios</b-dropdown-item>
                    <b-dropdown-item to="Filiacao">Filiação - Ficha online</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-container> 
        </b-navbar>
</div>
</template>


<script>
export default {
    data() {
        return {
            dayName: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            monName: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"],
            now: new Date,
        }
    },
    computed: {
        dataAtual() {
            return `${this.dayName[this.now.getDay()]}, ${this.now.getDate ()} de ${this.monName[this.now.getMonth()]} de ${this.now.getFullYear ()}`
        }
    }
}
</script>


<style lang="scss">
    .barra_superior {
        background-color: rgb(240, 123, 255);

        &__container {
            display: flex;
            justify-content: flex-end;

            nav {
                display: flex;
                justify-content: flex-end;
            }
        }
        
        &__data-atual {
            font-weight: 600;
        }

        &__lista {
            list-style-type: none;
            margin: 0;
            display: flex;
            justify-content: right;
            width: 90%;
        }

        &__item {
            padding: 5px;
        }

        &__imagem{
            width: 30px;
        }

        &__data-atual {
            display: flex;
            align-items: center;
            margin: 0;
        }
    }

    .logo {
        background-color: rgb(255, 255, 255);
        padding-left: 90px
    }

    .imagem {
        width: 90%;
    }
        
    .navbar {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        width: 100%;
        padding: 0;
        border-bottom: solid #ddc2dd;
        box-shadow: 0px 0px 10px #ddc2dd;
    }

    .navbar-nav {
        width: 100%;
    }

    .nav-link {
        color: rgb(100, 100, 100);
        font-weight: bold;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link[aria-expanded="true"] {
        outline: none;
        color: white;
        background-color: rgb(160, 113, 160);
    }

    .nav-item {
        font-size: 0.8rem;
        height: 50px;
        width: 100%;
        border-right: solid #ddc2dd 1px;
        text-transform: uppercase;
    }
    .nav-item:last-child {
        border-right: none;
    }

    .nav-item:hover{
        background-color: rgb(170, 113, 170);
    }

    .dropdown-menu {
        width: 100%;
    }
    .dropdown-item {
        font-size: 0.8rem;
    }

    .dropdown-item:hover {
        background-color: rgb(235, 198, 235);
    }
</style>
