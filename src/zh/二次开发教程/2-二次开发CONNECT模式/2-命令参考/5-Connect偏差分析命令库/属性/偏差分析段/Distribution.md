# Distribution

## 作用

设置偏差分析段属性页中偏差类型。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.Distribution <DistributionType>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<DistributionType>` | 偏差类型，取值见下表 |

`<DistributionType>` 的取值如下。

| `<DistributionType>` | 说明 |
|------|------|
| `Gauss` | 高斯分布 |
| `Uniform` | 均匀分布 |
| `Mixture` | 混合分布 |

## 示例

::: details open **设置偏差分析段的偏差类型为高斯分布**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Distribution Gauss
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Distribution`：属性路径，偏差分析段的偏差类型
- `Gauss`：偏差类型，此处为高斯分布

:::
