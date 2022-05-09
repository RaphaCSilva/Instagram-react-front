import React, {useState} from "react";
import Story from "./componentes/story";
import Post from "./componentes/post";
import Sugestao from "./componentes/sugestao"
import User from "./componentes/user"

function App() {
  const [story, setStory] = useState([
    {src: "assets/img/9gag.svg",name: "9gag"},{src: "assets/img/meowed.svg",name: "meowed"},{src: "assets/img/barked.svg",name: "barked"},
    {src: "assets/img/nathanwpylestrangeplanet.svg",name: " nathanwpylestrangeplanet"},{src: "assets/img/wawawicomics.svg",name: "wawawicomics"},
    {src: "assets/img/respondeai.svg",name: "respondeai"},{src: "assets/img/filomoderna.svg",name: "filomoderna"},{src: "assets/img/memeriagourmet.svg",name: "memeriagourmet"}
  ]);
  const [post, setpost] = useState([
    {userphoto: "assets/img/meowed.svg", username: "meowed", postphoto: "assets/img/gato-telefone.svg", curtidaphoto: "assets/img/respondeai.svg", first: "respondeai", qtd: "101.523"},
    {userphoto: "assets/img/barked.svg", username: "barked", postphoto: "assets/img/dog.svg", curtidaphoto: "assets/img/adorable_animals.svg", first: "adorable_animals", qtd: "99.159"}
  ]);
  const [sugest, setsugest] = useState([
    {sgstimg: "assets/img/bad.vibes.memes.svg", sgstname: "bad.vibes.memes", motivo: "Segue você"},
    {sgstimg: "assets/img/chibirdart.svg", sgstname: "chibirdart", motivo: "Segue você"},
    {sgstimg: "assets/img/razoesparaacreditar.svg", sgstname: "razoesparaacreditar", motivo: "Novo no Instagram"},
    {sgstimg: "assets/img/adorable_animals.svg", sgstname: "adorable_animals", motivo: "Segue você"},
    {sgstimg: "assets/img/smallcutecats.svg", sgstname: "smallcutecats", motivo: "Segue você"}
  ]);
  return (
    <div class="root">
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="assets/img/logo.png" />
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>

    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          {story.map((obj, indice) => {
            return <Story src={obj.src} name = {obj.name} key={indice}/>;
          }
          )}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <div class="posts">
          {post.map((obj, indice) => {
            return <Post userphoto={obj.userphoto} username = {obj.username} postphoto = {obj.postphoto} curtidaphoto = {obj.curtidaphoto} first = {obj.first} qtd = {obj.qtd}  key={indice}/>;
          }
          )}
        </div>
      </div>

      <div class="sidebar">
        <User photo = "assets/img/catanacomics.svg" name = "catanacomics" subname = "Catana"/>
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {sugest.map((obj, indice) => {
            return <Sugestao sgstimg={obj.sgstimg} sgstname = {obj.sgstname} motivo = {obj.motivo} key={indice}/>;
          }
          )}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>

    <div class="fundo-mobile">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  </div>
  );
}

export default App;
