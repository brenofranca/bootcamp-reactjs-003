export const addRepositoryRequest = repository => ({
  type: 'ADD_REPOSITORY_REQUEST',
  payload: { repository },
});
export const addRepositorySuccess = data => ({
  type: 'ADD_REPOSITORY_SUCCESS',
  payload: { data },
});

export const updateRepositoryRequest = repository => ({
  type: 'UPDATE_REPOSITORY_REQUEST',
  payload: { repository },
});
export const updateRepositorySuccess = data => ({
  type: 'UPDATE_REPOSITORY_SUCCESS',
  payload: { data },
});

export const removeRepository = id => ({ type: 'REMOVE_REPOSITORY', payload: { id } });
