import React from "react";
import Modal from "./Modal";

class App extends React.Component {
  state = {
    players: [],
    modalVisibility: false,
    currentData: "",
  };

  componentDidMount() {
    const players = [
      {
        img: "https://avatars.mds.yandex.net/i?id=6af2fce4e5d6850c5d31b897bc447d84-5451798-images-thumbs&ref=rim&n=33&w=200&h=150",
        name: "K.Mbappe",
        age: "23",
        club: "PSG",
        value: "160",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=c977d4f8c446af8409bc268943fcf0f0-5302039-images-thumbs&ref=rim&n=33&w=217&h=150",
        name: "E.Haaland",
        age: "21",
        club: "Man city",
        value: "150",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=231f33f09e46a1a848c4b49f6fc80b09-5234848-images-thumbs&ref=rim&n=33&w=150&h=150",
        name: "Vini jr",
        age: "21",
        club: "Real Madrid",
        value: "100",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=6061f582582bda9493f140f34d9f025c-4842152-images-thumbs&ref=rim&n=33&w=225&h=150",
        name: "M.Salah",
        age: "29",
        club: "Liverpool",
        value: "100",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=72d8379614561a6b87950aefc12aec4a-5446078-images-thumbs&ref=rim&n=33&w=225&h=150",
        name: "K.De Bruyne",
        age: "29",
        club: "Man city",
        value: "90",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=0c344b7b02c60c45aa813b476e15d838-5875984-images-thumbs&ref=rim&n=33&w=286&h=150",
        name: "R.Lukaku",
        age: "28",
        club: "Chelsea",
        value: "90",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=be605356ec5c4ba2901ccb51dc85e813-5232745-images-thumbs&ref=rim&n=33&w=242&h=150",
        name: "B.Fernandes",
        age: "26",
        club: "Man U",
        value: "80",
      },
    ];
    this.setState({
      players,
    });
  }

  remove = (index) => {
    const players = this.state.players;
    players.splice(index, 1);
    this.setState({
      players,
    });
  };

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };
  closeModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  changeCurrentData = (type, isInc) => {
    const newCurrentdata = this.state.currentData
      ? this.state.currentData
      : {
          img: "https://www.clipartkey.com/mpngs/m/326-3260960_male-shadow-fill-circle-comments-default-profile-pic.png",
          name: "player",
          age: 0,
          club: "none",
          value: 0,
        };

    if (type === "age") {
      if (isInc) {
        newCurrentdata.age++;
      } else if (newCurrentdata.age < 1) {
        newCurrentdata.age = 0;
      } else {
        newCurrentdata.age--;
      }
    }
    if (type === "value") {
      if (isInc) {
        newCurrentdata.value++;
      } else if (newCurrentdata.value < 1) {
        newCurrentdata.value = 0;
      } else {
        newCurrentdata.value--;
      }
    }

    this.setState({
      currentData: newCurrentdata,
    });
  };

  saveChanges = () => {
    const { players, currentData } = this.state;
    players.push(currentData);
    this.setState({
      players,
      modalVisibility: false,
    });
  };

  clearCurrentData = () => {
    this.setState({
      currentData:""
    })
  };

  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
      <div className="market">
        <div className="container">
          <div className="title">
            <h1>TRANSFER MARKET</h1>
          </div>
          <div className="row">
            <div className="col">
              <button onClick={this.openModal} className="btn btn-primary m-2">
                Add the player
              </button>
              {modalVisibility ? (
                <Modal
                  closeModal={this.closeModal}
                  currentData={currentData}
                  changeCurrentData={this.changeCurrentData}
                  saveChanges={this.saveChanges}
                  clearCurrentData={this.clearCurrentData}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-light table-hover">
                <thead>
                  <tr>
                    <th>№</th>
                    <th></th>
                    <th>name:</th>
                    <th>age:</th>
                    <th>club:</th>
                    <th>value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={item.img} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.club}</td>
                      <td>$ {item.value}.00m</td>
                      <td>
                        <button
                          onClick={() => this.remove(index)}
                          className="btn btn-danger btn-sm"
                        >
                          remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
