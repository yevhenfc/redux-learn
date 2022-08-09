export const BASE_URL = 'https://randomuser.me/api';

export const getRandomUser = () =>
fetch(BASE_URL).then(data => data.json())