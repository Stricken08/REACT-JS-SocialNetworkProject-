import React from "react";
import { Carousel } from "react-bootstrap";
export default function BootstrapCarousel() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.iecd.org/iecd2/wp-content/uploads/2018/09/carre-gris-Copie-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Rejoignez notre communauté en ligne</h5>
            <p>
              Communitize est l'endroit idéal pour se connecter avec des
              personnes partageant les mêmes idées. Avec des groupes de
              discussion et des forums animés, vous pouvez trouver des amis en
              ligne et discuter de vos passions communes. Inscrivez-vous
              aujourd'hui et découvrez une communauté en ligne vibrante et
              accueillante.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.iecd.org/iecd2/wp-content/uploads/2018/09/carre-gris-Copie-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h5>Restez connecté où que vous soyez</h5>
            <p>
              Communitize est accessible à tout moment, n'importe où. Avec notre
              application mobile, vous pouvez rester connecté à votre communauté
              en ligne où que vous soyez. Participez à des discussions, partagez
              des photos et des vidéos, et découvrez les dernières tendances de
              votre communauté en un seul endroit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.iecd.org/iecd2/wp-content/uploads/2018/09/carre-gris-Copie-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h5>Trouvez des opportunités passionnantes</h5>
            <p>
              Communitize est bien plus qu'un simple réseau social. Avec des
              groupes de discussion axés sur les intérêts, vous pouvez trouver
              des opportunités de carrière passionnantes, des événements locaux
              intéressants, et même des amis pour voyager avec vous.
              Joignez-vous à Communitize aujourd'hui et commencez à explorer un
              monde d'opportunités passionnantes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
