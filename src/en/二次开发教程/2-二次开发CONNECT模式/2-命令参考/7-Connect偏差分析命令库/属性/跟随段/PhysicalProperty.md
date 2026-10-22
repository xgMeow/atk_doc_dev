# PhysicalProperty

## Description

Sets the spacecraft parameters.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.InitialState.{Attribute}.[{Attribute}.] <Value> <Unit>
```

## Parameters

| Parameter | Description |
|------|------|
| `Attribute` | `Cd`, `DragArea`, `Cr`, `SRPArea`, `DryMass`, and `FuelMass` |

## Examples

::: details open **Set the spacecraft fuel mass**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.InitialState.FuelMass 200 kg
```

:::
