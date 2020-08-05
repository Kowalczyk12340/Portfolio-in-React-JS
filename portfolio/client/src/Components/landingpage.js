import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import photo1 from "./img/logo.png";
import Footer from "./footer";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="banner-text">
            <img src={photo1} alt="avatar" className="avatar-img" />
            <h1>Ginger Coder</h1>

            <hr />

            <p>Junior Fullstack Web Developer</p>
            <p>
              Web-Development | Bootstrap | JavaScript | React JS |
              Frontend-Development | HTML/CCS/JS | Backend-Development |
              App-Development | Spring-Boot | PHP - Laravel | Express JS |
              Graphics 2D Design | Adobe Photoshop | Corel-Draw | Inkscape
            </p>

            <div className="social-links">
              {/* Facebook */}
              <a href="https://www.facebook.com/marcin.kowalczyk.5074">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/Kowalczyk12340"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/marcin_kowalczyk_/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>

              {/* Youtube */}
              <a
                href="https://www.youtube.com/channel/UCE031qtdkyon70XIhK3mpEw?view_as=subscriber"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
        <Footer />
      </Grid>
    );
  }
}

export default Landing;
