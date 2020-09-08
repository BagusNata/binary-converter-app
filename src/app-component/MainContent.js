import React, { Component } from "react";

export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decimal: "",
      binary: "",
      // hexadecimal: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value,
    });
    console.log("handleChange clicked!!!");
  };

  handleSubmit = (event) => {
    this.state.binary = "";
    event.preventDefault();
    console.log("handleSubmit Clicked!!!");

    const dec2bin = this.decimalToBinary();
    this.setState({ binary: dec2bin });
  };

  decimalToBinary = () => {
    let decimal = this.state.decimal;
    let binary = this.state.binary;

    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }

    return binary;
  };

  render() {
    return (
      <div className="backgroundApp mb2 mt7">
        <div className="tittle">
          <h3 style={{ fontSize: "3rem" }}>Binary Converter</h3>
        </div>

        <div className="container">
          {" "}
          <div>
            <hr />
          </div>
          <div className="content-box col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2 className="box-tittle">Decimal to Binary</h2>
              <label style={{ paddingLeft: "20px", fontSize: "22px" }}>
                <div style={{ paddingLeft: "7px" }}>
                  Enter decimal number : <br />
                </div>
                <input
                  className="form-style"
                  type="number"
                  name="decimal"
                  value={this.state.decimal}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <div className="btn-box">
                <button type="submit" className="btn btn-primary">
                  Convert
                </button>
                <button
                  type="button"
                  class="btn btn-secondary ml1"
                  onClick={() => {
                    this.setState({ binary: "", decimal: "" });
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
            <br />
            <div style={{ paddingLeft: "24px" }}>
              <h4>Result :</h4>
              <textarea
                className="textarea-style"
                value={this.state.binary}
                cols="39"
                rows="2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
