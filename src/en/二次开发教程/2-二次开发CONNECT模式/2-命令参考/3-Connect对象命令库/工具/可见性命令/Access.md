# Access

## Description

Compute the visibility between two objects and output a visibility report only.

## Syntax

```atk-command
Access <ObjectPath> <AccessObjectPath> {TimePeriod <StartTime> <StopTime>}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Path of the object for which to compute visibility |
| `<AccessObjectPath>` | Path of the target object to access |
| `{TimePeriod <StartTime> <StopTime>}` | Time range of the visibility computation; <br/> `<StartTime>` is the start time; `<StopTime>` is the end time |

## Additional Notes

- Suitable for **one-to-one** scenarios: directly specify two objects to quickly determine whether they are visible to each other.
- The output is always a visibility report. If you need other formats such as AER, parameter rate, or non-visibility reports, use the `Access_RM` command instead.
- To process multiple object pairs at the same time, use the `AccessMulti` family of commands instead (configure the source/target/time first, then compute in batch).

## Examples

::: details open **Compute the visibility between Satellite1 and Satellite2 within the specified time interval.**

```
Access */Satellite/Satellite1 */Satellite/Satellite2 TimePeriod "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```

:::
