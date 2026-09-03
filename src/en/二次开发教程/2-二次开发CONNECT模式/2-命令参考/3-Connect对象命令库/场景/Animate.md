# Animate

## Description

Sets the scenario simulation.

## Syntax

```atk-command
Animate <ScenarioPath> {AnimateOption} <Parameters>
```

## Parameters

| {AnimateOption} | Description |
| --- | --- |
| `Start` | Sets the simulation start state; defaults to `Forward` (forward simulation). See the table below for `<Parameters>` values |
| `Pause` | Pauses the simulation |
| `Reset` | Resets the simulation |
| `Faster` | Increases the simulation time step |
| `Slower` | Decreases the simulation time step |
| `Speed` | Sets the simulation time step |
| `Step` | Steps the simulation forward +1 / backward -1. See the table below for `<Parameters>` values |
| `XRealTimeContinueFromPausedTime` | Controls the behavior of the internal real-time clock during a pause. See the table below for `<Parameters>` values |

### Start `<Parameters>` Values

| Value | Description |
| --- | --- |
| `Forward` | Forward simulation |
| `Reverse` | Reverse simulation |
| `RealTime` | Real-time mode |
| `XRealTime` | Multiplier mode |
| `Normal` | Time-step mode |

### Step `<Parameters>` Values

| Value | Description |
| --- | --- |
| `Forward` | Steps forward +1 |
| `Reverse` | Steps backward -1 |

### XRealTimeContinueFromPausedTime `<Parameters>` Values

| Value | Description |
| --- | --- |
| `On` | Stops the internal real-time clock when the simulation is paused, and resumes playback from the current simulation time when the simulation is resumed. |
| `Off` | Default value. In multiplier mode, the internal real-time clock continues to run while the simulation is paused. When the simulation resumes, the simulation time jumps to the point that elapsed during the pause. |

## Examples

::: details open **Start the scenario simulation**
```
Animate * Start
```
:::
