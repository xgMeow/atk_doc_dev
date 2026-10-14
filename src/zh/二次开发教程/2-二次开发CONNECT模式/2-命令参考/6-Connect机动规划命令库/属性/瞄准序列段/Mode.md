# Mode

## 作用

设置瞄准段的配置页**模式**。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Value` | 可选值：`Iterate`、`Not Active`、`Run Once` |

## 示例

::: details open **设置瞄准段配置页模式为迭代**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.TargetSequence.Profiles.ShooterProfile.Mode Iterate
```
:::
