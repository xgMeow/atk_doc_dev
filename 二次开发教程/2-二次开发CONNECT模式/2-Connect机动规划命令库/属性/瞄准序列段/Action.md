# Action

## 作用

设置瞄准段的**动作**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Target_Sequence.Action {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Value` | 可选值：`Run active profiles`、`Run nominal sequence`、`Run active profiles ONCE` |

## 示例

::: details open **设置瞄准段动作为运行活动配置**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Action Run active profiles
```
:::
