# ExpansionOrder

## 作用

设置偏差分析段多项式混沌属性页最大展开阶数。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.ExpansionOrder <Value>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<Value>` | 最大展开阶数，取整数 |

## 示例

::: details open **设置偏差分析段的最大展开阶数**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpansionOrder 10
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpansionOrder`：属性路径，偏差分析段的最大展开阶数
- `10`：最大展开阶数

:::
