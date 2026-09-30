# NumOfSamples

## 作用

设置偏差分析段蒙特卡洛属性页样本点数量。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.NumOfSamples <Value>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<Value>` | 样本点数量，取整数 |

## 示例

::: details open **设置偏差分析段的样本点数量**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.NumOfSamples 10
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.NumOfSamples`：属性路径，偏差分析段的样本点数量
- `10`：样本点数量

:::
