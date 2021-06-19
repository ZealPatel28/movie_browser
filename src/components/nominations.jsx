import React, { Component } from "react";
class Nominations extends Component {
  state = {
    nominees: [],
  };
  componentDidUpdate() {
    if (this.state.nominees === this.props.nominees) {
    } else {
      this.setState({ nominees: this.props.nominees });
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.nominees.map((tag) => (
            <li key={tag.Year}>
              {tag.Title}({tag.Year})
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={() =>
                  this.deleteNomination({
                    Title: tag.Title,
                    Year: tag.Year,
                    Id: tag.Id,
                  })
                }
              >
                Delete
              </button>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  deleteNomination = (nomination) => {
    console.log(nomination);
    this.props.k3(nomination.Id);
    let x = this.state.nominees.filter((item) => item.Id !== nomination.Id);
    this.setState(
      {
        nominees: x,
      },
      console.log(this.state.nominees)
    );
  };
}

export default Nominations;
