# Graphics SetColor

## Description

Sets the color of the star trajectory label.

## Syntax

```atk-command
Graphics <ObjectPath> SetColor {Color} [{Item}]
```

## Additional Notes

- See [Common Graphics Formats](../../2-参数值格式/颜色格式.md) for the available `Color` attributes.

## Examples

::: details open **Set the star label color**
```
Graphics */Star/Star1 SetColor %255000000
```
:::
