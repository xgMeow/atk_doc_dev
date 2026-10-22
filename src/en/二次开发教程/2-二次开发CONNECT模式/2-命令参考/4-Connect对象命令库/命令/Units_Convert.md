---
groups: [Scenario]
---

# Units_Convert

## Description

Converts a value from one unit to another within the same dimension.

## Syntax

```atk-command
Units_Convert <ScenarioPath> Date {FromUnit} {ToUnit} "<InputValue>"
Units_Convert <ScenarioPath> Unit {DimensionName} {FromUnit} {ToUnit} "<InputValue>"
```

## Additional Notes

The command has two forms, `Date` and `Unit`: the `Date` form converts time units, and the `Unit` form converts units of other dimensions.

The table below describes the command parameters.

| Parameter | Description |
|------|------|
| `{DimensionName}` | The dimension to which the value to be converted belongs (the `Date` form does not use this parameter) |
| `{FromUnit}` | The unit name or abbreviation of `<InputValue>` |
| `{ToUnit}` | The unit name or abbreviation to which `<InputValue>` is to be converted |
| `<InputValue>` | The value to be converted |

Notes:

- If `{FromUnit}`, `{ToUnit}`, or `<InputValue>` contains spaces, it must be enclosed in double quotes.
- The `Units_Get` command can be used to obtain the available dimensions and the current unit setting of each dimension.
- The `UnitNames` option of the `Units_Get` command can be used to obtain the valid unit names for a given dimension.

## Examples

::: details open **Convert a time unit**

```
Units_Convert * Date UTCG BJT "1 Jul 2021 09:00:00.000"
```

:::

::: details open **Convert units within a dimension**

```
Units_Convert * Unit Distance m km 1000
```

:::
