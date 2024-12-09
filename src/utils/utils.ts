export function getRandomString() {
    return (Math.random() + 1).toString(36).substring(7);
}

export function getRandomNumber(max : number) {
    return (Math.floor(Math.random() * (max + 1)))
}
