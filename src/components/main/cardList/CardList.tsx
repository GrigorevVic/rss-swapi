import { Component } from 'react';
import { CardItem } from '../cardItem/CardItem';
import { People } from '../../../types/typs';

interface PeopleList {
  peopleList: People[];
}

export class CardList extends Component<PeopleList> {
  constructor(props: PeopleList) {
    super(props);
    this.state = {
      // searchTerm: getItemFromLocalStorage<string>("searchTerm") ?? "",
      peopleList: '',
    };
  }

  render() {
    const { peopleList } = this.props;

    return (
      <ul className="card">
        {peopleList.map((people: People) => (
          <CardItem people={people} key={people.name} />
        ))}
      </ul>
    );
  }
}
