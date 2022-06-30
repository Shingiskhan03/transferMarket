import React from "react";

class Modal extends React.Component {
  state = {};
  cancel = () => {
    this.props.closeModal();
  };

  changeCurrentData(type, isInc) {
    this.props.changeCurrentData(type, isInc);
  }

  saveChanges = () => {
    this.props.saveChanges()
  };

  componentWillUnmount(){
    this.props.clearCurrentData();
  }
  render() {
    const { currentData } = this.props;
    return (
      <div className="modals">
        <div className="header m-2">Add the player...</div>
        <div className="body m-2">
          <div className="row text-center">
            <div className="col-5">
              <h5>player's age</h5>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => this.changeCurrentData("age", false)}
                >
                  -
                </button>
                <button className="btn btn-light">
                  {currentData ? currentData.age : 0}
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeCurrentData("age", true)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-2 ">
              <img
                src="https://img1.pnghut.com/t/18/10/19/AdCW5MqHrf/t-shirt-cristiano-ronaldo-sports-fan-jersey-outerwear-real-madrid-cf.jpg"
                alt=""
              />
            </div>
            <div className="col-5">
              <h5>player's value</h5>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => this.changeCurrentData("value", false)}
                >
                  -
                </button>
                <button className="btn btn-light">
                  ${currentData ? currentData.value : 0} .00m
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeCurrentData("value", true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="btn btn-warning m-2" onClick={this.cancel}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>
    );
  }
}

export default Modal;
