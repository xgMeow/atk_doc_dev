# StateToPass

## Description

Sets the state passed from the sequence segment to the next segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StateToPass {Value}
```

## Additional Notes

- `Value` includes the attribute values `Final` and `Initial`

## Examples

::: details open **Set the state passed by the sequence segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Backward_Sequence.StateToPass Initial
```
:::
