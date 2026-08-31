# scatter

## Description

Scatter plot

## Syntax

```atks
scatter(x,y)
scatter(x,y,sz)
scatter(x,y,sz,c)
```

## Additional Notes

- `scatter(x,y)`: Creates a scatter plot with circular markers at the locations specified by vectors x and y. This type of plot is also called a bubble chart.
- `scatter(x,y,sz)`: Creates a scatter plot while specifying the circle sizes. To plot circles of equal size, specify sz as a scalar. To plot circles of varying sizes, specify sz as a vector whose length equals the length of x and y.

## Example

::: details open **Create a scatter plot**

```atks
    x = linspace(0, 3*pi, 200);
    y = cos(x) + rand(1,200);
    scatter(x, y)
```

![](../../../../zh/5.专业使用指南/18-脚本工具/5-绘图函数/media/scatter/image.png)

:::

::: details open **Change circle sizes and colors**

```atks
    x = linspace(0, 3 * pi, 200);
    y = cos(x) + rand(1,200);
    s = linspace(1, 10, 200);
    c = linspace(1, 10, length(x));
    scatter(x, y, s, c)
```

![](../../../../zh/5.专业使用指南/18-脚本工具/5-绘图函数/media/scatter/image-2.png)

:::
