# ThrustAxes

## 作用

设置推力坐标轴

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.ThrustAxes <Value>
```

::: info 注意
获得此属性值暂不支持
:::

## 示例

::: details open **设置推力坐标轴为 VNC(Earth)**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.ThrustAxes "Satellite/Satellite1 VNC(Earth)"
```
:::
