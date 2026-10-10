# StateToPass

## 作用

设置序列段传递给下一段的状态

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StateToPass {Value}
```

## 补充说明

- `Value` 包括属性值 `Final` 和 `Initial`

## 示例

::: details open **设置序列段传递状态**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Backward_Sequence.StateToPass Initial
```
:::
