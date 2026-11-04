# Update Value

## 作用

设置更新段的值。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Update.{Val Attribute} <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Val Attribute` | 包括 `DryMassVal`、`FuelMassVal`、`SRPAreaVal`、`DragAreaVal`、`CrVal`、`CdVal` |
| `Value` | 更新值 |
| `Unit` | 可选，单位 |

### `Val Attribute` 取值

| 取值 | 量纲 |
|------|---------|
| `DryMassVal` | 质量 |
| `FuelMassVal` | 质量 |
| `SRPAreaVal` | 面积（距离单位的平方） |
| `DragAreaVal` | 面积（距离单位的平方） |
| `CrVal` | 无 |
| `CdVal` | 无 |

## 示例

::: details open **设置拖拽面积值为 10 m²**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Update.DragAreaVal 10 m^2
```
:::
