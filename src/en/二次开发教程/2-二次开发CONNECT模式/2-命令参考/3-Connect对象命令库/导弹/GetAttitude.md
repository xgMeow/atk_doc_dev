# GetAttitude

## Description

Obtain the attitude type.

## Syntax

```atk-command
GetAttitude <ObjectPath> {AttOption}
```

## Additional Notes

- `AttOption` includes the attributes `Profile ConnectName` and `Profile LongName`.

## Examples

::: details open **Obtain the attitude type**
```
GetAttitude *//Missile/Missile1 Profile LongName
```
:::
