import { START_APP, GET_UNREAD_EMAILS } from '../types';
import data from '../../data'

export const fireMeUp = () => {
    return {
        type: START_APP, 
        payload: true
    }
}

export const getUnreadEmails = () => {
    
    let emails = data
    let unreadEmails = emails.filter(email => (email.read === false && email.type === 'inbox'))
    
    return { 
        type: GET_UNREAD_EMAILS,
        payload: unreadEmails
    }
}