# ExpectedRelativeError

## 作用

设置偏差分析段自适应高斯混合模型与多项式混沌展开属性页预期相对误差。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.ExpectedRelativeError <Value>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<Value>` | 预期相对误差，取小数 |

## 示例

::: details open **设置偏差分析段的预期相对误差**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpectedRelativeError 0.0001
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpectedRelativeError`：属性路径，偏差分析段的预期相对误差
- `0.0001`：预期相对误差

:::
