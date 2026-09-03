# SetAnimation

## Description

Controls the simulation state.

## Syntax

```atk-command
SetAnimation <ScenarioPath> {AnimateOption} <Parameters>
```

## Parameters

| `{AnimateOption}` | `<Parameters>` | Description |
| --- | --- | --- |
| `CurrentTime` | `{TimeInstant}` | Sets the current simulation time |
| `AnimationMode` | `{Normal \| RealTime \| XRealTime}` | Sets the simulation mode |
| `TimeStep` | `{Increase \| Decrease \| <StepValue>}` | Sets the time-step mode forecast step to increase or decrease; you can enter a value directly |
| `RealTimeOffset` | `{Increase \| Decrease \| <OffsetValue>}` | Sets the real-time mode forecast step to increase or decrease; you can enter a value directly |
| `XRealTimeMultiplier` | `{Increase \| Decrease \| <MultValue>}` | Sets the multiplier mode forecast step to increase or decrease; you can enter a value directly |

## Examples

::: details open **Set the simulation mode to multiplier mode**

```
SetAnimation * AnimationMode XRealTime
```

:::
