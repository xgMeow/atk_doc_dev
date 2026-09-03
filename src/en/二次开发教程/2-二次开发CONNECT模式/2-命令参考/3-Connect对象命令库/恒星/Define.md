# Define

## Description

Sets the star type and its parameters.

## Syntax

```atk-command
Define <StarObjectPath> {StarOption} <Parameters>
```

## Parameters

| Parameter | Description |
|------|------|
| `{StarOption}` | Star option type; see the values below |

### {StarOption} Values

| Value | Description |
|------|------|
| `Position` | `<RightAscen> <Declination>` |
| `Motion` | `<RightAscen> <Declination>` |
| `Magnitude` | `<Magnitude>` |
| `Parallax` | `<Parallax>` |

## Examples

::: details open **Define the star position**
```
Define */Star/Star1 Position 20.0 48.0
```
:::
