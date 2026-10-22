---
groups: [Scenario]
---

# GetEpoch

## Description

Gets the epoch time of the current scenario

## Syntax

```atk-command
GetEpoch <ScenarioPath>
```

## Additional Notes

- Returns epoch information only when the current scenario exists: it returns a message that gives the epoch of the current scenario, output in the Connect date format.
- The Connect date format is controlled by the unit setting commands: the `Connect` category of `Units_Set` sets the `Date` dimension, as in `Units_Set * Connect Date BJT`; alternatively, use [Units_SetConnect](./Units_SetConnect.md), which applies only to Connect units.
- For the options of the date format, see the `Date` row in [Common Unit Formats](../../2-参数值格式/单位格式.md).

## Examples

::: details open **View the current scenario epoch**

```
GetEpoch *
```

- `*`: The scenario path; represents the current scenario

:::
