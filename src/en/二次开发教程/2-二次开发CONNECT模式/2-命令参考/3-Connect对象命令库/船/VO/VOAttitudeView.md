# VOAttitudeView

## Description

Set the **vehicle attitude sphere** properties.

## Syntax

```atk-command
VO <ObjectPath> AttitudeView {AttitudeViewOption} <Parameters>
```

## Parameters

### AttitudeViewOption Values

| AttitudeViewOption | Parameters |
| -- | -- |
| `Sphere` | `{SphereOption1} <Value1> [{SphereOption2} <Value2> ...]` |
| `Projection` | `{ProjectionOption1} <Value1> [{ProjectionOption2} <Value2> ...]` |

### SphereOption Values

| SphereOption | Value | Description |
| -- | -- | -- |
| `Show` | `{On \| Off}` | Whether the attitude sphere is shown |
| `SphereColor` | `{Color}` | For color settings, see [Color Format](../../../2-参数值格式/颜色格式.md) |
| `ZeroDegColor` | `{Color}` | Set the zero-degree color. For color settings, see [Color Format](../../../2-参数值格式/颜色格式.md) |
| `ZeroDegLineWidth` | `<Value>` | Set the zero-degree line width. Range `1-10` |
| `GridLineWidth` | `<Value>` | Set the line width. Range `1-10` |
| `Frame` | `"Type Axes {CrdnDefOptions}"` | For the values that `CrdnDefOptions` accepts, see the table below |
| `Scale` | `<Value>` | Set the scale. Range `0-30` |

### CrdnDefOptions Values for Frame

| CrdnDefOptions | `<CrdnDefValue>` | Description |
| -- | -- | -- |
| `Name` | `<NameOfAxes>` | Name of the Axes |
| `CBName` | `<NameOfCentralBody>` | Central body name |
| `ObjectPath` | `<ObjectPath>` | Object path, e.g. `Satellite/Satellite2` |

### ProjectionOption Values

| ProjectionOption | Value | Description |
| -- | -- | -- |
| `Name` | `<CBName>` | Currently includes only Sun and Moon |
| `Show` | `{On \| Off}` | A projection name must be entered to set whether it is shown |
| `ShowLabel` | `{On \| Off}` | A projection name must be entered to set whether the label is shown |
| `Color` | `{Color}` | For color settings, see [Color Format](../../../2-参数值格式/颜色格式.md) |
| `PointSize` | `<Value>` | Set the point size |

## Additional Notes

- If `CBName` and `ObjectPath` are not entered, `Name` defaults to the current object's Axes.

## Examples

::: details open **Set attitude sphere projection properties**
```
VO */Ship/Ship1  AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6 Frame "Type Axes ObjectPath Satellite/Satellite2 Name Fixed"
```
:::

::: details open **Set the Sphere properties of the attitude sphere**
```
VO */Ship/Ship1  AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::
