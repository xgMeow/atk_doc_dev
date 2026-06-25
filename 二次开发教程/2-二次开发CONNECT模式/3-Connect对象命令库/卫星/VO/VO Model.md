# VO Model

## 作用

设置卫星 3D 模型属性。

## 语法

```atk-command
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## 参数说明

| `Option` | `Value` | 说明 |
| --- | --- | --- |
| `Show` | `{On \| Off}` | 是否显示模型 |
| `File` | `<ModelFile>` | 模型文件路径 |

## 示例

::: details open **设置卫星 3D 模型属性**
```
VO */Satellite/Satellite1 Model Show Off
```
:::
