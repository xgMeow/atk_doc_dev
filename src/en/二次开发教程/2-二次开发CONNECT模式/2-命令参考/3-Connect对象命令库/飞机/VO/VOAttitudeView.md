# VOAttitudeView

## Description

Set the **aircraft attitude sphere** properties.

## Syntax

```atk-command
VO <ObjectPath> AttitudeView {AttitudeViewOption} <Parameters>
```

## Parameters

| Parameter | Description |
|------|------|
| `Sphere` | `{SphereOption1} <Value1> [{SphereOption2} <Value2> ...]` |
| `Projection` | `{ProjectionOption1} <Value1> [{ProjectionOption2} <Value2> ...]` |

### `Sphere` Parameters

| Parameter | Description |
|------|------|
| `Show` | `{On \| Off}`: whether the attitude sphere is shown |
| `SphereColor` | `{Color}`: for color settings, see [Color Format](../../../2-参数值格式/颜色格式.md) |
| `ZeroDegColor` | `{Color}`: set the zero-degree color. For color settings, see [Color Format](../../../2-参数值格式/颜色格式.md) |
| `ZeroDegLineWidth` | `<Value>`: set the zero-degree line width, range `1-10` |
| `GridLineWidth` | `<Value>`: set the line width, range `1-10` |
| `Frame` | `"Type Axes {CrdnDefOptions}"`: for the values that `CrdnDefOptions` accepts, see the table below |
| `Scale` | `<Value>`: set the scale, range `0-30` |

### `{CrdnDefOptions}` Parameters of `Frame`

| Parameter | Description |
|------|------|
| `Name` | `<NameOfAxes>`: name of the Axes |
| `CBName` | `<NameOfCentralBody>`: central body name |
| `ObjectPath` | `<ObjectPath>`: object path, e.g. `Satellite/Satellite2` |

::: warning
- If `CBName` and `ObjectPath` are not entered, `Name` defaults to the current object's Axes.
:::

### `Projection` Parameters

| Parameter | Description |
|------|------|
| `Name` | `<CBName>`: currently includes only Sun and Moon |
| `Show` | `{On \| Off}`: a projection name must be entered before you can set whether it is shown |
| `ShowLabel` | `{On \| Off}`: a projection name must be entered before you can set whether the label is shown |
| `Color` | `{Color}`: for color settings, see [Color Format](../../../2-参数值格式/颜色格式.md) |
| `PointSize` | `<Value>`: set the point size |

## Examples

::: details open **Set attitude sphere projection properties**
```
VO */Aircraft/Aircraft1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6 Frame "Type Axes ObjectPath Satellite/Satellite2 Name Fixed"
```
:::

::: details open **Set attitude sphere Sphere properties**
```
VO */Aircraft/Aircraft1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::
