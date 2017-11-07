import React, { Component } from 'react'
import ListComponent from "./List"
import {sortBy} from 'sort-by'

const SortedListComponent = (ItemComponent, data, sort = undefined) => {
  return class SortedListItemsComponent extends Component {
    render() {
      console.log("SortedListItemsComponent", this.props);
      if (!sort) {
         sort  = this.props.match.params.sort;
      }

      switch (sort) {
        case "new":
          data.sort((dataOne, dataTwo) => dataTwo.timestamp - dataOne.timestamp);
          break;
        case "hot":
          data.sort((dataOne, dataTwo) => dataTwo.voteScore - dataOne.voteScore);
      }
      console.log(sort, data);
      const ListPostComponent = ListComponent(ItemComponent, data);

      return (
         <ListPostComponent {...this.props} />
      );
    }
  }
}

export default SortedListComponent;
