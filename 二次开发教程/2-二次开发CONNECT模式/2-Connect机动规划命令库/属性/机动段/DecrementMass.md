# DecrementMass

## 作用

设置是否根据推进剂消耗更新质量

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.DecrementMass {Value}
```

## 补充说明

- `Value` 包括属性 `true` 和 `false`

## 示例

::: details open **启用推进剂消耗质量更新**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.DecrementMass true
```
:::
