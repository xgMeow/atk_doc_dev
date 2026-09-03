# Access_RM Access

## Description

Obtain the visibility report of a single object. The `ReportStyle` parameter supports 9 output formats (AER, rate, statistical summary, etc.).

## Syntax

```atk-command
Access_RM <ObjectPath> Access Compute "<ReportStyle>" [{TimeIntervals} | UseObjectTimes]
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Object path |
| `<ReportStyle>` | Report type, see the table below |
| `{TimeIntervals}` | Time intervals |
| `UseObjectTimes` | Use the object's own times |

### \<ReportStyle\> Values

| \<ReportStyle\> | Description |
|----|------|
| `Access` | Visibility report |
| `AER` | Visibility AER report |
| `AER Rate` | Visibility parameter rate report |
| `UnAccessible` | Non-visibility report |
| `UnAccessible AER` | Non-visibility AER report |
| `Access Summary` | Visibility summary report |
| `AER Summary` | Visibility AER summary report |
| `UnAccessible Summary` | Non-visibility summary report |
| `Range Rate` | Visibility range rate report |

## Additional Notes

- Suitable for scenarios that require generating **multi-dimensional visibility analysis reports** for a single object.
- It processes one object at a time. To process multiple objects in batch, use the `AccessMulti` family of commands instead.

## Examples

::: details open **Obtain the visibility report of Satellite1 within the specified time interval.**

```
Access_RM */Satellite/Satellite1 Access Compute "Access" "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```

:::
