# Slider

## Description

Creates a slider.

## Syntax

```atks
Slider()
```

## Additional Notes

- A slider can be bound to a [reactive variable](./reactive关键词.md) or a [reactive expression](./Reactive.md)

## Example

::: details open **Binding the slider state to a reactive variable**

```atks
reactive valueRef = 0.3

CreateDialog(
    Text(valueRef),
    Slider(valueRef)
)
```

:::
