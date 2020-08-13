export const addName = (name) => ({
  type: 'add_app_name',
  payload: name,
});

export const addDescription = (description) => ({
  type: 'add_app_description',
  payload: description,
});

export const addUserType = (type) => ({
  type: 'add_user_type',
  payload: type,
});
