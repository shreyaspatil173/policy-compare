
export function validPhone(value) {
    let reg =  /^[5-9]\d{9}$/
    return reg.test(value)
}

export function validEmail(value) {
    let reg = new RegExp(/^(([^<>()\]\\.,:\s@"]+(\.[^<>()\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return reg.test(String(value).toLowerCase())
}

export function validDate(value) {
    let reg =  /^(\d{1,2})-(\d{1,2})-(\d{4})$/
    return reg.test(value)
}