# Thrust

## 作用

设置推力大小

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Thrust {Value}
```

## 示例

::: details open **设置推力大小为 100**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Thrust 100
```
:::
