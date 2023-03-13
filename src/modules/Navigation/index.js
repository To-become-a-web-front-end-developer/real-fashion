let history;

export const registerNav = ref => {
    history = ref.history;
}

const jumTo = uri => {
    history.push(uri);
}

export const go = uri => {
    history.go(uri);
}

export default jumTo;