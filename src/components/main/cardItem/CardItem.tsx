import { Component } from 'react';
import { People } from '../../../types/typs';

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

  render() {
    const { people } = this.props;
    /*
            <p className="info"> gender: {people.gender}</p>
        <p className="info">height: {people.height}</p>
        <p className="info">mass: {people.mass}</p>
    */
    return (
      <li className="card" key={people.name}>
        <p className="name">name: {people.name}</p>
      </li>
    );
  }
}
