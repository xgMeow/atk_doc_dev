# RetState

## Description

Sets whether this return segment returns the control variables to its parent segment

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.RetState {Value}
```

## Parameters

| Parameter | Description |
|------|------|
| `Value` | Includes the attributes `Enable` and `Disable` |

### `Value` Values

| Value | Description |
|------|------|
| `Enable` | Enable returning the control variables |
| `Disable` | Disable returning the control variables |

## Examples

::: details open **Set the RetState attribute value to Enable**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Return.RetState Enable
```
:::
