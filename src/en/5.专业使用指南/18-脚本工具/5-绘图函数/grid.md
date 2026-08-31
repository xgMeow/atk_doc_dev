# grid

## Description

Show or hide grid lines on the axes

## Syntax

```atks
grid("on")
grid("off")
grid(true)
grid(false)
```

## Additional Notes

- `grid("on")` / `(true)`: Displays the major grid lines of the current axes or figure returned by the `gca` command. Major grid lines extend from each tick mark.
- `grid("off")` / `(false)`: Removes all grid lines from the current axes or figure.

## Example

::: details open **Display grid lines**

```atks
    x = linspace(0, 10, 100);
    y = sin(x);
    plot(x, y)
    grid("on")
    show()
```

![Display grid lines](../../../../zh/5.专业使用指南/18-脚本工具/5-绘图函数/media/grid/image.png)

:::
