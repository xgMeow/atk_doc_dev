# Elliptical

## 作用

设置是否限制为椭圆轨道

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Elliptical <Value>
```

## 示例

::: details open **设置不限制为椭圆轨道**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Elliptical false
```
:::
