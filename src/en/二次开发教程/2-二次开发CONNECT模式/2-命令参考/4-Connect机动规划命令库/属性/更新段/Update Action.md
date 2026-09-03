# Update Action

## Description

Sets the action of the update segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Update.{Action Attribute} {Value}
```

## Parameters

| Parameter | Description |
|------|------|
| `Action Attribute` | Includes `DryMassAction`, `FuelMassAction`, `SRPAreaAction`, `DragAreaAction`, `CrAction`, `CdAction` |
| `Value` | Includes `Add value`, `Subtract value`, `Set to new value`, `No change in value` |

## Examples

::: details open **Set the drag area action to no change**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Update.DragAreaAction No change in value
```
:::
