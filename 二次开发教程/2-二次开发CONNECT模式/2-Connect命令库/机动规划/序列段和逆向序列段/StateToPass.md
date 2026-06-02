# StateToPass

作用：设置序列段传递给下一段的状态

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StateToPass {Value}
```
:::

::: info 说明
- `Value` 包括属性值 `Final` 和 `Initial`
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Backward_Sequence.StateToPass Initial
```
:::
