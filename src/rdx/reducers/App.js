
import { START_APP } from 'rdx/types';

const APP_INITIAL_STATE = {
    started: false
};

export default function(state, action) {
    if (action.type === START_APP) {
        let cloned = Object.assign({} ,state);
        cloned.started = true;
        return cloned;
    }
    return APP_INITIAL_STATE;
}