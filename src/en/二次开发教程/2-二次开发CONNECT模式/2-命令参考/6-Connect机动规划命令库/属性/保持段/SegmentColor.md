# SegmentColor

## Description

Sets the **coast segment** color.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.SegmentColor <Value>
```

## Additional Notes

- From `-1` to `-16777216`, color values represent colors from 255255255 to 000000000 at an alpha of 255, encoded in the RGB format where a full 255 carries 1 to the next digit. For example, red 255000000 at an alpha of 255 gives `255000000 ： -256^3+255*256^0= -16776961`, and `000255000：-256^3+255*256^1= -16711936`.
- From 0 to 4294967295, color values range from 000000000 at an alpha of 000 to 255255255 at an alpha of 255. For example, red 255000000 at an alpha of 255 gives `255000000255：255*256^3+255*256^0=4278190335`.

::: info Note
Getting this attribute value is not supported yet.
:::

## Examples

::: details open **Set the Coast Segment Color to 4278190335**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.SegmentColor 4278190335
```
:::
