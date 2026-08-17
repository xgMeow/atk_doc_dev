---
description: 设置传感器的脉冲显示属性，包括脉冲开关、幅度、长度、频率和反向等参数配置。
---

# VO Pulse

## 作用

设置脉冲属性。

## 语法

```atk-command
VO <SensorObjectPath> Pulse {PulseOption1} <Value1> [{PulseOption2} <Value2>...]
```

## 参数说明

| PulseOption | Value            | 说明                                    |
| ----------- | ---------------- | --------------------------------------- |
| Show        | `{On \| Off}`    | 若输入值为 Off，则其他属性不可设置。     |
| Amplitude   | `<AmpValue>`     | 脉冲透明度输入值应介于 0.0 至 1.0。     |
| PulseLength | `<LengthValue>`  | 输入脉冲长度值应大于等于 0.000001m。     |
| Frequency   | `<Value>`        | 输入脉冲频率值应介于 0.0 至 100.0 之间。 |
| FreqReverse | `{On \| Off}`    | 若输入值为 On，则实现脉冲反向。          |

## 示例

::: details open **设置脉冲属性**
```
VO */Satellite/Satellite1/Sensor/Sensor1 Pulse Show On Amplitude 0.67 PulseLength 100 Frequency 2.1 FreqReverse on
```
:::
