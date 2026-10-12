# SeparationType

## 作用

设置分离类型

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.SeparationType {Type}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Type` | `Separate at End of Leader's Ephemeris`、`Specify Separation Conditions` |

## 示例

::: details open **设置分离类型为 Separate at End of Leader's Ephemeris**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.SeparationType "Separate at End of Leader's Ephemeris"
```

:::
