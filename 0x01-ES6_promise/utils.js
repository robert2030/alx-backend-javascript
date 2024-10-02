export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo1',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Robert',
    lastName: 'A',
  });
}
