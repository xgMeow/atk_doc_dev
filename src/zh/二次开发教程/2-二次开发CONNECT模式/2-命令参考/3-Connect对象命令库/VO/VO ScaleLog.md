# VO ScaleLog

## 作用

设置对象 3D 模型的 log 比例。

## 语法

```atk-command
VO <ObjectPath> ScaleLog <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Value>` | 模型的对数比例值 |

## 适用对象

卫星、地面站、导弹、火箭、船、车辆、飞机

## 示例

::: details open **设置 3D 模型 log 比例**
```
VO */Satellite/Shuttle ScaleLog 3
```
:::
