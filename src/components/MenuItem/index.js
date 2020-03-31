import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.PureComponent {

  constructor(props) {

    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleAddItem() {

    const {
      item,
      onAddItem,
    } = this.props;

    if (onAddItem) onAddItem(item);
  }

  handleRemoveItem() {

    const {
      item,
      onRemoveItem,
    } = this.props;

    if (onRemoveItem) onRemoveItem(item);
  }

  render() {

    const {
      item: {
        id,
        name,
        dietaries,
      },
      onAddItem,
      onRemoveItem,
    } = this.props;

    const itemProps = {
      className: 'item',
    };

    if (onAddItem) itemProps.onClick = this.handleAddItem;

    return (
      <li {...itemProps}>
        <h2>
          {name}
        </h2>
        <p>
          {
            dietaries.map(dietary => (
              <span
                key={`${id}-${dietary}`}
                className="dietary">
                {dietary}
              </span>
            ))
          }
        </p>
        {
          onRemoveItem
          && (
            <button
              className="remove-item"
              onClick={this.handleRemoveItem}
            >
              x
            </button>
          )
        }
      </li>
    );
  }
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dietaries: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
};

MenuItem.defaultProps = {};

export default MenuItem;
