import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  fontSize: "34px",
                  textDecoration: "none",
                  color: "white",
                }}
                to="/"
              >
                Moje Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link style={{ fontSize: "20px" }} to="/resume">
                O mnie
              </Link>
              <Link style={{ fontSize: "20px" }} to="/projects">
                Projekty
              </Link>
              <Link style={{ fontSize: "20px" }} to="/contact">
                Dane Kontaktowe
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Moje Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link style={{ fontSize: "20px" }} to="/resume">
                O mnie
              </Link>
              <Link style={{ fontSize: "20px" }} to="/projects">
                Projekty
              </Link>
              <Link style={{ fontSize: "20px" }} to="/contact">
                Dane Kontaktowe
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
