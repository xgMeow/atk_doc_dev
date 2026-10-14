# Offset

## 作用

设置偏移量

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.{Offset Attribute} <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Offset Attribute` | `Xoffset`、`Yoffset`、`Zoffset` |

## 示例

::: details open **设置 X 方向偏移量**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Xoffset 100 m
```

:::
