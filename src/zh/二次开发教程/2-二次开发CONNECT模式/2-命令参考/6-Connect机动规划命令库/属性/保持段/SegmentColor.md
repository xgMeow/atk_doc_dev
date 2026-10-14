# SegmentColor

## 作用

设置**保持段**颜色。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.SegmentColor <Value>
```

## 补充说明

- 颜色设置从 `-1` 到 `-16777216` 是透明度为 255 时颜色 255255255 到 000000000，按照 RGB 格式进行满 255 进 1，例如红色 255000000，透明度为 255，则有 `255000000 ： -256^3+255*256^0= -16776961`，`000255000：-256^3+255*256^1= -16711936`
- 从 0 到 4294967295 是透明度为 000 时颜色 000000000 到透明度 255 时颜色 255255255，例如红色 255000000，透明度为 255，则有 `255000000255：255*256^3+255*256^0=4278190335`

::: info 注意
获得此属性值暂不支持
:::

## 示例

::: details open **设置保持段颜色为 4278190335**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.SegmentColor 4278190335
```
:::
