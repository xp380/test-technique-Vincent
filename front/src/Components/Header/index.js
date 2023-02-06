import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { PageHeader, Button } from "antd";
import "./Header.css";

const Header = () => {
  let history = useHistory();
  const homeClick = () => {
    history.push("/");
  };
  const Titre = <div className="HeadLine">MovieDB App</div>;

  return (
    <Router>
      <div className="header-ghost-wrapper">
        <PageHeader
          ghost={true}
          title={Titre}
          extra={[
            <Button className="Button" key="3" onClick={homeClick}>
              <a href="/">TOUS LES FILMS</a>
            </Button>,
          ]}
        />
      </div>
    </Router>
  );
};

export default Header;
