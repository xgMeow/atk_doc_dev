# SpacecraftConfigurationType

## 作用

设置航天器参数设置方式

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.SpacecraftConfigurationType <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Value` | `Inherit Spacecraft Configuration From Previous Segment`、`Specify Configuration` |

## 示例

::: details open **设置航天器参数为 Specify Configuration**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.SpacecraftConfigurationType "Specify Configuration"
```

:::
