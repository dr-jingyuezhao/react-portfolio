import React from "react";
import './style.css';

function Home() {
  const image = require(`../../images/my-wd-img.jpg`);
  return (
    <div>
      <div className="jumbotron">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-5 my-auto text-center">
              <div className="mx-auto">
                <h1 className="jumboText mb-5">Welcome to my site!</h1>
                <h2 className="jumboText mb-5">My name is Jingyue.</h2>
                <h3 className="jumboText mb-5">I'm a front-end web developer.</h3>
                <a href="/#contact" className="btn btn-outline-warning btn-xl js-scroll-trigger"
                  role="button">Let's collaborate!</a>
              </div>
            </div>
            <div className="col-lg-7 my-auto">
              <div className="pic-container">
                <img src={image} className="img-fluid" alt="working on projects at desk" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
        ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
        elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div >
  );
}

export default Home;
