# SegmentColor

## Description

Sets the propagate segment color `SegmentColor`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.SegmentColor <Value>
```

## Additional Notes

- Color values from -1 to -16777216 correspond to colors from 255255255 to 000000000 when the alpha is 255. They are encoded in RGB format with a carry of 1 for each full 255. For example, red is 255000000; with an alpha of 255, `255000000 ： -256^3+255*256^0=- 16776961`, `000255000：-256^3+255*256^1=-16711936`
- From 0 to 4294967295, colors go from 000000000 with an alpha of 000 to 255255255 with an alpha of 255. For example, red is 255000000; with an alpha of 255, `255000000255：255*256^3+255*256^0=4278190335`
- Getting this attribute value is not supported yet

## Examples

::: details open **Set the propagate segment color to red (alpha 255)**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.SegmentColor 4278190335
```
:::
