# CreateDialog

## Description

Creates a dialog box and displays it.

## Syntax

```atks
CreateDialog()
```

## Example

::: details open **Creating a dialog box with multiple controls**

```atks
value = 0.55
valueRef =& @Reactive(value)

CreateDialog(
    Button("Button", print("hi")),
    Text(valueRef),
    Slider(valueRef),
    InputField(valueRef)
)
```

![Screenshot](../../../../zh/5.专业使用指南/18-脚本工具/6-界面函数/media/CreateDialog/image.png)

:::
