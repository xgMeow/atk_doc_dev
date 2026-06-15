# JoiningType

## 作用

设置跟随类型

## 语法

```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.JoiningType {Type}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Type` | `Join at Beginning of Leader's Ephemeris`、`Join at End of Leader's Ephemeris`、`Join at Final Epoch of Previous Segment`、`Specify Joining Conditions` |

## 示例

::: details open **设置跟随类型为 Join at End of Leader's Ephemeris**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningType "Join at End of Leader's Ephemeris"
```

:::
