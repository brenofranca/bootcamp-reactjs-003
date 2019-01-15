import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RepositoriesActions from '../../store/actions/repositories';

import { Container, Form } from './styles';
import logo from '../../assets/images/logo.png';
import CompareList from '../../components/compare_list';

class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
  };

  componentDidMount() {}

  handleRepositoryAdd = async (e) => {
    e.preventDefault();

    const { addRepository } = this.props;
    const { repositoryInput } = this.state;

    addRepository(repositoryInput);
  };

  handleRepositoryRemove = async ({ id }) => {
    const { removeRepository } = this.props;

    removeRepository(id);
  };

  handleRepositoryUpdate = async (repository) => {
    const { updateRepository } = this.props;

    updateRepository(repository);
  };

  render() {
    const { loading, repositoryError, repositoryInput } = this.state;

    const { repositories } = this.props;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.handleRepositoryAdd}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>

        <CompareList
          repositories={repositories}
          onHandleClickRemove={repository => this.handleRepositoryRemove(repository)}
          onHandleClickUpdate={repository => this.handleRepositoryUpdate(repository)}
        />
      </Container>
    );
  }
}

Main.propTypes = {
  addRepository: PropTypes.func.isRequired,
  removeRepository: PropTypes.func.isRequired,
  updateRepository: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
