# UsePeriJudge

## Description

Set whether the minimum periapsis altitude is used.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.UsePeriJudge <Value>
```

## Examples

::: details open **Set to disable the minimum periapsis altitude check**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.UsePeriJudge false
```
:::
