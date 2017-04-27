import AppDispatcher from '../Dispatcher';

export function updateText(text) {
    AppDispatcher.dispatch({
        type: 'UPDATE',
        payload: text
    });
}

export function updateWidth(size) {
    AppDispatcher.dispatch({
        type: 'RESIZE',
        payload: size
    });
}