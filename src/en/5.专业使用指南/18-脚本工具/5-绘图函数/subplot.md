# subplot

## Description

Create axes in tiled positions

## Syntax

```atks
subplot(m,n,p)
```

## Additional Notes

- `subplot(m,n,p)`: Divides the current figure into an m×n grid and creates axes at the position specified by p.
- Syslab: Numbers the subplot positions by row; the first subplot is in the first column of the first row, the second subplot is in the second column of the first row, and so on.

## Example

::: details open **Create a figure with two stacked subplots**

Plot a sine wave in each subplot.

```atks
subplot(2, 1, 1);
x = linspace(0,10,100);
y1 = sin(x);
plot(x,y1)
subplot(2, 1, 2);
y2 = sin(5 * x);
plot(x, y2)
show();
```

![Sine waves](../../../../zh/5.专业使用指南/18-脚本工具/5-绘图函数/media/subplot/image.png)

:::
