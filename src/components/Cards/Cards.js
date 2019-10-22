import React, { Component } from "react";
import Card from "../Card/Card";
import "./Cards.css";
import "font-awesome/css/font-awesome.min.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isLoading: false,
      start: 0
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ isLoading: true });
    fetch(
      `https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/photos?_limit=20&_start=${this.state.start}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          cards: [...this.state.cards, ...data],
          isLoading: false
        })
      );
  };

  showMore = () => {
    this.setState(
      {
        start: +this.state.start + 20
      },
      () => {
        this.fetchData();
      }
    );
  };

  render() {
    const { cards, isLoading } = this.state;

    if (isLoading && !cards.length) {
      return <h1>Идёт загрузка...</h1>;
    }

    return (
      <React.Fragment>
        <h1>Вывод данных в цикле</h1>
        <p>Всего записей: {cards.length}</p>
        <div className="grid">
          <Card cards={cards} />
        </div>
        <button onClick={this.showMore} disabled={isLoading}>
          Показать еще{isLoading && <i className="fa fa-spinner fa-spin"></i>}
        </button>
      </React.Fragment>
    );
  }
}

export default Cards;
