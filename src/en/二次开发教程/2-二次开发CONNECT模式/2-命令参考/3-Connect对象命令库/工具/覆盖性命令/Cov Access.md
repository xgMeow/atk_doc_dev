# Cov Access

## Description

Compute and clear the coverage computation for a single object.

## Syntax

```atk-command
Cov <ObjectPath> Access {ComputeOption} [<Parameters>]
```

## Parameters

| `{ComputeOption} [<Parameters>]` | Description |
|------|------|
| `Compute [{TimeInterval} \| UseObjectTimes]` | Computes the object coverage |
| `Clear` | Clears the object coverage definition computation |
| `ClearAccesses` | Clears all computations and settings of the object |

## Examples

::: details open **Compute the object coverage using a time interval**
```
Cov */Satellite/Satellite1 Access Compute "20 Jun 2024 04:00:00.00" "21 Jun 2024 04:00:00.00"
```
:::
