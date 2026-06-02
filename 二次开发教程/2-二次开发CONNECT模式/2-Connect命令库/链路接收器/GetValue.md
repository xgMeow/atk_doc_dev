# GetValue

作用：获得接收器属性值

::: note 用法
```
Receiver_RM <RcObjectPath> GetValue [<AttributePath>]
```
:::

::: details 详细说明（点击展开） 

| `{AttributePath}`                  | 说明                     |
| ---------------------------------- | ------------------------ |
|                                    | 获得所有属性及属性值     |
| usercomment                        | 获得对象说明             |
| model                              | 获得模型已有属性及属性值 |
| model.usercomment                  | 获得模型说明             |
| model.demodulator                  | 获得数字载波调制类型     |
| model.demodulator.us- ercomment    | 获得数字载波调制类型说明 |
| model.demodulator.modu- lationname | 获得数字载波调制类型名字 |
| model.linkmargintype               | 获得链路裕量类型         |
| model.linkmarginthreshold          | 获得阈值                 |
| model.govert                       | 获得品质因素             |
| model.polarization                 | 获得极化类型             |
| model.polarization.refer- enceaxis | 获得极化参考轴           |
| model.polarization.tiltan-  gle    | 获得极化角度             |
| model.frequency                    | 获得接收频率             |

- 属性参数：

| Property   | 说明                                                        |
| ---------- | ----------------------------------------------------------- |
| Properties | 获得当前属性定义的所有参数，包括他的最大值，最小值，单位等 |
| Choices    | 获得当前属性所有可以选择的选项                              |
| Size       | 获得当前属性返回列表中有值的行数                            |

- 属性包括参数： 获得属性参数需要使用:
 
| `{AttributePath}`                  | Property                       |
| -----------------------------------| ------------------------------ |
| UserComment                        | 包括 Properties                |
| Model                              | 包括 Properties, Choices, Size |
| Model.UserComment                  | 包括 Properties                |
| Model.Demodulator                  | 包括 Properties, Choices, Size |
| Model.Demodulator.Us- erComment    | 包括 Properties                |
| Model.Demodulator.Mod- ulationName | 包括 Properties                |
| Model.LinkmarginType               | 包括 Properties, Choices       |
| Model.GoverT                       | 包括 Properties                |
| Model.Polarization                 | 包括 Properties, Choices, Size |
| Model.Polarization.Refer- enceAxis | 包括 Properties, Choices       |
| Model.Polarization.TiltAn- gle     | 包括 Properties                |
| Model.frequency                    | 包括 Properties                |

:::

::: tip 举例

```
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue
```

```
Receiver_RM */Satellite/Sate1/Receiver/Receiver1 GetValue model.polarization:size
```

:::
