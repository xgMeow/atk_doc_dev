# GetAttitude

## Description

Gets the attitude type of the satellite.

## Syntax

```atk-command
GetAttitude <ObjectPath> {AttOption}
```

## Parameters

| Parameter | Description |
|------|------|
| `AttOption` | Includes the attributes `Profile ConnectName`, `Profile LongName` |

## Examples

::: details open **Get the Attitude Type of the Satellite**
```
GetAttitude */Satellite/Satellite1 Profile LongName
```
:::
