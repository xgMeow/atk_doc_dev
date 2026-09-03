# Position

## Description

Gets the current position data of the satellite.

## Syntax

```atk-command
Position <ObjectPath> [{TimeValue}]
```

## Additional Notes

- The returned data is the current position X, Y, Z and the current velocity X, Y, Z

## Examples

::: details open **Get the Current Position Data of the Satellite**
```
Position */Satellite/Satellite1 "29 Jul 2023 00:00:00.00"
```
:::
