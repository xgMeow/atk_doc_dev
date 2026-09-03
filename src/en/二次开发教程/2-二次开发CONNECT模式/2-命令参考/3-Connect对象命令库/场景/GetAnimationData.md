# GetAnimationData

## Description

Obtains the basic attributes of a scenario.

## Syntax

```atk-command
GetAnimationData <ScenarioPath> {Option}
```

## Parameters

| `{Option}` | Description |
|------|------|
| `TimePeriod` | Gets the scenario start time and stop time |
| `CurrentTime` | Gets the current simulation time |
| `TimeStep` | Gets the simulation time step; the default unit is seconds |

## Examples

::: details open **Get the scenario time period**

```
GetAnimationData * TimePeriod
```

:::
