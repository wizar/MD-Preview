import AppDispatcher from '../Dispatcher';

export function resize(newSize) {
    AppDispatcher.dispatch({
        type: 'RESIZE',
        payload: newSize
    });
}

export function switchLayout() {
    AppDispatcher.dispatch({
        type: 'SWITCH_LAYOUT'
    });
}