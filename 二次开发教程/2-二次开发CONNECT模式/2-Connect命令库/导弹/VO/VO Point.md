# VO Point

作用：设置导弹 3D 模型点属性

::: note 用法
```
VO <ObjectPath> Point {Options} <value>
```
:::

::: info 说明

| Options          | 说明           |
| ---------------- | -------------- |
| `Show {on \| off}`  | 显示或隐藏3D模型点 |
| `size {value}`      | 设置点属性大小     |

:::

::: tip 举例
```
VO */Missile/Missile1 Point show on
```

```
VO */Missile/Missile1 Point size 3
```
:::
