# RealTime

## Description

Sets attributes related to the RealTime propagator.

## Syntax

```atk-command
RealTime <VehObjectPath> {RealTimeOption} [<Parameters>]
```

## Parameters

| `{RealTimeOption}` | `[<Parameters>]` | Description |
| --- | --- | --- |
| `SetProp` | | Indicates that the propagator is a RealTime propagator |
| `SetLookAhead` | `{PropType} <Duration> <TimeStep> <TimeOutGap>` | Sets the look-ahead state |
| `SetHistory` | `<Duration> <InterpOrder>` | Sets the history state |

### `SetLookAhead` Parameters

| `<Parameter>` | Description |
| --- | --- |
| `{PropType}` | Propagation type |
| `<Duration>` | Duration |
| `<TimeStep>` | Time step |
| `<TimeOutGap>` | Specifies the preview value |

### `SetHistory` Parameters

| `<Parameter>` | Description |
| --- | --- |
| `<Duration>` | History duration |
| `<InterpOrder>` | Interpolation order |

## Examples

::: details open **Set RealTime Propagator Attributes**
```
RealTime */Satellite/Satellite1 SetLookAhead J2Perturbation 1800 60 240
```
:::
