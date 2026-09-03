# SpacecraftConfigurationType

## Description

Sets how the spacecraft parameters are configured.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.SpacecraftConfigurationType <Value>
```

## Parameters

| Parameter | Description |
|------|------|
| `Value` | `Inherit Spacecraft Configuration From Previous Segment` and `Specify Configuration` |

## Examples

::: details open **Set the spacecraft parameters to Specify Configuration**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.SpacecraftConfigurationType "Specify Configuration"
```

:::
