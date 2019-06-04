import React, { Component } from 'react';
import places from 'places.js';
import connect from './connector';

class Places extends Component {
  createRef = c => (this.element = c);

  componentDidMount() {
    const { refine, defaultRefinement } = this.props;

    const autocomplete = places({
      container: this.element,
      // Algolia Places options
    });

    autocomplete.on('change', event => {
      console.log(event.suggestion.latlng)
      refine(event.suggestion.latlng);
    });

    autocomplete.on('clear', () => {
      refine(defaultRefinement);
    });
  }

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <input
          ref={this.createRef}
          type="search"
          id="address-input"
          placeholder="Where are we going?"
        />
      </div>
    );
  }
}

export default connect(Places);