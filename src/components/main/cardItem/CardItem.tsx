import './styles.css';
import { Component } from 'react';
import { People } from '../../../types/types';

interface PeopleItem {
  people: People;
}

export class CardItem extends Component<PeopleItem> {
  constructor(props: PeopleItem) {
    super(props);
    this.state = {
      // searchTerm: getItemFromLocalStorage<string>("searchTerm") ?? "",
      peopleList: '',
    };
  }

  handleClick = async () => {
    console.log('card details');
  };

  render() {
    const { people } = this.props;
    return (
      <li
        className="card-container"
        key={people.name}
        onClick={this.handleClick}
      >
        <p className="name">Name: {people.name}</p>
        <p className="height">Height: {people.height}</p>
        <p className="mass">Mass: {people.mass}</p>
        <p className="birth_year">Birth year: {people.birth_year}</p>
        <p className="gender">Gender: {people.gender}</p>
        <p className="skin_color">Skin color: {people.skin_color}</p>
        <p className="eye_color">Eye color: {people.eye_color}</p>
      </li>
    );
  }
}
