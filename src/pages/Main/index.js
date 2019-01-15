import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RepositoriesActions from '../../store/actions/repositories';

import { Container, Form, Error } from './styles';
import logo from '../../assets/images/logo.png';
import CompareList from '../../components/compare_list';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  componentDidMount() {}

  handleRepositoryAdd = async (e) => {
    e.preventDefault();

    const { addRepositoryRequest, repositories } = this.props;
    const { repositoryInput } = this.state;

    if (!repositoryInput) return;

    if (repositories.data.length > 0) {
      const repositoryIsAdded = repositories.data.find(item => item.full_name === repositoryInput);

      if (repositoryIsAdded) {
        return;
      }
    }

    addRepositoryRequest(repositoryInput);

    this.setState({ repositoryInput: '' });
  };

  handleRepositoryRemove = async ({ id }) => {
    const { removeRepository } = this.props;

    removeRepository(id);
  };

  handleRepositoryUpdate = async (repository) => {
    const { updateRepositoryRequest } = this.props;

    updateRepositoryRequest(repository);
  };

  render() {
    const { repositoryInput } = this.state;

    const { repositories } = this.props;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={!!repositories.error} onSubmit={this.handleRepositoryAdd}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {repositories.loading ? <i className="fa fa-spinner fa-pulse" /> : 'ADICIONAR'}
          </button>
        </Form>

        {!!repositories.error && <Error>{repositories.error}</Error>}

        <CompareList
          repositories={repositories.data}
          onHandleClickRemove={repository => this.handleRepositoryRemove(repository)}
          onHandleClickUpdate={repository => this.handleRepositoryUpdate(repository)}
        />
      </Container>
    );
  }
}

Main.propTypes = {
  addRepositoryRequest: PropTypes.func.isRequired,
  removeRepository: PropTypes.func.isRequired,
  updateRepositoryRequest: PropTypes.func.isRequired,
  repositories: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
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
    error: PropTypes.oneOf([null, PropTypes.string]),
  }).isRequired,
};

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
