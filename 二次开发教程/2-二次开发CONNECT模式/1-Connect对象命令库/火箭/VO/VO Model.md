# VO Model

## 作用

设置火箭 3D 模型属性

## 语法

```
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## 参数说明

| 参数 | 取值 | 说明 |
|------|------|------|
| `Show` | `{On \| Off}` | 是否显示模型 |
| `File` | `<ModelFile>` | 模型文件路径 |

## 示例

::: details open **设置火箭 3D 模型属性**
```
VO */LaunchVehicle/LaunchVehicle1 Model Show Off
```
:::
