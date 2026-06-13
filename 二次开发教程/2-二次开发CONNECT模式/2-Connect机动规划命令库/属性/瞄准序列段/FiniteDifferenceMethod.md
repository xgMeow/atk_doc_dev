# FiniteDifferenceMethod

## 作用

设置瞄准段微分修正属性页**差分方法**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Attribute` | 可选值：`Forward Difference`、`Central Difference`、`Signed Difference` |

## 示例

::: details open **设置瞄准段差分方法为有符号差分**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.FiniteDifferenceMethod Signed Difference
```
:::
