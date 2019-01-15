export const addRepository = repository => ({ type: 'ADD_REPOSITORY', payload: { repository } });

export const removeRepository = id => ({ type: 'REMOVE_REPOSITORY', payload: { id } });

export const updateRepository = repository => ({
  type: 'UPDATE_REPOSITORY',
  payload: { repository },
});
