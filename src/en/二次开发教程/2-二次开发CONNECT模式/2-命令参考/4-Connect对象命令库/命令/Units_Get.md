---
groups: [Scenario]
---

# Units_Get

## Description

Obtains the units currently used by the input modules.

## Syntax

```atk-command
Units_Get <ScenarioPath> {Option}
```

## Additional Notes

`{Option}` specifies which category of units to query; its values are as follows.

| `{Option}` | Description |
|------|------|
| `GUI` | Returns the units used when data is entered through the graphical user interface |
| `Report` | Returns the units used when reports are generated and displayed through the graphical user interface |
| `Connect` | Returns the units dedicated to Connect commands. Connect units apply only to the `Date`, `Distance`, `Time`, and `Angle` dimensions |
| `ConnectReport` | Returns the units used when reports are generated and displayed in the current Connect session |

## Examples

::: details open **Obtain the units currently used by the GUI input module**

```
Units_Get * GUI
```

:::

::: details open **Obtain the units currently used by the Connect input module**

```
Units_Get * Connect
```

:::
