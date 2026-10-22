# Action

## Description

Sets the action type of the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Action <ActionType>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<ActionType>` | Action type; see the table below for the values |

The values of `<ActionType>` are as follows.

| `<ActionType>` | Description |
|------|------|
| `Run active profiles` | Iteration |
| `Run nominal sequence` | Nominal run |
| `Run active profiles ONCE` | Run with the iteration results applied |

## Examples

::: details open **Set the action type of the deviation analysis segment to iteration**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Action "Run active profiles"
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Action`: attribute path, the action type of the deviation analysis segment
- `"Run active profiles"`: action type, here iteration; the value contains spaces and must be enclosed in double quotes

:::
