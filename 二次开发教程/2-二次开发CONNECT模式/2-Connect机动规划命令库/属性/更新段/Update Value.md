# Update Value

## 作用

设置更新段的值。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Update.{Val Attribute} <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Val Attribute` | 包括 `DryMassVal`、`FuelMassVal`、`SRPAreaVal`、`DragAreaVal`、`CrVal`、`CdVal` |
| `Value` | 更新值 |
| `Unit` | 可选，单位 |

### `Val Attribute` 取值

| 取值 | 默认单位 |
|------|---------|
| `DryMassVal` | $kg$ |
| `FuelMassVal` | $kg$ |
| `SRPAreaVal` | $m^2$ |
| `DragAreaVal` | $m^2$ |
| `CrVal` | — |
| `CdVal` | — |

## 示例

::: details open **设置拖拽面积值为 10 m²**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Update.DragAreaVal 10 m^2
```
:::
