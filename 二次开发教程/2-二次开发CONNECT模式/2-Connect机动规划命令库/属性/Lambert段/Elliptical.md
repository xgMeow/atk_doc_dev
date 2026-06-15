# Elliptical

## 作用

设置是否限制为椭圆轨道

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Elliptical <Value>
```

## 示例

::: details open **设置不限制为椭圆轨道**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Elliptical false
```
:::
