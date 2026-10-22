---
groups: [Scenario]
---

# Animate

## Description

Sets the simulation state of the scenario. It is used to start, pause, and reset the simulation, and to adjust the simulation speed or advance it by a single step.

Among these operations, Reset requires particular attention: besides resetting the simulation, **it also causes each object in the scenario to generate ephemeris data**. Before the ephemeris data of a newly created object such as a satellite is generated, its report is an empty table, its trajectory is not visible in the views, and analyses that take it as input compute no results. See "About Reset" below.

## Syntax

```atk-command
Animate <ScenarioPath> {AnimateOption} <Parameters>
```

## Parameters

| Parameter | Description |
| --- | --- |
| `Start` | Sets the simulation start state; defaults to `Forward` (forward simulation). See "Start Values" below for the allowed values. |
| `Pause` | Pauses the simulation. |
| `Reset` | Resets the simulation and causes each object in the scenario to generate ephemeris data. See "About Reset" below. |
| `Faster` | Increases the simulation time step. |
| `Slower` | Decreases the simulation time step. |
| `Speed` | Sets the simulation time step. |
| `Step` | Steps the simulation forward +1 or backward -1. See "Step Values" below for the allowed values. |
| `XRealTimeContinueFromPausedTime` | Controls the behavior of the internal real-time clock during a pause. See below for the allowed values. |

### Start Values

| Value | Description |
| --- | --- |
| `Forward` | Forward simulation |
| `Reverse` | Reverse simulation |
| `RealTime` | Real-time mode |
| `XRealTime` | Multiplier mode |
| `Normal` | Time-step mode |

### Step Values

| Value | Description |
| --- | --- |
| `Forward` | Steps forward +1 |
| `Reverse` | Steps backward -1 |

### XRealTimeContinueFromPausedTime Values

| Value | Description |
| --- | --- |
| `On` | Stops the internal real-time clock when the simulation is paused, and resumes playback from the current simulation time when the simulation is resumed. |
| `Off` | Default value. In multiplier mode, the internal real-time clock continues to run while the simulation is paused. When the simulation resumes, the simulation time jumps to the point that elapsed during the pause. |

## About Reset

Reset serves two purposes: it resets the simulation, and **it causes each object in the scenario to generate ephemeris data**.

An object such as a satellite created with [New](./New.md) is merely instantiated; its ephemeris data has not yet been generated. Until it is generated:

- reading the report of the object with [Report_RM](./Report_RM.md) returns only an empty table with a header row;
- the trajectory of the object is not visible in the 3D Graphics and 2D Graphics views;
- analyses that take the object as input compute no results; for example, the AdvCat analysis in [ACAT](./ACAT.md) computes no conjunction events.

Executing Reset once restores all of the above. Therefore, **this command must be sent after an object is created and before reports are read or computations are run**.

## Examples

::: details open **Start the scenario simulation**

```
Animate * Start
```

:::

::: details open **Generate ephemeris after creating an object**

```
Animate * Reset
```

:::
