import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import photo from "./img/12.jpg";
import Footer from "./footer";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marcin Kowalczyk</h2>
            <img src={photo} alt="avatar" style={{ height: "290px" }} />
            <p style={{ width: "80%", margin: "auto", paddingTop: "1.1em" }}>
              <b>
                Nazywam się Marcin Kowalczyk, mam 21 lat i jestem studentem
                drugiego roku na kierunku Informatyka w uczelni PWSZ Kalisz.
              </b>
              Interesuję się Web Developmentem. Zajmuję się programowaniem
              raptem od roku i powoli zaczynam tworzyć strony internetowe w
              rozmaitych technologiach, ciągl uczę się nowych rzeczy i rozwijam
              moją nową pasję. Moimi ulubionymi technologiami są: React JS do
              tworzenia frontendu, Spring-Boot (Java), Laravel (PHP) do
              tworzenia backendu. Przy tworzeniu baz danych korzystam z
              relacyjnej bazy danych MySQL i nierelacyjnej bazy danych Mongo DB.
              Widzę w swojej pracy i nauce duże postępy, pomimo, iż dopiero
              zaczynam swoją drogę w Web Developmencie. Zapraszam do kolaboracji
              i składania ofert!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Skontaktuj się ze mną</h2>
            <hr />

            <div className="contact-list" style={{ marginLeft: "20px" }}>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    512 139 685
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    43 829 76 83
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    marcinkowalczyk24.7@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    marcin_kowalczyk_
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default Contact;
