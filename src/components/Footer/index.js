import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from './styles';

const Footer = ({ count }) => (
  <Container>
    <p>
      Você possui
      {' '}
      <strong>{count}</strong>
      {' '}
repositórios favoritos
    </p>
  </Container>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.repositories.data.length,
});

export default connect(mapStateToProps)(Footer);
