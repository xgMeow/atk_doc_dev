# UsePeriJudge

## 作用

设置是否最小近拱点高度

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.UsePeriJudge <Value>
```

## 示例

::: details open **设置不启用最小近拱点高度判断**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.UsePeriJudge false
```
:::
