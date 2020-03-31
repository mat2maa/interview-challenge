import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import '../../App.css';

// HOCs
import { flowRight as compose } from 'lodash';
import withGlobalHook from '../../hocs/withGlobalHook';

class MenuSummary extends React.PureComponent {

  render() {

    const {
      state: {
        menuCount,
        dietaries,
      },
    } = this.props;

    return (
      <div className="menu-summary">
        <Container>
          <Row>
            <Col
              xs={6}
              className="menu-summary-left"
            >
              <span>
                {menuCount}
                {` item${menuCount === 1 ? '' : 's'}`}
              </span>
            </Col>
            <Col
              xs={6}
              className="menu-summary-right"
            >
              {
                Object.keys(dietaries).map(dietary => {

                  const count = dietaries[dietary];
                  if (!count) return null;

                  return (
                    <React.Fragment key={`${dietary}-count`}>
                      {count}
                      x
                      {' '}
                      <span className="dietary">
                        {dietary}
                      </span>
                    </React.Fragment>
                  );
                })
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

MenuSummary.propTypes = {
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

MenuSummary.defaultProps = {};

export default compose(
  withGlobalHook,
)(MenuSummary);
