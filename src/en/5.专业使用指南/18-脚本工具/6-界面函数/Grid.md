# Grid

## Description

Creates a two-dimensional grid container.

## Syntax

```atks
Grid(
    (1, "text 1"),
    (2, Button())
)
```

## Additional Notes

- Expressions or controls passed to this function are arranged in a grid

## Example

::: details open **Creating buttons arranged in a 2x2 grid**

```atks
Grid(
    (Button(), Button()),
    (Button(), Button())
)
```

:::

::: details open **Creating text and buttons arranged in a 2x2 grid**

```atks
Grid(
    ("text 1", Button()),
    ("text 2", Button())
)
```

:::
