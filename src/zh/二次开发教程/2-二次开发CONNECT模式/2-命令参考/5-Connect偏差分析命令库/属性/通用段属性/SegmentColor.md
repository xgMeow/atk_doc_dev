---
description: 设置机动规划段在序列显示中的颜色，包括颜色值的编码方式与取值示例。
---

# SegmentColor

## 作用

设置段颜色。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.SegmentColor <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>`；嵌套段继续追加 `.SegmentList.<段名>` |
| `<Value>` | 颜色值，编码方式见下 |

- 从 `-1` 到 `-16777216` 是透明度为 255 时颜色 `255255255` 到 `000000000`，按照 RGB 格式进行满 255 进 1。例如红色 `255000000`，透明度为 255，则有 `255000000：-256^3+255*256^0=-16776961`，`000255000：-256^3+255*256^1=-16711936`。
- 从 `0` 到 `4294967295` 是透明度为 `000` 时颜色 `000000000` 到透明度 255 时颜色 `255255255`。例如红色 `255000000`，透明度为 255，则有 `255000000255：255*256^3+255*256^0=4278190335`。

::: info 注意
获得此属性值暂不支持。
:::

## 适用段

Lambert 段、保持段、序列段和逆向序列段、机动段、预报段

## 示例

::: details open **设置段颜色为红色（透明度 255）**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.SegmentColor 4278190335
```
:::

::: details open **设置机动段颜色**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.SegmentColor -16712191
```
:::
