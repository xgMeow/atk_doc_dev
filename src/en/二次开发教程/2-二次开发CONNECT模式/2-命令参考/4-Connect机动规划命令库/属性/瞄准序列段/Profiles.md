# Profiles

## Description

Set the **profile** of the target sequence segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles <List of Profiles>
```

## Additional Notes

- A profile must be added before setting target sequence segment profile properties.

## Parameters

| Parameter | Description |
|------|------|
| `List of Profiles` | Optional values: `Differential_Corrector`, `SQP_Optimizer`, `Evolution_Optimizer` |

## Examples

::: details open **Set the profile of the target sequence segment to Differential Corrector**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.profiles Differential_Corrector
```
:::
