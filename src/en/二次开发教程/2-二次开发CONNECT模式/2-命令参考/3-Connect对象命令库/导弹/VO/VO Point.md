# VO Point

## Description

Set the missile 3D model point properties.

## Syntax

```atk-command
VO <ObjectPath> Point {Options} <value>
```

## Parameters

| Parameter | Description |
| ---------------- | -------------- |
| `Show {on \| off}`  | Show or hide the 3D model points. |
| `size {value}`      | Sets the point size. |

## Examples

::: details open **Show the 3D model points**
```
VO */Missile/Missile1 Point show on
```
:::

::: details open **Set the point size**
```
VO */Missile/Missile1 Point size 3
```
:::
