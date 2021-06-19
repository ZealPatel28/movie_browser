import React, { Component } from "react";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.css";
import "./search.css";
import Nominations from "./nominations";
import "./search.css";
class SearchBar extends Component {
  state = {
    keywor: "",
    nominees: [],
    removed: -1,
  };

  inputRef = React.createRef();
  render() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <h1 align="center">Browse Movies Here!</h1>
              <input
                type="text"
                className="form-control"
                placeholder="Enter movie name"
                ref={this.inputRef}
                onKeyUp={this.setKeywor}
              />
            </div>
            <div className="col-sm-2"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4 searchresults">
              <Search
                keyword={this.state.keywor}
                k2={this.addNomination}
                k4={this.state.removed}
              />
            </div>

            <div className="col-sm-4 nominations">
              {" "}
              <Nominations
                nominees={this.state.nominees}
                k3={this.deleteNomination}
              />
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
  setKeywor = () => {
    this.setState({ keywor: this.inputRef.current.value });
  };
  deleteNomination = (nomination) => {
    this.setState({
      nominees: this.state.nominees.filter((item) => item.Id !== nomination),
      removed: nomination,
    });
  };
  addNomination = (nomination) => {
    if (this.state.nominees.length > 4) {
    } else {
      this.setState(
        { nominees: [...this.state.nominees, nomination] },
        console.log("in bar" + this.state.nominees)
      );
    }
  };
}

export default SearchBar;
