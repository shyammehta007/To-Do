export function toEpoch() {
    const date = new Date()
    const epoch = date.getTime(date.toDateString())
    return epoch
}

export function toDate(epoch) {
    const date = new Date(epoch)
    return date.toDateString()
}

export function debounce(func, ms) {
    let interval
    return function (...args) {
        const context = this
        clearInterval(interval)
        interval = setTimeout(() => {
            func.apply(context, args)
        }, ms);
    }

}