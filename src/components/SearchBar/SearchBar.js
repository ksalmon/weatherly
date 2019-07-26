import React, { Component } from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Places from './Places';


export class BaseSearchBar extends Component {


  render() {
    const searchClient = algoliasearch(
      'latency',
      '317f6aac0532d9425b4d56bfbf3b57f7'
    );
  
    return (
      <InstantSearch searchClient={searchClient}>
        <Places
          defaultRefinement={{
            lat: 37.7793,
            lng: -122.419
          }}
        />
      </InstantSearch>

    )
  }
}

export default class SearchBar extends BaseSearchBar {}