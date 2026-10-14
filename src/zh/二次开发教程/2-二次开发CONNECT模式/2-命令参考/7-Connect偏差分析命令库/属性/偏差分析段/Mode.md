# Mode

## 作用

设置偏差分析段属性页模型。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.Mode <ModeType>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<ModeType>` | 模型，取值见下表 |

`<ModeType>` 的取值如下。

| `<ModeType>` | 说明 |
|------|------|
| `Iterate` | 迭代 |
| `Not Active` | 不激活 |
| `Run Once` | 只运行一次 |

注意事项：

- `<ModeType>` 取值中的 `Not Active`、`Run Once` 内部含空格，必须用双引号括起来，如 `"Not Active"`。

## 示例

::: details open **设置偏差分析段的模型为迭代**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Mode Iterate
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Mode`：属性路径，偏差分析段的模型
- `Iterate`：模型，此处为迭代

:::

::: details open **设置偏差分析段的模型为不激活**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Mode "Not Active"
```

- `"Not Active"`：模型，此处为不激活；字符串内部含空格，须用双引号括起来

:::
