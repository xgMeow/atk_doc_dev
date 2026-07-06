# Grid

## 作用

新建二维网格容器

## 语法

```atks
Grid(
    (1, "text 1"),
    (2, Button())
)
```

## 补充说明

- 传入该函数的表达式或者控件将会按网格排列

## 示例

::: details open **创建 2x2 排列的按钮**

```atks
Grid(
    (Button(), Button()),
    (Button(), Button())
)
```

:::

::: details open **创建 2x2 排列的文字和按钮**

```atks
Grid(
    ("text 1", Button()),
    ("text 2", Button())
)
```

:::
