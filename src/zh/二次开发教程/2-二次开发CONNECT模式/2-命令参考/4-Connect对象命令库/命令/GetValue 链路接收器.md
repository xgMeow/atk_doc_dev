---
groups: [链路接收器]
---

# GetValue

## 作用

读取接收器对象的模型属性值，供脚本核对模型配置。

## 前置条件

- 接收器对象须已存在，须先用 [New](./New.md) 创建；对象路径指向不存在的接收器时，命令返回 NACK。

- 部分属性只在对应功能启用后可读，如极化子属性须已令 Model.UsePolarization 为 true，否则返回 NACK。详见「补充说明」。

## 语法

```atk-command
Receiver_RM <RcObjectPath> GetValue <AttributePath>
```

## 语法说明

- 属性路径不可省略：只写命令名与对象路径、或写 Model、写 UserComment，命令均返回 NACK。

- `<AttributePath>` 以 Model 开头，如 Model.GOverT；路径不区分大小写，model.govert 与 Model.GOverT 等价。

- 一次只读取一个属性，不支持一次返回全部属性。

## 输出

命令返回纯文本，不返回表头。每条属性输出一行，格式为：

```
Model.<属性名> = <值>[ <单位>]
```

## 参数说明

### 模型

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.UserComment | 模型说明，如 Simple model of a receiver | 无 |
| Model.FrequencyAutoTracking | 是否自动跟踪发射信号频率，true 或 false | 无 |
| Model.GOverT | 简单接收机模型的品质因子 G/T | dB/K |
| Model.AntennaDesignFrequency | 复杂模型所用天线的设计频率 | 无（按 Hz 计） |

### 天线极化

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.UsePolarization | 是否启用极化设置 | 无 |
| Model.Polarization | 极化类型，如 Linear、Right_Hand_Circular | 无 |
| Model.Polarization.ReferenceAxis | 极化参考轴，如 Z Axis | 无 |
| Model.Polarization.TiltAngle | 极化角 | deg |

### 解调器

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.AutoSelectDemodulator | 是否自动选择解调方式 | 无 |
| Model.Demodulator | 解调方式，如 BPSK、8PSK | 无 |

### 接收带宽

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.AutoScaleBandwidth | 是否自动调整带宽 | 无 |
| Model.Bandwidth | 接收带宽 | GHz |

### 滤波器

| 属性 | 返回内容 | 单位 | 可读条件 |
| --- | --- | --- | --- |
| Model.UseFilter | 是否启用滤波器 | 无 | 始终可读 |
| Model.Filter | 滤波器类型，如 Butterworth、Chbyshev | 无 | 始终可读 |
| Model.Filter.Order | 滤波器阶数 | 无 | 未启用滤波器时可读 |
| Model.Filter.CutoffFrequency | 截止频率 | GHz | 未启用滤波器时可读 |
| Model.Filter.Bandwidth | 滤波器带宽 | GHz | 未启用滤波器时可读 |
| Model.Filter.LowerBandwidthLimit | 滤波器频谱相对载波的低频边界 | GHz | 启用滤波器后可读 |
| Model.Filter.UpperBandwidthLimit | 滤波器频谱相对载波的高频边界 | GHz | 启用滤波器后可读 |

### 传输线与系统噪声温度

| 属性 | 返回内容 | 单位 | 可读条件 |
| --- | --- | --- | --- |
| Model.ANT2LNALineLoss | 天线至 LNA 传输线损耗 | dB | 始终可读 |
| Model.LNAGain | 低噪声放大器增益 | dB | 始终可读 |
| Model.LNA2RcvrLineLoss | LNA 至接收器传输线损耗 | dB | 始终可读 |
| Model.ComputeSystemNoiseTemp | 是否由各环节参数计算系统噪声温度 | 无 | 始终可读 |
| Model.ConstantSystemNoiseTemp | 常量系统噪声温度 | K | 计算方式开启时可读 |
| Model.ANT2LNALineTemperature | 天线至 LNA 传输线温度 | K | 计算方式关闭时可读 |
| Model.LNATemperature | 低噪声放大器温度 | K | 计算方式关闭时可读 |
| Model.LNA2RcvrLineTemperature | LNA 至接收器传输线温度 | K | 计算方式关闭时可读 |
| Model.AntennaNoise.ComputeOption | 天线噪声温度的给出方式，如 Constant | 无 | 计算方式关闭时可读 |
| Model.AntennaNoise.ConstantNoiseTemp | 常量天线噪声温度 | K | 计算方式关闭时可读 |

- 该组属性只适用于中等、复杂接收机模型。

## 示例

::: details open **读取模型说明**
```
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue Model.UserComment
```
返回：

```
Model.UserComment = Simple model of a receiver
```
:::

::: details open **读取品质因子与频率跟踪开关**
```
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue Model.GOverT
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue Model.FrequencyAutoTracking
```
返回：

```
Model.GOverT = 20.000000
Model.FrequencyAutoTracking = true
```
:::

::: details open **读取解调方式**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.AutoSelectDemodulator false
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue Model.Demodulator
```
:::

::: details open **读取系统噪声温度各环节参数**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model medium_receiver_model
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.ComputeSystemNoiseTemp false
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue Model.LNATemperature
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue Model.LNAGain
```
:::

## 补充说明

- 未启用对应功能时，读取该功能的子属性返回 NACK：Model.Polarization 及其子属性须已启用 Model.UsePolarization；Model.Demodulator 须已关闭 Model.AutoSelectDemodulator；Model.Bandwidth 须已关闭 Model.AutoScaleBandwidth；温度与天线噪声属性须已关闭 Model.ComputeSystemNoiseTemp。

- 本命令不支持一次读取全部属性，须按属性逐条读取。
