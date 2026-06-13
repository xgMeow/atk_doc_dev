# PhysicalProperty

## 作用

设置航天器参数

## 语法

```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.InitialState.{Attribute}.[{Attribute}.] <Value> <Unit>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Attribute` | `Cd`、`DragArea`、`Cr`、`SRPArea`、`DryMass`、`FuelMass` |

## 示例

::: details open **设置航天器燃料质量**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.InitialState.FuelMass 200 kg
```

:::
