import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import photo from "./img/12.jpg";
import Skills from "./skills";
import photo1 from "./img/logo.png";
import Footer from "./footer";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <img
              src={photo1}
              alt="avatar"
              style={{ margin: "0 auto", height: "200px" }}
            />
            <h2 style={{ paddingTop: "1em" }}>Marcin Kowalczyk</h2>
            <h4 style={{ color: "grey" }}>Web-Developer/Programista</h4>
            <hr style={{ borderTop: "3px solid #833", width: "50%" }} />
            <p>
              <b>
                Nazywam się Marcin Kowalczyk, mam 21 lat i jestem studentem
                drugiego roku na kierunku Informatyka w uczelni PWSZ Kalisz.
              </b>
              <br />
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
            <hr style={{ borderTop: "3px solid #833", width: "50%" }} />
            <h5>Adres Zamieszkania</h5>
            <p>Ziemięcin 24, 98-215 Goszczanów</p>
            <p>Powiat: sieradzki, Województwo: łódzkie</p>
            <h5>Telefon Kontaktowy</h5>
            <p>512 139 685</p>
            <hr style={{ borderTop: "3px solid #833", width: "50%" }} />
            <h5>E-mail</h5>
            <p>marcinkowalczyk24.7@gmail.com</p>
            <h5>Adres Strony Internetowej</h5>
            <p>gingercoder.com</p>
            <hr style={{ borderTop: "3px solid #833", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <div style={{ textAlign: "center" }}>
              <img src={photo} alt="avatar" style={{ height: "300px" }} />
            </div>
            <h2>Edukacja</h2>
            <Education
              startYear={2019}
              endYear={2023}
              schoolName="PWSZ Kalisz"
              schoolDescription="Moja uczelnia niedługo przekształca się w Akademię Kaliską i jest bardzo młodą placówką, jednakże bardzo dynamicznie się rozwijającą i pozwalającą nam studentom zdobyć odpowiednie umiejętności i wykształcenie, które będzie przydatne w znalezieniu przez nas pracy w przyszłości. Odpowiedni sprzęt i oprogramowanie pomaga nam się rozwijać w zakresie programowania, sieci komputerowych, web developmentu i innych przydatnych technologii systemów operacyjnych. Po ukończeniu studiów, mam nadzieję, że otrzymam tytuł Inżyniera."
            />
            <hr style={{ borderTop: "4px solid #e43" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="Adobe Photoshop" progress={65} />
            <Skills skill="Corel-DRAW" progress={65} />
            <Skills skill="Spring-Boot/Java" progress={55} />
            <Skills skill="React JS/Javascript" progress={50} />
            <Skills skill="NodeJS" progress={40} />
            <Skills skill="Laravel/PHP" progress={25} />
          </Cell>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default Resume;

/*
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
*/

/*
            <h2>Experience</h2>
            
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
*/
