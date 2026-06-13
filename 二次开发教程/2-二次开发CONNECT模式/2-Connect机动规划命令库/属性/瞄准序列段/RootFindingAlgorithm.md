# RootFindingAlgorithm

## 作用

设置瞄准段微分修正属性页**求根算法**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Attribute` | 可选值：`Newton-Raphson Method`、`Secant Method`、`Sequential Quadratic Prgramming` |

## 示例

::: details open **设置瞄准段求根算法为牛顿-拉夫森方法**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.RootFindingAlgorithm "Newton-Raphson Method"
```
:::
