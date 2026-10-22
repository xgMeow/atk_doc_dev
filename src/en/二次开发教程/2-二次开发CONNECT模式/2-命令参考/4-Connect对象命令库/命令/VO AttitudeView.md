---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite, Attitude and Pointing]
---

# VO AttitudeView

## Description

Sets the attitude sphere attributes of the object.

## Syntax

```atk-command
VO <ObjectPath> AttitudeView {AttitudeViewOption} <Parameters>
```

## Parameters

::: details Detailed Description (click to expand)

| `AttitudeViewOption` | `Parameters` |
| --- | --- |
| `Sphere` | `{SphereOption1} <Value1> [{SphereOption2} <Value2> ...]` |
| `Projection` | `{ProjectionOption1} <Value1> [{ProjectionOption2} <Value2> ...]` |

- If `AttitudeViewOption` is `Sphere`, the available `SphereOption` attributes are:

| `SphereOption` | `Value` | Description |
| --- | --- | --- |
| `Show` | `{On \| Off}` | Whether the attitude sphere is shown |
| `SphereColor` | `{Color}` | For color settings, see [Common Graphics Formats](../../2-参数值格式/颜色格式.md) |
| `ZeroDegColor` | `{Color}` | Sets the zero-degree color. For color settings, see [Common Graphics Formats](../../2-参数值格式/颜色格式.md) |
| `ZeroDegLineWidth` | `<Value>` | Sets the zero-degree line width. Range `1-10` |
| `GridLineWidth` | `<Value>` | Sets the line width. Range `1-10` |
| `Frame` | `"Type Axes {CrdnDefOptions}"` | For the values that `CrdnDefOptions` accepts, see the table below |
| `Scale` | `<Value>` | Sets the scale. Range `0-30` |

- If `SphereOption` is `Frame`, the following `{CrdnDefOptions}` attributes can be set:

| `CrdnDefOptions` | `<CrdnDefValue>` | Description |
| --- | --- | --- |
| `Name` | `<NameOfAxes>` | The name of the Axes |
| `CBName` | `<NameOfCentralBody>` | The name of the central body |
| `ObjectPath` | `<ObjectPath>` | The object path, e.g. `Satellite/Satellite2` |

::: tip Note
- If `CBName` and `ObjectPath` are not entered, `Name` defaults to the Axes of the current object.
:::

- If `AttitudeViewOption` is `Projection`, the available `ProjectionOption` attributes are:

| `ProjectionOption` | `Value` | Description |
| --- | --- | --- |
| `Name` | `<CBName>` | Currently only includes Sun and Moon |
| `Show` | `{On \| Off}` | The projection name must be entered before the visibility can be set |
| `ShowLabel` | `{On \| Off}` | The projection name must be entered before whether the label is shown can be set |
| `Color` | `{Color}` | For color settings, see [Common Graphics Formats](../../2-参数值格式/颜色格式.md) |
| `PointSize` | `<Value>` | Sets the point size |

:::

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Set attitude sphere projection properties**
```
VO */Satellite/Satellite1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6 Frame "Type Axes ObjectPath Satellite/Satellite2 Name Fixed"
```
:::

::: details open **Set the Sphere properties of the attitude sphere**
```
VO */Satellite/Satellite1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::

::: details open **Set the Projection Attributes of the Satellite Attitude Sphere**
```
VO */Satellite/Satellite1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6 Frame "Type Axes ObjectPath Satellite/Satellite2 Name Fixed"
```
:::

::: details open **Set the Sphere Attributes of the Satellite Attitude Sphere**
```
VO */Satellite/Satellite1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::

::: details open **Set attitude sphere projection properties**
```
VO */Facility/Facility1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6 Frame "Type Axes ObjectPath Satellite/Satellite2 Name Fixed"
```
:::

::: details open **Set the sphere properties of the attitude sphere**
```
VO */Facility/Facility1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::

::: details open **Set projection properties**
```
VO */Missile/Missile1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6
```
:::

::: details open **Set attitude sphere properties**
```
VO */Missile/Missile1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::

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

::: details open **Set projection properties**
```
VO */GroundVehicle/GroVeh1  AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6 Frame "Type Axes ObjectPath Satellite/Satellite2 Name Fixed"
```
:::

::: details open **Set attitude sphere properties**
```
VO */GroundVehicle/GroVeh1  AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::

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
