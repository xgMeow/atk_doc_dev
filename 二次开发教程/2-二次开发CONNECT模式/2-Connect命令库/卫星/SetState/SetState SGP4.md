# SetState SGP4

- 作用：设置卫星对象 SGP4 状态

- 用法： 
```
SetState <SatObjectPath> SGP4 {NoProp | {TimeInterval}} <StepSize> <SSCNumber> TLESource {Automatic | DefineElements} [<Parameters >]
```

::: details 详细说明（点击展开）

 

| Parameter                               | 说明      |
| --------------------------------------- | ------------------------------------------------------ |
| `{NoProp \| { TimeInterval }}`          | TimeInterval 格式请查看常用设置格式–常用日期/时间格式 |
| `TLESource {Automatic \| DefineElements}` | 请查看下列表格                                         |

- 若 `TLESource` 输入值为 `Automatic`, 可包括以下参数：


| Parameter                                 | 说明     |
| ---------------------------------------   | ------------------------------------------------------------ |
| `Source {AGIServer \| File "<Filename>"}` | 默认属性为 `AGIServer`, 若输入 `Filename`, 应当包括文件路径，  `SSCNum` 必须被包含 |
| `UseTLE {All \| First}`                   | 使用此方法恢复 `TLE` 数据 ，默认值是 `All`                       |
| `SwitchMethod {Epoch \| Midpoint \| TCA}` | 设置此方法转换 `TLE` 数据，默认值是 `Epoch，` 若 `UseTLE` 被设置为 `First`, 则此方法将不会生效 |
| `UseCatalogModel`                         | 此方法会根据 `SSCNum` 加载一个卫星模型，若不输入则会使用默认卫星模型          |



- 若 `TLESource` 输入值为 `DefineElements`, 可包括以下参数：


| Parameter                                                    | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `Source {AGIServer \| File "<Filename>" \| DefaultFile \|  Elements <Parameters>}` | 默认属性为 `AGIServer`。若输入 `Filename`, 应当包括文件路径， `SSCNum` 必须被包含。若输入 `DefaultFile` 则会使用默认文件。若输入  `Elements`, `Parameters` 格式设置请查看下表 |
| `SwitchMethod {Epoch \| Midpoint \| TCA}`                      | 设置此方法转换 `TLE` 数据，默认值是 `Epoch`, 若 `UseTLE` 被设置为 `First`, 则此方法将不会生效 |
| `UseCatalogModel`                                              | 此方法会根据 `SSCNum` 加载一个卫星模型，若 不输入则会使用默认卫星模型。 |

- 若 `Source` 输入值为 `Elements` ，可包括以下参数：

 

| Parameter                                                    | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ElementSet <MeanMotion>  <Eccentricity> <Inclination> <ArgOfPerigee>  <RAAN>  <MeanAnomaly>  <BStar>` | 使用这些参数描述轨道状态，这些值得说明请 查看下表 <br>注意：如果输入属性为 Source Elements，则 ElementSet 被要求输入。 |
| `OrbitEpochYYDDD  <Date>`                                      | 指定正确的轨道元素通用日期和时间。 Date 输 入格式为 YYDDD.DDDDDDDD。 |
| `RevNumber  <Value>`                                           | 设置经过圈数 。若不输入此属性，则默认为 第一圈               |
| `Classification  <Value>`                                      | 设置密级分类。只能输入一个字母                               |
| `IntlDesignator  <Value>`                                      | 使用 1-8 个字符设置国际指定卫星名                            |
| `MeanMotionDot  <Value>`                                       | 设置平动一阶时间导数                                         |
| `MeanMotionDotDot  <Value>`                                    | 设置平动二阶时间导数                                         |

- 此表格用来说明 Source Elements ElementSet 的值：


| Element        | 说明                              |
| -------------- | --------------------------------- |
| `<MeanMotion>`   | 设置平均运动                      |
| `<Eccentricity>` | 设置偏心率，设置值大于 0 且小于 1 |
| `<Inclination>`  | 设置轨道倾角。默认单位是度。      |
| `<ArgOfPerigee>` | 设置近地点角。默认单位是度。      |
| `<RAAN>`         | 设置升交点赤经。默认单位是度。    |
| `<MeanAnomaly>`  | 设置平近点角。默认单位是度。      |
| `<BStar>`        | 设置阻力条件。                    |

:::

::: note 举例
```
SetState */Satellite/M1 SGP4 NoProp 60.0 43001 TLESource DefineElements Source Elements OrbitEpochYYDDD 21193.89900000 ElementSet 1.86231812 0.0011522 55.3739 293.8842 123.0806 178.195 0 IntlDesignator 17069A_ MeanMotionDot 1.5e-07 RevNumber 2507 Classification U
```
:::
