# VO Point

## 作用

设置对象 3D 模型点属性。

## 语法

```atk-command
VO <ObjectPath> Point {PointOptions}
```

## 参数说明

| 参数 | 取值 | 说明 |
| --- | --- | --- |
| `<ObjectPath>` | | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `Show` | `{On \| Off}` | 是否显示模型点 |
| `Size` | `<Value>` | 模型点大小设置 |

## 适用对象

卫星、地面站、导弹、火箭、船、车辆、飞机

## 示例

::: details open **设置 3D 模型点属性**
```
VO */Satellite/Satellite1 Point Show On Size 7
```
:::
