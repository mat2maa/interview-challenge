import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import MenuItem from '../MenuItem';

// HOCs
import { flowRight as compose } from 'lodash';
import withGlobalHook from '../../hocs/withGlobalHook';

import items from '../../items';

class MenuBuilder extends React.PureComponent {

  render() {

    const {
      actions: {
        addToMenu,
        removeFromMenu,
      },
      state: {
        menu,
      },
    } = this.props;

    return (
      <Container className="menu-builder">
        <Row>
          <Col xs="4">
            <ul className="item-picker">
              {
                items.map(item => {

                  const { id } = item;
                  return (
                    <MenuItem
                      key={`item-picker-${id}`}
                      item={item}
                      onAddItem={addToMenu}
                    />
                  );
                })
              }
            </ul>
          </Col>
          <Col xs={8}>
            <h2>Menu preview</h2>
            <ul className="menu-preview">
              {
                menu.map(item => {

                  const { id } = item;
                  return (
                    <MenuItem
                      key={`menu-item-${id}`}
                      item={item}
                      onRemoveItem={removeFromMenu}
                    />
                  );
                })
              }
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

MenuBuilder.propTypes = {
  actions: PropTypes.shape({
    addToMenu: PropTypes.func.isRequired,
    removeFromMenu: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        dietaries: PropTypes.arrayOf(
          PropTypes.string.isRequired,
        ).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

MenuBuilder.defaultProps = {};

export default compose(
  withGlobalHook,
)(MenuBuilder);
