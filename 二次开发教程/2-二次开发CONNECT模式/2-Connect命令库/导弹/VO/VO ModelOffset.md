# VO ModelOffset

作用：设置导弹 3D 模型标签偏移量

::: note 用法
```
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```
:::

::: info 说明
- 目前`{OffsetOption}`包括属性 `Label` 和 `Translational`
:::

::: tip 举例
```
VO */Missile/Missile1 ModelOffset Label On 10 20 30
```

```
VO */Missile/Missile1 ModelOffset Translational off
```
:::
