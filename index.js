import Big from 'big.js'

/**
 * 加法函数
 * @param {Array<number | string>} args
 * @return {string}
 */
export function accAdd(args) {
    return args.reduce((prev, cur) => {
        const _prev = isNum(prev)
        const _cur = isNum(cur)
        const bigPrev = new Big(_prev)
        const bigCur = new Big(_cur)
        const res = bigPrev.add(bigCur)
        return isNum(res).toString()
    })
}

/**
 * 减法函数
 * @param {Array<number | string>} args
 * @return {string}
 */
export function accSub(args) {
    return args.reduce((prev, cur) => {
        const _prev = isNum(prev)
        const _cur = isNum(cur)
        const bigPrev = new Big(_prev)
        const bigCur = new Big(_cur)
        const res = bigPrev.sub(bigCur)
        return isNum(res).toString()
    })
}

/**
 * 乘法函数
 * @param {Array<number | string>} args
 * @return {string}
 */
export function accMul(args) {
    return args.reduce((prev, cur) => {
        const _prev = isNum(prev)
        const _cur = isNum(cur)
        const bigPrev = new Big(_prev)
        const bigCur = new Big(_cur)
        const res = bigPrev.mul(bigCur)
        return isNum(res).toString()
    })
}

/**
 * 除法函数
 * @param {Array<number | string>} args
 * @return {string}
 */
export function accDiv(args) {
    return args.reduce((prev, cur) => {
        const _prev = isNum(prev)
        const _cur = isNum(cur)
        const bigPrev = new Big(_prev)
        const bigCur = new Big(_cur)
        const res = bigPrev.div(bigCur)
        return isNum(res).toString()
    })
}

/**
 * 精度计算(四舍五入)
 * @param {number | string} num 
 * @param {number | undefined} precision
 * @returns {string}
 */
export function toRounding(num, precision) {
    if ([0, '0'].includes(precision) || Number(precision)) {
        const _num = isNum(num)
        const bigNum = new Big(_num)
        const res = bigNum.toFixed(precision)
        return isNum(res).toString()
    }
    return num
}

/**
 * 精度计算(非四舍五入)
 * @param {number | string} num 
 * @param {number | undefined} precision
 * @returns {string}
 */
export function toPrecision(num, precision) {
    if ([0, '0'].includes(precision) || Number(precision)) {
        const _num = isNum(num)
        const bigNum = new Big(_num)
        const res = bigNum.round(precision, 0)
        const _res = res.toFixed(precision)
        return isNum(_res).toString()
    }
    return num
}

/**
 * 是否为数字
 * @param {number | string} num 
 */
export function isNum (num) {
    if (!num || !Number(num)) {
        return 0;
    }
    if (Number(num) === Infinity) {
        return 0;
    }
    if (Number(num) === -Infinity) {
        return 0;
    }
    return num;
}