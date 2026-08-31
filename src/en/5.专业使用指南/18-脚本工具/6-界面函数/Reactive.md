# Reactive

## Description

Takes an expression as input and returns a new reactive expression.

## Syntax

```atks
value = 0
valueRef =& @Reactive(value)
```

::: tip
It is recommended to use the [`reactive关键词`](./reactive关键词.md) keyword to create reactive variables.
:::

## Additional Notes

- A reactive expression can be bound to UI controls, such as [`InputField`](InputField.md), [`Slider`](Slider.md), [`Test`](Text.md), etc.
- When the value of a reactive expression changes, the displayed content of these UI controls is updated accordingly
- If these UI controls support input, the value of the reactive expression is also updated when their input value changes

## Example

::: details open **Implementing an addition calculation**

```atks
a = 0
b = 0
a_ref =& @Reactive(a)
b_ref =& @Reactive(b)


CreateDialog(
    InputField(a_ref),
    InputField(b_ref),
    Text("The addition result is"),
    Text(str2double(a_ref) + str2double(b_ref))
)
```

![Screenshot](../../../../zh/5.专业使用指南/18-脚本工具/6-界面函数/media/Reactive/image.png)

:::
