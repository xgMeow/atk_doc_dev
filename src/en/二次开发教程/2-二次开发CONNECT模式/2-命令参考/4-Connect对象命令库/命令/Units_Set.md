---
groups: [Scenario]
---

# Units_Set

## Description

Sets the units used by the user interface, Connect, and reports.

## Syntax

```atk-command
Units_Set <ScenarioPath> {Option} <Parameters>
```

## Additional Notes

`{Option}` specifies which category of units to set, and `<Parameters>` specifies the unit setting itself.

`<Parameters>` is written the same way for every `{Option}`, namely `{Internal | {Dimension} {Unit}... }`: either the single keyword `Internal`, or one or more groups of `{Dimension} {Unit}`. For the valid values of `{Dimension} {Unit}`, see [Common Unit Format](../../2-参数值格式/单位格式.md).

The valid values of `{Option}` are:

| `{Option}` | Description |
|------|------|
| `GUI` | Sets the units used when data is entered through the graphical user interface |
| `Report` | Sets the units used when reports are generated and displayed through the graphical user interface |
| `Connect` | Sets the units used when Connect commands are entered. Connect units apply only to the `Date`, `Distance`, `Time`, and `Angle` dimensions; for other dimensions the GUI units are still used. Refer to the description of each command to confirm whether any exception applies |
| `ConnectReport` | Sets the units used when reports are generated and displayed in the current Connect session |
| `All` | Sets the specified units for Connect, GUI, Report, and ConnectReport at the same time |

Notes:

- Connect units are set per dimension: each parameter in a command is entered in the unit set for its dimension, for example angle values in the `Angle` unit and distance values in the `Distance` unit.
- This command can affect several categories of units, such as GUI and Report; to set only Connect units, use [Units_SetConnect](./Units_SetConnect.md).

## Examples

::: details open **Set the distance unit of the graphical user interface**

```
Units_Set * GUI Distance km
```

- `*`: the scenario path, representing the current scenario
- `GUI`: the unit module to set, here the user interface unit setting
- `Distance`: the dimension, representing distance
- `km`: the distance unit, kilometers

:::

::: details open **Set the date unit of Connect commands**

```
Units_Set * Connect Date BJT
```

- `*`: the scenario path, representing the current scenario
- `Connect`: the category of units to set, here Connect command input
- `Date`: the dimension, representing date
- `BJT`: the date unit, Beijing Time

:::

::: details open **Set the distance unit for all categories at the same time**

```
Units_Set * All Distance km
```

- `*`: the scenario path, representing the current scenario
- `All`: affects Connect, GUI, Report, and ConnectReport at the same time
- `Distance`: the dimension, representing distance
- `km`: the distance unit, kilometers

:::
