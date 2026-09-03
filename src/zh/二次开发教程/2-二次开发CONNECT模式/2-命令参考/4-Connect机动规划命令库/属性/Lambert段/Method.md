# Method

## 作用

设置 Lambert 求解方法

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Method <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Value` | 可选值：`SpecAll`、`SpecMin`、`AdaptSpecified`、`AdaptMin` |

**Value 可选值详细说明**：

| 取值 | 求解策略 | 结果 |
|------|----------|------|
| `SpecAll` | 对所有可行解进行指定牛顿/同伦迭代次数的求解 | 取燃料最优解，耗时较长 |
| `SpecMin` | 按二体燃料解大小排序进行指定牛顿/同伦迭代次数的求解 | 取燃料最优解 |
| `AdaptSpecified` | 对指定圈次/长短弧(LongArc)/顺序逆行（优劣弧 MajorArc）自适应求解，不指定牛顿迭代次数和同伦次数 | 对部分解可能求解失败，耗时较短 |
| `AdaptMin` | 按燃料解大小排序自适应求解，不指定牛顿迭代次数和同伦次数 | 取燃料最优解，耗时较短 |

## 示例

::: details open **设置 Lambert 求解方法为 SpecAll**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Method specall
```
:::
