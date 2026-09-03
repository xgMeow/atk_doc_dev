# AccessMulti Access

## Description

Clear previous visibility computation results and recompute object visibility in batch based on the current configuration.

## Syntax

```atk-command
AccessMulti / Access Compute [{TimeInterval} | UseObjectTimes]
```

## Parameters

| Parameter | Description |
|------|------|
| `{TimeInterval}` | Time interval of the visibility computation |
| `UseObjectTimes` | Use the object's own time settings |

## Additional Notes

- This command is the **execution step** of the AccessMulti framework. Before calling it, you must first complete the configuration with the following sub-commands:
  - `AccessMulti / Assets` — specifies the source objects (observers, such as satellite sensors)
  - `AccessMulti / Objects` — specifies the target objects (observed objects, such as ground facilities)

- Each execution **clears** the previous visibility results and then recomputes them based on the currently configured Assets, Objects, and Interval.
- The workflow is **configure first, compute later**, which is suitable for scenarios that require batch-processing a large number of object pairs.

## Examples

::: details open **After the configuration is complete, compute the object visibility within the specified time interval.**

```
AccessMulti / Access Compute "26 Sep 2035 12:00:00.00" "28 Sep 2035 12:00:00.00"
```

:::
