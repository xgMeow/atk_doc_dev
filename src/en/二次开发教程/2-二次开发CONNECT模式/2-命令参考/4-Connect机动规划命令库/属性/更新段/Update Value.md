# Update Value

## Description

Sets the value of the update segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Update.{Val Attribute} <Value> [{Unit}]
```

## Parameters

| Parameter | Description |
|------|------|
| `Val Attribute` | Includes `DryMassVal`, `FuelMassVal`, `SRPAreaVal`, `DragAreaVal`, `CrVal`, `CdVal` |
| `Value` | The update value |
| `Unit` | Optional, the unit |

### `Val Attribute` Values

| Value | Default Unit |
|------|---------|
| `DryMassVal` | $kg$ |
| `FuelMassVal` | $kg$ |
| `SRPAreaVal` | $m^2$ |
| `DragAreaVal` | $m^2$ |
| `CrVal` | — |
| `CdVal` | — |

## Examples

::: details open **Set the drag area value to 10 m²**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Update.DragAreaVal 10 m^2
```
:::
