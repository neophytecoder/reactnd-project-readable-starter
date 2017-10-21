import React, { Component } from 'react'
import ListComponent from "./List"

const SortedListComponent = (ItemComponent, data) => {
  return class SortedListItemsComponent extends Component {
    render() {
      console.log("SortedListItemsComponent", this.props);
      const { sort } = this.props.match.params;
      let sortedData;
      switch (sort) {
        case "new":
          sortedData = data.sort((dataOne, dataTwo) => dataTwo.timestamp - dataOne.timestamp);
          break;
        case "hot":
          sortedData = data.sort((dataOne, dataTwo) => dataTwo.votescore - dataOne.votescore);
        default:
          sortedData = data;
      }
      const ListPostComponent = ListComponent(ItemComponent, sortedData);

      return (
         <ListPostComponent {...this.props} />
      );
    }
  }
}

export default SortedListComponent;
