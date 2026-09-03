# Units_SetConnect

## Description

Sets the unit attributes of Connect mode.

## Syntax

```atk-command
Units_SetConnect <AppOrScenPath> {Default | Internal | {Dimension} {Unit}... }
```

## Additional Notes

- See [Common Unit Formats](../../2-参数值格式/单位格式.md) for `{Dimension} {Unit}`.
- Connect mode only supports setting `{Dimension}` to `Date`, `Distance`, `Time`, and `Angle`.

## Examples

::: details open **Set the date unit to Julian date**

```
Units_SetConnect / Date "JDate"
```

:::
