import { START_APP, GET_UNREAD_EMAILS } from 'rdx/types';

const APP_INITIAL_STATE = {
    started: false,
    emails: [],
    unreadEmails: []
};

export default function (state, action) {

    switch (action.type) {
        
        case START_APP:
            let clone = Object.assign({}, state);
            clone.started = action.payload
            return clone;

        case GET_UNREAD_EMAILS:
            let stateClone = Object.assign({}, state)
            stateClone.unreadEmails = action.payload
            return stateClone;

        default:
            return APP_INITIAL_STATE
    }
}