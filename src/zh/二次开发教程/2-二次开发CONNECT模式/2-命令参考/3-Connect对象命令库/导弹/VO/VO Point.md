# VO Point

## 作用

设置导弹 3D 模型点属性

## 语法

```atk-command
VO <ObjectPath> Point {Options} <value>
```

## 参数说明

| 参数 | 说明 |
| ---------------- | -------------- |
| `Show {on \| off}`  | 显示或隐藏3D模型点 |
| `size {value}`      | 设置点属性大小     |

## 示例

::: details open **显示3D模型点**
```
VO */Missile/Missile1 Point show on
```
:::

::: details open **设置点大小**
```
VO */Missile/Missile1 Point size 3
```
:::
