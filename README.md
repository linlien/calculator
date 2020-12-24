# calculator
利用big.js对数字加减乘除进行封装后导出对应方法

### 安装
```javascript
npm i -S zg-calculator
```

### 使用
```javascript
import {
  accAdd,
  accSub,
  accMul,
  accDiv,
  toRounding,
  toPrecision
} from 'zg-calculator'


# accAdd 加法函数
accAdd([1, 2, 3]) // 6

# accSub 减法函数
accSub([9, 3, 2]) // 4

# accMul 乘法函数
accSub([3, 4, 5]) // 60

# accDiv 除法函数
accDiv([12, 2, 3]) // 2

# toRounding 精度计算(四舍五入)
toRounding(1.78236478, 4) // 1.7824

# toPrecision 精度计算(非四舍五入)
toPrecision(1.78236478, 4) // 1.7823

```
