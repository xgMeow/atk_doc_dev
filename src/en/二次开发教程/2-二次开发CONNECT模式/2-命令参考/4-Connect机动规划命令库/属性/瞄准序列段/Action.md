# Action

## Description

Set the **action** of the target sequence segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Target_Sequence.Action {Value}
```

## Parameters

| Parameter | Description |
|------|------|
| `Value` | Optional values: `Run active profiles`, `Run nominal sequence`, `Run active profiles ONCE` |

## Examples

::: details open **Set the action of the target sequence segment to Run active profiles**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Action Run active profiles
```
:::
