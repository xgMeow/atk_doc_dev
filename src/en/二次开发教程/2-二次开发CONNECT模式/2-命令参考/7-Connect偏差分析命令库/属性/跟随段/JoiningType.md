# JoiningType

## Description

Sets the joining type of the follow segment.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.JoiningType {Type}
```

## Parameters

| Parameter | Description |
|------|------|
| `Type` | `Join at Beginning of Leader's Ephemeris`, `Join at End of Leader's Ephemeris`, `Join at Final Epoch of Previous Segment`, and `Specify Joining Conditions` |

## Examples

::: details open **Set the joining type to Join at End of Leader's Ephemeris**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningType "Join at End of Leader's Ephemeris"
```

:::
