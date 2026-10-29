---
groups: [信号发射器]
---

# SetValue

## 作用

设置发射器对象模型属性的值。命令按属性路径逐项设置，一次调用只设置一个属性。

## 前置条件

- 发射器对象须已存在，须先用 [New](./New.md) 在卫星等对象下创建，如 `New / */Satellite/Satellite1/Transmitter Transmitter1`；对象路径指向不存在的发射器时，命令返回 NACK。

- 模型类型决定可设置的属性集合。新建的发射器为简单发射机模型，设置中等、复杂或转发器模型的专有属性前，须先用 Model 属性切换模型类型，详见「模型类型」。

- 部分属性受开关控制，须先打开对应开关：极化属性须先令 Model.UsePolarization 为 true；滤波器属性须先令 Model.UseFilter 为 true；信号带宽的上下边界须先令 Model.Modulator.AutoScaleBandwidth 与 Model.Modulator.SymmetricBandwidth 均为 false。

- 复杂发射机模型与复杂转发器模型的属性当前版本经 CONNECT 只读，本命令对它们的属性均返回 NACK，详见「补充说明」。

## 语法

```atk-command
Transmitter <XmObjectPath> SetValue <AttributePath> <Value> [<Unit>]
```

## 语法说明

本命令由命令名、对象路径、属性路径、值四部分构成，单位可选。

| 部分 | 含义 |
| --- | --- |
| Transmitter | 命令名。 |
| `<XmObjectPath>` | 发射器对象路径，可写截断路径，如 */Satellite/Satellite1/Transmitter/Transmitter1。 |
| `<AttributePath>` | 属性路径，以 Model 开头，如 Model.Frequency。 |
| `<Value>` | 属性值。含空格的取值须用双引号括起，如 "Y Axis"。 |
| `<Unit>` | 可选单位，紧跟在值之后，如 15000 MHz。 |

- 值后的单位可省略。省略时按 Connect 单位解释：频率为 GHz、功率为 W、角度为 deg；给出单位时按该单位换算，如模型频率取 15000 MHz 等价于 15 GHz。

- 一条命令只设置一个属性，不能连续给出多组属性与值。

- 对象类型与名称区分大小写，属性路径不区分大小写。

## 模型类型

Model 属性用于选择发射器模型，取值如下。

| 取值 | 对应模型 |
| --- | --- |
| simple_receiver_model | 简单发射机模型 |
| medium_receiver_model | 中等发射机模型 |
| complex_receiver_model | 复杂发射机模型 |
| simple_re-transmitter_model | 简单转发器模型 |
| medium_re-transmitter_model | 中等转发器模型 |
| complex_re-transmitter_model | 复杂转发器模型 |

- 取值不区分大小写，下划线可省略，例如 simplereceivermodel 与 simple_receiver_model 等价。

- 发射机模型的取值为 receiver_model 而非 transmitter_model：写成 simple_transmitter_model 返回 NACK。转发器模型的 re 与 transmitter 之间须保留连字符，写成 simple_re_transmitter_model 返回 NACK。

- 切换模型会重建模型对象：载波频率与数据速率保留，其余模型专有参数恢复为缺省值。

- 新建的发射器为简单发射机模型。

## 参数说明

### 模型规格

| 属性 | 说明 | 取值与单位 | 缺省值 | 适用模型 |
| --- | --- | --- | --- | --- |
| Model.Frequency | 发射信号载波频率 | 频率值，缺省 GHz，可附 MHz、THz 等单位 | 14.5 GHz | 简单、中等发射机 |
| Model.DataRate | 数据速率 | 数值，按 b/s 计，值后不附速率单位 | 16000000 | 简单、中等发射机 |
| Model.EIRP | 等效全向辐射功率 | 功率值，缺省 W | 30 W | 简单发射机 |
| Model.Power | 发射功率 | 功率值，缺省 W | 30 W | 中等发射机、中等转发器 |
| Model.SaturatedFluxDensity | 饱和通量密度 | 数值，单位为 dBW/m² | -90 | 简单、中等转发器 |
| Model.SaturatedEIRP | 饱和 EIRP | 数值，单位为 dBW | 30 | 简单转发器 |

- 简单发射机模型以 EIRP 描述辐射能力，中等发射机模型以功率与发射增益描述，两者不可互换：对简单模型设置 Model.Power、对中等模型设置 Model.EIRP 均返回 NACK。

- Model.Gain（发射增益）与 Model.SaturatedPower（饱和功率）当前版本不可设置，返回 NACK。

- Model.DataRate 的数值按 b/s 计：缺省值 16000000 即 16 Mb/s。

### 天线极化

| 属性 | 说明 | 取值与单位 | 缺省值 | 适用模型 |
| --- | --- | --- | --- | --- |
| Model.UsePolarization | 是否启用极化设置 | true 或 false | false | 简单、中等发射机与转发器 |
| Model.Polarization | 极化类型 | Linear、Vertical、Horizontal、Left_Hand_Circular、Right_Hand_Circular | Linear | 同上 |
| Model.Polarization.ReferenceAxis | 极化参考轴 | X Axis、Y Axis、Z Axis，须用双引号括起 | X Axis | 同上 |
| Model.Polarization.TiltAngle | 极化角 | 角度值，缺省 deg，可附 rad | 0 deg | 同上 |

- 须先令 Model.UsePolarization 为 true，再设置极化类型及其子属性，否则返回 NACK。

- 极化类型不区分大小写，空格与下划线等价，如 Left Hand Circular、left_hand_circular、left_hand circular 均可。None、Circular、Elliptical 不被接受，返回 NACK。

- 参考轴只接受带 Axis 的全称，写成 X、Y、Z 返回 NACK。

### 调制器

| 属性 | 说明 | 取值与单位 | 缺省值 |
| --- | --- | --- | --- |
| Model.Modulator | 调制类型 | BPSK、QPSK、8PSK、16PSK、BPSKBCH-511-259、BPSKConv-4-3-8、PCM_FM、CPM | BPSK |
| Model.Modulator.UseSignalPSD | 是否使用信号功率谱密度 | true 或 false | false |
| Model.Modulator.AutoScaleBandwidth | 是否自动调整带宽 | true 或 false | true |
| Model.Modulator.SymmetricBandwidth | 频谱是否相对载波对称 | true 或 false | true |
| Model.Modulator.UpperBandwidthLimit | 信号频谱相对载波的高频边界 | 频率值，缺省 GHz | 0.016 GHz |
| Model.Modulator.LowerBandwidthLimit | 信号频谱相对载波的低频边界 | 频率值，缺省 GHz，取负值 | -0.016 GHz |

- 调制类型区分大小写，写成 bpsk 返回 NACK。预置组合写作 BPSKBCH-511-259 与 BPSKConv-4-3-8，BPSK 与编码名称之间没有分隔符；脉冲编码调制写作 PCM_FM。

- 调制器属性只适用于简单、中等发射机模型，对转发器模型设置均返回 NACK。

- 信号带宽的上下边界受自动调整与对称调节两个开关控制：须先令 Model.Modulator.AutoScaleBandwidth 与 Model.Modulator.SymmetricBandwidth 均为 false，再设置 Model.Modulator.LowerBandwidthLimit 与 Model.Modulator.UpperBandwidthLimit；开关未关闭时设置边界返回 NACK。

- Model.Modulator.NumPSDNulls（空频谱数量）与 Model.Modulator.Bandwidth（信号带宽）当前版本只读，设置返回 NACK。

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

- 滤波器类型区分大小写，且当前版本的类型名与界面显示不一致：切比雪夫写作 Chbyshev（非 Chebyshev），高斯窗写作 GaussianWindows，升余弦写作 RaisedConsine（非 RaisedCosine）。

- 各类型只支持上表所列的专属参数：对 Bessel、Butterworth、Chbyshev 设置采样频率、滚降因子、符号率返回 NACK；对 GaussianWindows 设置截止频率返回 NACK。

- Model.Filter.Bandwidth（滤波器带宽）只读，设置返回 NACK；Model.Filter.Ripple（纹波）与 Model.Filter.InsertionLoss（插入损耗）当前版本不可设置，设置返回 NACK。

### 转发器的转换方法

| 属性 | 说明 | 取值与单位 | 缺省值 |
| --- | --- | --- | --- |
| Model.FrequencyPolynomial[n].Coefficient | 频率转换多项式第 n 项系数 | 数值 | 0 |
| Model.PowerBackOffPolynomial[n].Coefficient | 功率回退多项式第 n 项系数 | 数值 | 0 |

- 该组属性只适用于简单、中等转发器模型，用于描述输入频率到输出频率、输入功率回退到输出功率回退的转换关系；对简单、中等发射机模型设置时命令返回成功但不生效。

- 多项式按列表保存，每项有 Index 与 Coefficient 两个字段，Index 由行在列表中的位置决定。

- 新建的转发器默认含两行，Index 分别为 0、1：频率多项式的系数为 -700000000 与 1，功率回退多项式的系数为 0 与 1。

- 增加、删除系数行须使用本命令的 AddItem 与 RemoveItem 子命令：

```atk-command
Transmitter <XmObjectPath> AddItem <ListPath>
Transmitter <XmObjectPath> RemoveItem <ListPath> <Index>
```

| 参数 | 说明 |
| --- | --- |
| `<ListPath>` | 列表属性路径，取 Model.FrequencyPolynomial 或 Model.PowerBackOffPolynomial。 |
| `<Index>` | 待删除行的序号，从 0 起计。 |

- AddItem 在列表末尾追加一行，系数为 0；RemoveItem 删除指定序号的行。序号越界或列表路径不存在时返回 NACK。

### 复杂模型的天线

下列属性只在复杂发射机模型与复杂转发器模型上存在，当前版本经 CONNECT 只读，可用 [GetValue](./GetValue%20信号发射器.md) 读取。

| 属性 | 说明 |
| --- | --- |
| Model.AntennaControl.AntennaReferenceType | 天线引用类型，Embed 或 Link。 |
| Model.AntennaControl.Antenna | 天线类型。 |
| Model.AntennaControl.Antenna.DesignFrequency | 天线设计频率。 |
| Model.AntennaControl.Antenna.Diameter | 天线口径。 |
| Model.AntennaControl.Antenna.Efficiency | 天线效率。 |
| Model.AntennaControl.UsePolarization | 是否启用天线极化。 |
| Model.AntennaControl.Polarization | 天线极化类型。 |
| Model.AntennaControl.Polarization.ReferenceAxis | 天线极化参考轴。 |
| Model.AntennaControl.Polarization.TiltAngle | 天线极化角。 |
| Model.AntennaControl.Orientation | 天线指向方式。 |
| Model.AntennaControl.Orientation.AzimuthAngle | 方位角，指向方式为 Azimuth Elevation 时可读。 |
| Model.AntennaControl.Orientation.ElevationAngle | 俯仰角，指向方式为 Azimuth Elevation 时可读。 |
| Model.AntennaControl.Orientation.AboutBoresight | 绕视轴处理方式。 |
| Model.AntennaControl.Orientation.EulerA、EulerB、EulerC | 欧拉角，指向方式为 Euler Angles 时可读。 |
| Model.AntennaControl.Orientation.Sequence | 欧拉角旋转顺序。 |
| Model.AntennaControl.Orientation.Qx、Qy、Qz、Qs | 四元数，指向方式为 Quaternion 时可读。 |
| Model.AntennaControl.Orientation.Yaw、Pitch、Roll | 偏航、俯仰、滚转角。 |
| Model.AntennaControl.Orientation.XPositionOffset、YPositionOffset、ZPositionOffset | 天线位置偏移。 |

- 天线后瓣增益与外部天线文件（Model.AntennaControl.Antenna.BacklobeGain、Model.AntennaControl.Antenna.ExternalAntennaFile）当前版本经 CONNECT 不可读写，设置与读取均返回 NACK。

## 返回

设置成功时返回 ACK，通信库读到的应答为空串；设置失败时返回 NACK。

属性路径不存在、取值非法、前置开关未打开、属性与当前模型类型不匹配时，命令均返回 NACK。

## 示例

::: details open **设置简单发射机模型的载波频率与 EIRP**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Frequency 12.5 GHz
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.EIRP 20 W
```
:::

::: details open **切换为中等发射机模型并设置发射功率**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model medium_receiver_model
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Power 15 W
```
:::

::: details open **设置天线极化**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.UsePolarization true
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Polarization "left hand circular"
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Polarization.ReferenceAxis "Y Axis"
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Polarization.TiltAngle 30
```
:::

::: details open **设置调制器与信号带宽**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Modulator 8PSK
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Modulator.AutoScaleBandwidth false
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Modulator.SymmetricBandwidth false
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Modulator.LowerBandwidthLimit -0.02 GHz
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Modulator.UpperBandwidthLimit 0.02 GHz
```
:::

::: details open **设置滤波器**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.UseFilter true
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Filter Chbyshev
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Filter.Order 6
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Filter.CutoffFrequency 0.01 GHz
```
:::

::: details open **设置转发器的饱和参数与频率转换多项式**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model simple_re-transmitter_model
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.SaturatedFluxDensity -85
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.SaturatedEIRP 25
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 AddItem Model.FrequencyPolynomial
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.FrequencyPolynomial[2].Coefficient 2
```
:::

## 补充说明

- 下列属性当前版本不可设置，返回 NACK：Model.Gain、Model.SaturatedPower、Model.Modulator.NumPSDNulls、Model.Modulator.Bandwidth、Model.Filter.Bandwidth、Model.Filter.InsertionLoss、Model.Filter.Ripple、Model.PostTransmitGainsLosses.TotalGain。

- 复杂发射机模型与复杂转发器模型的属性经 CONNECT 只读，本命令对它们的任何属性均返回 NACK。这些属性的当前值可用 [GetValue](./GetValue%20信号发射器.md) 读取。

- Model.EIRP 以 dBW 为单位给出时换算不正确，例如 10 dBW 被写作 11 W；应以 W 为单位给出。

- 模型属性之间的关系、各参数的物理含义参见[发射器](../../../../../03-基础使用指南/03-对象管理/02-属性配置/发射器.md)。
