/* eslint-disable no-unused-vars */
export const myStorage = JSON.parse(localStorage.getItem('todo'));
// eslint-disable-next-line prefer-const, import/no-mutable-exports
export let todoList = myStorage ?? [];
