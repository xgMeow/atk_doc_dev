# AccessMulti Objects

## Description

Specify the **target objects** (observed objects) for batch visibility computation. Multiple objects can be specified at the same time.

## Syntax

```atk-command
AccessMulti / Objects <CovObjectPath> <CovObjectPath> …
```

## Parameters

| Parameter | Description |
|------|------|
| `<CovObjectPath>` | Path of the visibility object; multiple objects can be specified |

## Additional Notes

- This command is the **configuration step** of the AccessMulti framework, used to specify "what to observe".
- Target objects (Objects) are usually the observed entities, such as ground facilities and aircraft.
- Used together: `AccessMulti / Assets` specifies the sources, and `AccessMulti / Access Compute` executes the computation.

## Examples

::: details open **Select multiple target objects for visibility analysis at the same time.**

```
AccessMulti / objects */Facility/Target1 */Facility/Target2 */Facility/Target3
```

:::
