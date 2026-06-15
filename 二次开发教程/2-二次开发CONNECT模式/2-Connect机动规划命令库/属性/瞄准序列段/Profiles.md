# Profiles

## 作用

设置瞄准段的**配置页**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles <List of Profiles>
```

## 补充说明

- 设置瞄准段配置属性前，必须添加属性页。

## 参数说明

| 参数 | 说明 |
|------|------|
| `List of Profiles` | 可选值：`Differential_Corrector`、`SQP_Optimizer`、`Evolution_Optimizer` |

## 示例

::: details open **设置瞄准段配置页为微分修正**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.profiles Differential_Corrector
```
:::
