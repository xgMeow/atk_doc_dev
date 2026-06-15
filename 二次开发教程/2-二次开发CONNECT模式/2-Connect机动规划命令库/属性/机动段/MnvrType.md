# MnvrType

## 作用

设置机动类型

## 语法

```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.MnvrType <Maneuver Type>
```

## 补充说明

- `Maneuver Type` 包括属性 `Impulsive` 和 `Finite`

## 示例

::: details open **设置机动类型为 Impulsive**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.MnvrType Impulsive
```
:::
