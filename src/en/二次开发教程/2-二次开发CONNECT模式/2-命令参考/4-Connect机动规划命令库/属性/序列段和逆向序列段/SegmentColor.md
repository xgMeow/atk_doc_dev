---
description: Sets the color of sequence segments and reverse sequence segments, including the RGB calculation method of the color value and usage examples.
---

# SegmentColor

## Description

Sets the sequence segment and reverse sequence segment color.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.SegmentColor <Value>
```

## Additional Notes

- When the color is set from `-1` to `-16777216`, the transparency is 255 and the color ranges from 255255255 to 000000000. The value is encoded in RGB format with each 255 carrying to the next higher digit. For example, for red 255000000 with transparency 255, `255000000 ： -256^3+255*256^0= -16776961` and `000255000：-256^3+255*256^1= -16711936`.

- From 0 to 4294967295, the color ranges from 000000000 (when the transparency is 000) to 255255255 (when the transparency is 255). For example, for red 255000000 with transparency 255, `255000000255: 255*256^3 + 255*256^0 = 4278190335`.

## Examples

::: details open **Set the sequence segment color**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Sequence.SegmentColor -65536
```
:::
