---
groups: [Scenario]
---

# Units_SetConnect

## Description

Sets the unit properties of Connect mode.

## Syntax

```atk-command
Units_SetConnect <AppOrScenPath> {Default | Internal | {Dimension} {Unit}... }
```

## Additional Notes

- See [Unit Format](../../2-参数值格式/单位格式.md) for `{Dimension} {Unit}`.
- The units of eleven dimensions can be set: `Date`, `Distance`, `Time`, `Angle`, `Mass`, `Power`, `Frequency`, `Temperature`, `Ratio`, `Force`, and `Pressure`. Velocity, acceleration, angular rate, area, and similar quantities are derived from these dimensions and are not set separately.

## Examples

::: details open **Set the date unit to Julian date**

```
Units_SetConnect / Date "JDate"
```

:::
