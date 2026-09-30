# Profiles

## 作用

设置偏差分析段属性页。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles <ListOfProfiles>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<ListOfProfiles>` | 偏差分析段使用的偏差分析方法，取值见下表 |

`<ListOfProfiles>` 的取值如下。

| `<ListOfProfiles>` | 说明 |
|------|------|
| `PolynomialChaosExpansion` | 多项式混沌 |
| `MonteCarloSimulation` | 蒙特卡洛 |
| `AdaptiveGMM-PCE` | 自适应高斯混合模型与多项式混沌展开 |

注意事项：

- 设置偏差分析段属性页配置前，必须先添加属性页。
- 路径参数的完整路径与截断路径写法参见[命令语法约定](../../../1-命令语法约定.md)。

## 示例

::: details open **设置偏差分析段的偏差分析方法为多项式混沌**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles PolynomialChaosExpansion
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.Profiles`：属性路径，偏差分析段的数据分析配置
- `PolynomialChaosExpansion`：偏差分析方法，此处为多项式混沌

:::
