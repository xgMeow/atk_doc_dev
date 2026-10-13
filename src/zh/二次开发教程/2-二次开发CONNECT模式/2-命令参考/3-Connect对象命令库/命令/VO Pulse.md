---
groups: [三维视图显示, 传感器]
---

# VO Pulse

## 作用

设置脉冲属性。

## 语法

```atk-command
VO <SensorObjectPath> Pulse {PulseOption1} <Value1> [{PulseOption2} <Value2>...]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<SensorObjectPath>` | 传感器对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1/Sensor/Sensor1` |

`{PulseOption}` 取值如下：

| PulseOption | Value | 说明 |
| ----------- | ---------------- | --------------------------------------- |
| Show | `{On \| Off}` | 若输入值为 Off，则其他属性不可设置。 |
| Amplitude | `<AmpValue>` | 脉冲透明度输入值应介于 0.0 至 1.0。 |
| PulseLength | `<LengthValue>` | 输入脉冲长度值应大于等于 0.000001m。 |
| Frequency | `<Value>` | 输入脉冲频率值应介于 0.0 至 100.0 之间。 |
| FreqReverse | `{On \| Off}` | 若输入值为 On，则实现脉冲反向。 |

## 适用对象

传感器

## 示例

::: details open **设置脉冲属性**
```
VO */Satellite/Satellite1/Sensor/Sensor1 Pulse Show On Amplitude 0.67 PulseLength 100 Frequency 2.1 FreqReverse on
```
:::
