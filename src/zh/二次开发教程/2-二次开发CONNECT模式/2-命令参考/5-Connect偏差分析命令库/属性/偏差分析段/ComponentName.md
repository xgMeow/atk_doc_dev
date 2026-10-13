# ComponentName

## 作用

设置偏差分析段重命名。

## 语法

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.ComponentName <Rename>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<SatelliteObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<AttributePath>` | 偏差分析段在飞行序列中的路径，如 `MainSequence.SegmentList.UncertQuantify` |
| `<Rename>` | 偏差分析段的新名称 |

## 示例

::: details open **重命名偏差分析段**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.ComponentName Temp
```

- `*/Satellite/Satellite1`：卫星对象完整路径
- `MainSequence.SegmentList.UncertQuantify.ComponentName`：属性路径，偏差分析段的名称
- `Temp`：偏差分析段的新名称

:::
