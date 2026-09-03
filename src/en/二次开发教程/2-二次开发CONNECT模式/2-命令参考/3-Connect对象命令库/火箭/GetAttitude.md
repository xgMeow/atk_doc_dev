# GetAttitude

## Description

Obtain the launch vehicle attitude type.

## Syntax

```atk-command
GetAttitude <ObjectPath> {AttOption}
```

## Parameters

| Parameter | Description |
|------|------|
| `AttOption` | Can be `Profile ConnectName` or `Profile LongName`. |

## Examples

::: details open **Obtain the launch vehicle attitude type**
```
GetAttitude */LaunchVehicle/LaunchVehicle1 Profile LongName
```
:::
