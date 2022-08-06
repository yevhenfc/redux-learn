import ACTION_TYPES from "../actions/actionTypes";

const db = [
    {id: Date.now(), login: 'vasya100', email: 'vasya1@mail.com'},
    {id: Date.now(), login: 'vasya101', email: 'vasya2@mail.com'},
    {id: Date.now(), login: 'vasya102', email: 'vasya3@mail.com'},
];

const initialState = {
    users: db,
    isFetching: false,
    error: null,
    currentUser: {},
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CREATE_USER: {
            const {users} = state; 
            const {data} = action;
            const newUser = {
                ... data,
                id: Date.now(),
            };
            const newUsersDB = [...users, newUser];
            return newUsersDB;
        };
        case ACTION_TYPES.DELETE_USER: {
            const {users} = state; 
            const {id}= action;
            const newUsersDB = [...users];
            newUsersDB.splice(newUsersDB.findIndex(u => id == u.id), 1);
            return {users: newUsersDB};
        };

        case ACTION_TYPES.UPDATE_USER: {
            const {users} = state; 
            const {data}= action;
            const newUsersDB = [...users];
            const findUserIndex = newUsersDB.findIndex(u => data.id == u.id);
            newUsersDB[findUserIndex] = {...newUsersDB[findUserIndex], ...data};
            return {users: newUsersDB};

        };

        case ACTION_TYPES.READ_USER: {
            const {users, currentUser} = state; 
            const {id}= action;
            const newUsersDB = [...users];
            const findUserIndex = newUsersDB.findIndex(u => data.id == u.id);
            return {currentUser: newUsersDB[findUserIndex]};
        };

        default:    return state;
    }
};

export default userReducer;