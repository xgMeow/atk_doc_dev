# GetValue

## 作用

**获得**接收器属性值。

## 语法

```
Receiver_RM <RcObjectPath> GetValue [<AttributePath>]
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `{AttributePath}` (为空) | 获得所有属性及属性值 |
| `usercomment` | 获得对象说明 |
| `model` | 获得模型已有属性及属性值 |
| `model.usercomment` | 获得模型说明 |
| `model.demodulator` | 获得数字载波调制类型 |
| `model.demodulator.usercomment` | 获得数字载波调制类型说明 |
| `model.demodulator.modulationname` | 获得数字载波调制类型名字 |
| `model.linkmargintype` | 获得链路裕量类型 |
| `model.linkmarginthreshold` | 获得阈值 |
| `model.govert` | 获得品质因素 |
| `model.polarization` | 获得极化类型 |
| `model.polarization.referenceaxis` | 获得极化参考轴 |
| `model.polarization.tiltangle` | 获得极化角度 |
| `model.frequency` | 获得接收频率 |

属性参数：

| 属性参数 | 说明 |
| --- | --- |
| `Properties` | 获得当前属性定义的所有参数，包括最大值、最小值、单位等 |
| `Choices` | 获得当前属性所有可以选择的选项 |
| `Size` | 获得当前属性返回列表中有值的行数 |

属性包括参数对照：

| 属性路径 | 支持的属性参数 |
| --- | --- |
| `UserComment` | 包括 `Properties` |
| `Model` | 包括 `Properties`、`Choices`、`Size` |
| `Model.UserComment` | 包括 `Properties` |
| `Model.Demodulator` | 包括 `Properties`、`Choices`、`Size` |
| `Model.Demodulator.UserComment` | 包括 `Properties` |
| `Model.Demodulator.ModulationName` | 包括 `Properties` |
| `Model.LinkmarginType` | 包括 `Properties`、`Choices` |
| `Model.GoverT` | 包括 `Properties` |
| `Model.Polarization` | 包括 `Properties`、`Choices`、`Size` |
| `Model.Polarization.ReferenceAxis` | 包括 `Properties`、`Choices` |
| `Model.Polarization.TiltAngle` | 包括 `Properties` |
| `Model.frequency` | 包括 `Properties` |

## 示例

::: details open **获得所有属性值**
```
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue
```
:::

::: details open **获得模型极化属性大小**
```
Receiver_RM */Satellite/Sate1/Receiver/Receiver1 GetValue model.polarization:size
```
:::
