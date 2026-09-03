# VOAttitudeView

## Description

Set the object attitude sphere properties.

## Syntax

```atk-command
VO <ObjectPath> AttitudeView {AttitudeViewOption} <Parameters>
```

## Parameters

| AttitudeViewOption | Parameters |
|------|------|
| `Sphere` | `{SphereOption1} <Value1> [{SphereOption2} <Value2> ...]` |
| `Projection` | `{ProjectionOption1} <Value1> [{ProjectionOption2} <Value2> ...]` |

### Sphere Parameters

When `AttitudeViewOption` is `Sphere`:

| Parameter | Value | Description |
|------|------|------|
| `Show` | `{On \| Off}` | Specifies whether the attitude sphere is displayed. |
| `SphereColor` | `{Color}` | For color settings, see [Common Graphic Formats](../../../2-参数值格式/颜色格式.md). |
| `ZeroDegLineWidth` | `<Value>` | Sets the zero-degree line width; range `1 - 10`. |
| `GridLineWidth` | `<Value>` | Sets the line width; range `1 - 10`. |
| `Frame` | `"Type Axes {CrdnDefOptions}"` | `CrdnDefOptions` currently only includes `Name Body` and `Name J2000`. |
| `Scale` | `<Value>` | Sets the scale; range `0-30`. |

### Projection Parameters

When `AttitudeViewOption` is `Projection`:

| Parameter | Value | Description |
|------|------|------|
| `Name` | `<CBName>` | Currently only includes Sun and Moon. |
| `Show` | `{On \| Off}` | The projection name must be entered before the display state can be set. |
| `ShowLabel` | `{On \| Off}` | The projection name must be entered before the label display state can be set. |
| `Color` | `{Color}` | For color settings, see [Common Graphic Formats](../../../2-参数值格式/颜色格式.md). |
| `PointSize` | `<Value>` | Sets the point size. |

## Examples

::: details open **Set the projection properties of the attitude sphere**
```
VO */LaunchVehicle/LaunchVehicle1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6
```
:::

::: details open **Set the sphere properties of the attitude sphere**
```
VO */LaunchVehicle/LaunchVehicle1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::
