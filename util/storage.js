const TODOS_STRORAGE_KEY = 'TODOS'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODOS_STRORAGE_KEY)) || [];
    },
    set(todos) {
        localStorage.setItem(TODOS_STRORAGE_KEY, JSON.stringify(todos));
    }
}