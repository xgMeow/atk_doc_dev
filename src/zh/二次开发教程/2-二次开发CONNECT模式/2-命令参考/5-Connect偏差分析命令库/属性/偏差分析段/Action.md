# Action

## 作用

设置偏差分析段动作类型。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Action <ActionType>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<ActionType>` | 动作类型，取值见下表 |

`<ActionType>` 的取值如下。

| `<ActionType>` | 说明 |
|------|------|
| `Run active profiles` | 迭代 |
| `Run nominal sequence` | 正常运行 |
| `Run active profiles ONCE` | 应用迭代结果运行 |

## 示例

::: details open **设置偏差分析段的动作类型为迭代**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Action "Run active profiles"
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.Action`：属性路径，偏差分析段的动作类型
- `"Run active profiles"`：动作类型，此处为迭代；取值内部含空格，须用双引号括起来

:::
