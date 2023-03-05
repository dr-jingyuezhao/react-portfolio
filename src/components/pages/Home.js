import React from "react";
import Hero from "../Hero";

const styles = {
  jumbotron: {
    position: "relative",
    width: "100%",
    paddingTop: 150,
    paddingBottom: 80,
    backgroundImage: url("../images/coding-wallpaper-3.jpg"),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  jumboText: {
    position: "relative",
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    textShadow: "4px 4px 8px white",
  },
  btnXl: {
    fontSize: 24,
    fontWeight: "bold",
    padding: "15px 45px",
    borderRadius: 300,
    marginBottom: 50,
  }
};

function Home() {
  return (
    <div>
      <div className="jumbotron" style={styles.jumbotron}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-5 my-auto text-center">
              <div className="mx-auto">
                <h1 className="jumboText mb-5" style={styles.jumboText}>Welcome to my site!</h1>
                <h2 className="jumboText mb-5" style={styles.jumboText}>My name is Jingyue.</h2>
                <h3 className="jumboText mb-5" style={styles.jumboText}>I'm a front-end web developer.</h3>
                <a href="/#contact" className="btn btn-outline-warning btn-xl js-scroll-trigger" style={styles.btnXl}
                  role="button">Let's collaborate!</a>
              </div>
            </div>
            <div className="col-lg-7 my-auto">
              <div className="pic-container">
                <img src="../../images/my-wd-img.jpg" className="img-fluid" alt="my picture" />
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
