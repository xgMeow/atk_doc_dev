# GetValue

## 作用

获得发射器属性值

## 语法

```
Transmitter_RM <ObjectPath> GetValue [<AttributePath>]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| | 获得所有属性及属性值 |
| `UserComment` | 获得对象说明 |
| `Model` | 获得模型已有属性及属性值 |
| `Model.UserComment` | 获得模型说明 |
| `Model.Frequency` | 获得频率 |
| `Model.Modulator` | 获得数字载波调制类型 |
| `Model.Modulator.Us-  erComment` | 获得数字载波调制类型说明 |
| `Model.Modulator.Band- width` | 获得数字载波调制类型名字 |
| `Model.DataRate` | 获得数据速率 |
| `Model.EIRP` | 获得 EIRP |
| `Model.Polarization` | 获得极化类型 |
| `Model.Polarization.Refer- enceAxis` | 获得极化参考轴 |
| `Model.Polarization.TiltAn- gle` | 获得极化角度 |

### 属性参数

| Property | 说明 |
|----------|------|
| `Properties` | 获得当前属性定义的所有参数，包括他的最大值，最小值， 单位等 |
| `Choices` | 获得当前属性所有可以选择的选项 |
| `Size` | 获得当前属性返回列表中有值的行数 |

### 属性包括参数

| `{AttributePath}` | Property |
|-------------------|----------|
| `UserComment` | 包括 `Properties` |
| `Model` | 包括 `Properties`、`Choices`、`Size` |
| `Model.UserComment` | 包括 `Properties` |
| `Model.Frequency` | 包括 `Properties` |
| `Model.Modulator` | 包括 `Properties`、`Choices`、`Size` |
| `Model.Modulator.UserComment` | 包括 `Properties` |
| `Model.Modulator.Bandwidth` | 包括 `Properties` |
| `Model.DataRate` | 包括 `Properties` |
| `Model.EIRP` | 包括 `Properties` |
| `Model.Polarization` | 包括 `Properties`、`Choices`、`Size` |
| `Model.Polarization.ReferenceAxis` | 包括 `Properties`、`Choices` |
| `Model.Polarization.TiltAngle` | 包括 `Properties` |

## 示例

::: details open **获得所有属性及属性值**
```
Transmitter_RM */Satellite/Sate1/Transmitter/Trans1 GetValue
```
:::

::: details open **获得模型极化类型的 Size**
```
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue model.polarization:size
```
:::
