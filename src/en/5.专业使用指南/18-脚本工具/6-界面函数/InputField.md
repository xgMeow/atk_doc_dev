# InputField

## Description

Creates an input field.

## Syntax

```atks
InputField()
```

## Additional Notes

- An input field can be bound to a [reactive variable](./reactive关键词.md) or a [reactive expression](./Reactive.md)

## Example

::: details open **Binding the input field content to a reactive variable**

```atks
value = "hello"
valueRef =& @Reactive(value)

CreateDialog(
    Text(valueRef),
    InputField(valueRef)
)
```

After entering content in the input field, press Enter to update `value`, `valueRef`, and the text field content.

![Screenshot](../../../../zh/5.专业使用指南/18-脚本工具/6-界面函数/media/InputField/image.png)

:::
