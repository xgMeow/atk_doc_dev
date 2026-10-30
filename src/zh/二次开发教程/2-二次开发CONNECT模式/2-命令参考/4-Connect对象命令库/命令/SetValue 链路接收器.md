---
groups: [链路接收器]
---

# SetValue

## 作用

设置接收器对象模型属性的值。命令按属性路径逐项设置，一次调用只设置一个属性。

## 前置条件

- 接收器对象须已存在，须先用 [New](./New.md) 在卫星等对象下创建，如 `New / */Satellite/Satellite1/Receiver Receiver1`；对象路径指向不存在的接收器时，命令返回 NACK。

- 模型类型决定可设置的属性集合。新建的接收器为简单接收机模型，设置中等、复杂模型的专有属性前，须先用 Model 属性切换模型类型，详见「模型类型」。

- 部分属性受开关控制，须先打开对应开关：极化属性须先令 Model.UsePolarization 为 true；滤波器属性须先令 Model.UseFilter 为 true；接收带宽须先令 Model.AutoScaleBandwidth 为 false；解调方式须先令 Model.AutoSelectDemodulator 为 false。

## 语法

```atk-command
Receiver <RcObjectPath> SetValue <AttributePath> <Value> [<Unit>]
```

## 语法说明

本命令由命令名、对象路径、属性路径、值四部分构成，单位可选。

| 部分 | 含义 |
| --- | --- |
| Receiver | 命令名。 |
| `<RcObjectPath>` | 接收器对象路径，必须以 `*/` 开头，如 */Satellite/Satellite1/Receiver/Receiver1。 |
| `<AttributePath>` | 属性路径，以 Model 开头，如 Model.GOverT。 |
| `<Value>` | 属性值。含空格的取值须用双引号括起，如 "Z Axis"。 |
| `<Unit>` | 可选单位，紧跟在值之后。 |

- 值后的单位可省略。省略时按 Connect 单位解释：频率为 GHz、角度为 deg；给出单位时按该单位换算。

- 一条命令只设置一个属性，不能连续给出多组属性与值。

- 对象类型与名称区分大小写，属性路径不区分大小写。

## 模型类型

Model 属性用于选择接收器模型，取值如下。

| 取值 | 对应模型 |
| --- | --- |
| simple_receiver_model | 简单接收机模型 |
| medium_receiver_model | 中等接收机模型 |
| complex_receiver_model | 复杂接收机模型 |

- 取值不区分大小写，下划线可省略，例如 simplereceivermodel 与 simple_receiver_model 等价；写成 simple_transmitter_model 返回 NACK。

- 切换模型会重建模型对象，其专有参数恢复为缺省值。

- 新建的接收器为简单接收机模型。

## 参数说明

### 模型规格

| 属性 | 说明 | 取值与单位 | 缺省值 | 适用模型 |
| --- | --- | --- | --- | --- |
| Model.FrequencyAutoTracking | 是否自动跟踪发射信号频率 | true 或 false | true | 全部 |
| Model.GOverT | 品质因子 G/T | 数值，单位为 dB/K | 20 | 简单 |

- 中等、复杂模型的接收增益由天线增益与系统噪声温度共同确定。

### 天线极化

| 属性 | 说明 | 取值与单位 | 适用模型 |
| --- | --- | --- | --- |
| Model.UsePolarization | 是否启用极化设置 | true 或 false | 简单、中等 |
| Model.Polarization | 极化类型 | Linear、Vertical、Horizontal、Left_Hand_Circular、Right_Hand_Circular | 简单、中等 |
| Model.Polarization.ReferenceAxis | 极化参考轴 | X Axis、Y Axis、Z Axis，须用双引号括起 | 简单、中等 |
| Model.Polarization.TiltAngle | 极化角 | 角度值，缺省 deg，可附 rad | 简单、中等 |

- 须先令 Model.UsePolarization 为 true，再设置极化类型及其子属性，否则返回 NACK。

- 极化类型不区分大小写，空格与下划线等价。None、Circular、Elliptical 不被接受，返回 NACK；参考轴只接受带 Axis 的全称。

- 复杂模型的极化设置位于天线页面，通过 Model.AntennaControl 下的属性设置，见「复杂模型的天线」。

### 解调器

| 属性 | 说明 | 取值 | 缺省值 |
| --- | --- | --- | --- |
| Model.AutoSelectDemodulator | 是否自动选择解调方式 | true 或 false | true |
| Model.Demodulator | 解调方式 | BPSK、QPSK、8PSK、16PSK、BPSKBCH-511-259、BPSKConv-4-3-8、PCM_FM、CPM | BPSK |

- 须先令 Model.AutoSelectDemodulator 为 false，再设置 Model.Demodulator，否则返回 NACK。

- 解调方式区分大小写，预置组合写作 BPSKBCH-511-259 与 BPSKConv-4-3-8，脉冲编码调制写作 PCM_FM。

### 接收带宽

| 属性 | 说明 | 取值与单位 |
| --- | --- | --- |
| Model.AutoScaleBandwidth | 是否自动调整带宽 | true 或 false |
| Model.Bandwidth | 接收带宽 | 频率值，缺省 GHz |

- 须先令 Model.AutoScaleBandwidth 为 false，再设置 Model.Bandwidth，否则返回 NACK。

### 滤波器

| 属性 | 说明 | 取值与单位 | 缺省值 | 适用类型 |
| --- | --- | --- | --- | --- |
| Model.UseFilter | 是否启用滤波器 | true 或 false | false | 全部 |
| Model.Filter | 滤波器类型 | Bessel、Butterworth、Chbyshev、GaussianWindows、RaisedConsine | Butterworth | 全部 |
| Model.Filter.LowerBandwidthLimit | 滤波器频谱相对载波的低频边界 | 频率值，缺省 GHz | -0.02 GHz | 全部 |
| Model.Filter.UpperBandwidthLimit | 滤波器频谱相对载波的高频边界 | 频率值，缺省 GHz | 0.02 GHz | 全部 |
| Model.Filter.Order | 滤波器阶数 | 整数 | 4 | Bessel、Butterworth、Chbyshev、GaussianWindows |
| Model.Filter.CutoffFrequency | 截止频率 | 频率值，缺省 GHz | 0.01 GHz | Bessel、Butterworth、Chbyshev |
| Model.Filter.SamplingFrequency | 采样频率 | 频率值，缺省 GHz | 0.01 GHz | GaussianWindows |
| Model.Filter.RollOffFactor | 滚降因子 | 数值，取值 0 到 1 | 0.5 | RaisedConsine |
| Model.Filter.SymbolRate | 符号率 | 数值，单位为 Mb/s | 16 | RaisedConsine |

- 须先令 Model.UseFilter 为 true，再设置滤波器类型及其参数，否则返回 NACK。

- 滤波器类型区分大小写，且当前版本的类型名与界面显示不一致：切比雪夫写作 Chbyshev，高斯窗写作 GaussianWindows，升余弦写作 RaisedConsine。

- 各类型只应设置上表所列的专属参数；设置与类型不符的参数时，部分返回 NACK，部分被接受但不参与计算。

- 滤波器阶数、截止频率、采样频率、滚降因子与符号率均可设置；阶数与截止频率只在未启用滤波器时可读。

### 传输线、LNA 与系统噪声温度

| 属性 | 说明 | 取值与单位 | 缺省值 | 适用模型 |
| --- | --- | --- | --- | --- |
| Model.ANT2LNALineLoss | 天线至 LNA 传输线损耗 | 数值，单位为 dB | 0 | 中等、复杂 |
| Model.LNAGain | 低噪声放大器增益 | 数值，单位为 dB | 0 | 中等、复杂 |
| Model.LNA2RcvrLineLoss | LNA 至接收器传输线损耗 | 数值，单位为 dB | 0 | 中等、复杂 |
| Model.ComputeSystemNoiseTemp | 是否由各环节参数计算系统噪声温度 | true 或 false | true | 中等、复杂 |
| Model.ANT2LNALineTemperature | 天线至 LNA 传输线温度 | 数值，单位为 K | 16.85 | 中等、复杂 |
| Model.LNATemperature | 低噪声放大器温度 | 数值，单位为 K | 16.85 | 中等、复杂 |
| Model.LNA2RcvrLineTemperature | LNA 至接收器传输线温度 | 数值，单位为 K | 16.85 | 中等、复杂 |
| Model.AntennaNoise.ComputeOption | 天线噪声温度的给出方式 | Constant | Constant | 中等、复杂 |
| Model.AntennaNoise.ConstantNoiseTemp | 常量天线噪声温度 | 数值，单位为 K | 16.85 | 中等、复杂 |

- 系统噪声温度有两种确定方式：Model.ComputeSystemNoiseTemp 为 true 时，由传输线与 LNA 各环节的温度、损耗计算；为 false 时按常量温度处理，常量值由 Model.ConstantSystemNoiseTemp 给出。

- 温度与天线噪声属性须先令 Model.ComputeSystemNoiseTemp 为 false 再设置；计算方式为 true 时，这些属性由模型计算，设置返回 NACK。Model.AntennaNoise.ComputeOption 当前只接受 Constant。

### 复杂模型的天线

复杂接收机模型的天线参数通过下列属性设置。

| 属性 | 说明 | 取值与单位 |
| --- | --- | --- |
| Model.AntennaControl.AntennaReferenceType | 天线引用类型 | Embed 或 Link |
| Model.AntennaControl.Antenna | 天线类型 | 如 Gaussian、Parabolic |
| Model.AntennaControl.Antenna.DesignFrequency | 天线设计频率 | 频率值，缺省 GHz |
| Model.AntennaControl.Antenna.Diameter | 天线口径 | 数值，单位为 m |
| Model.AntennaControl.Antenna.Efficiency | 天线效率 | 数值，取值 0 到 1 |
| Model.AntennaControl.UsePolarization | 是否启用天线极化 | true 或 false |
| Model.AntennaControl.Polarization | 天线极化类型 | 同简单、中等模型的极化类型 |

## 返回

设置成功时返回 ACK，通信库读到的应答为空串；设置失败时返回 NACK。

属性路径不存在、取值非法、前置开关未打开、属性与当前模型类型不匹配时，命令均返回 NACK。

## 示例

::: details open **设置简单接收机模型的品质因子**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.GOverT 22
```
:::

::: details open **设置天线极化**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.UsePolarization true
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Polarization "right hand circular"
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Polarization.ReferenceAxis "Z Axis"
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Polarization.TiltAngle 30
```
:::

::: details open **设置解调方式与接收带宽**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.AutoSelectDemodulator false
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Demodulator 8PSK
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.AutoScaleBandwidth false
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Bandwidth 0.04 GHz
```
:::

::: details open **设置滤波器**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.UseFilter true
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Filter Chbyshev
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Filter.LowerBandwidthLimit -0.02 GHz
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.Filter.UpperBandwidthLimit 0.02 GHz
```
:::

::: details open **切换为中等接收机模型并设置传输线与 LNA 参数**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model medium_receiver_model
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.ANT2LNALineLoss 1
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.LNAGain 30
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.LNA2RcvrLineLoss 2
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.ComputeSystemNoiseTemp false
```
:::

::: details open **设置复杂模型的天线**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model complex_receiver_model
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.AntennaControl.Antenna Parabolic
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.AntennaControl.Antenna.Diameter 2
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.AntennaControl.Antenna.Efficiency 0.6
```
:::

## 补充说明

- 交叉极化泄漏 Model.Polarization.CrossPolLeakage 对简单、中等接收机模型不可设置，返回 NACK。

- 中等、复杂接收机模型不支持 Model.GOverT，设置返回 NACK。

- 模型的物理含义与页面组成参见[接收器](../../../../../03-基础使用指南/03-对象管理/02-属性配置/接收器.md)。
