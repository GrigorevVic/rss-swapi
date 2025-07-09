import './styles.css';
import { Component } from 'react';
import { CardItem } from '../cardItem/CardItem';
import { People } from '../../../types/types';

interface PeopleList {
  peopleList: People[];
}

export class CardList extends Component<PeopleList> {
  constructor(props: PeopleList) {
    super(props);
    this.state = {
      peopleList: '',
    };
  }

  render() {
    const { peopleList } = this.props;

    return (
      <ul className="cards-container">
        {peopleList.map(
          (people: People, index) =>
            index < 10 && <CardItem people={people} key={people.name} />
        )}
      </ul>
    );
  }
}
