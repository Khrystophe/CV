import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, adress, languagesIcons, source, info, picture } =
      this.props.item;
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <div className="flexInfos">
          <span className="infos" onClick={this.handleInfo}>
            <i className="fas fa-plus-circle"></i>
          </span>
        </div>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <a href={adress} rel="noopener noreferrer" target="_blank">
                  <h2>{name}</h2>
                </a>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    <span>Code Source</span>
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

              <div className="button return" onClick={this.handleInfo}>
                <span>Fermer</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
