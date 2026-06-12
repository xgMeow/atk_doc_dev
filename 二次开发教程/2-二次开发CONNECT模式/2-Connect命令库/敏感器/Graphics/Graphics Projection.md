---
description: 设置传感器的投影属性，支持固定高度投影模式。
---

# Graphics Projection

作用：设置投影属性。

用法：

```
Graphics <SensorObjectPath> Projection {Option}
```

说明：

| Option             | 说明                     |
| ------------------ | ------------------------ |
| `Altitudes <Alt>`  | 输入固定半径默认单位是 m |

举例：

```
Graphics */Satellite/Satellite1/Sensor/Sensor1 Projection Altitudes 500000
```
