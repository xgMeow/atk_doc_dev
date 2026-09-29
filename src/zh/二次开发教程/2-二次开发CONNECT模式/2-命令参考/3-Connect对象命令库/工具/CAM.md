# CAM

## 作用

设置碰撞规避（轨控安全性分析）的参数，并完成自然交会分析、避撞机动规划、机动复核等计算与结果导出。

## 语法

```atk-command
CAM <ScenarioPath> <子命令> <参数…>
```

## 补充说明

本命令由「子命令 + 参数」构成，参数个数随子命令而定；各子命令的参数顺序固定，不可调换。`<ScenarioPath>` 为场景路径，代表当前场景时写作 `*`。下面按功能分组给出各子命令，均以场景 `*` 为例。

::: warning 注意
界面和二次开发工具未完全同步，使用二次开发命令操作不会同步刷新界面。
:::

**选择卫星对象**

对应主界面上主目标（卫星）的选择，可取自场景中的卫星对象，也可取自卫星星历文件。

```atk-command
CAM * FromSatellite Mode Scenario <ObjectPath>
CAM * FromSatellite Mode Ephemeris "<FilePath>"
```

| `Mode` 取值 | 说明 |
|------|------|
| `Scenario` | 从场景选择，其后给出卫星对象的完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `Ephemeris` | 从星历选择，其后给出卫星星历文件的路径 |

**目标星历文件**

对应主界面的目标星历设置。

```atk-command
CAM * UseTargetEphFile {On | Off}
CAM * TargetEphFile Mode Scenario <ObjectPath>
CAM * TargetEphFile Mode Ephemeris "<FilePath>"
```

`UseTargetEphFile` 设置是否启用目标星历文件；`TargetEphFile` 设置目标星历的来源。

| `Mode` 取值 | 说明 |
|------|------|
| `Scenario` | 从场景选择，其后给出目标卫星对象的完整路径，自场景 `*` 起写全 |
| `Ephemeris` | 从星历选择，其后给出目标星历文件的路径 |

**目标数据库**

对应主界面的目标数据库（目标编目数据库）设置。

```atk-command
CAM * SpaceObjects UseTLE {On | Off}
CAM * SpaceObjects TLE "<FilePath>"
CAM * SpaceObjects UseCTLE {On | Off}
CAM * SpaceObjects CTLE "<FilePath>"
```

`UseTLE`、`UseCTLE` 分别设置是否使用 TLE、CTLE 文件作为目标数据库，`TLE`、`CTLE` 分别给出对应文件的路径。

**排除 SSC 编号**

对应主界面的排除目标 SSC 编号设置，被列入的目标不参与分析。

```atk-command
CAM * ExcludedSSC Add <count> <num1> <num2> …
```

`Add` 之后先给出本次要添加的编号个数 `<count>`，再依次给出相应数量的 SSC 编号，编号之间以空格分隔。SSC 编号为五位数的空间目标国际编号。

**交会分析门限**

对应主界面的交会分析门限，计算后仅输出等效距离小于该门限的交会数据。

```atk-command
CAM * MaxRange <Value>
```

**相对轨道预报模型**

对应主界面的相对轨道预报模型选择。

```atk-command
CAM * RelativeOrbitModel {Linear | Nonlinear | VintiPropagation}
```

| `取值` | 说明 |
|------|------|
| `Linear` | 线性方程 |
| `Nonlinear` | 非线性方程 |
| `VintiPropagation` | 解析绝对预报 |

**过滤器**

对应轨控安全性分析高级设置的过滤器，用于在自然交会分析前筛除不可能接近的目标。

```atk-command
CAM * PreFilters Method Analytical
CAM * PreFilters OutOfRange On <Value>
CAM * PreFilters OutOfRange Off
CAM * PreFilters ApoPeri On <Value>
CAM * PreFilters ApoPeri Off
CAM * PreFilters Orbit On <Value>
CAM * PreFilters Orbit Off
CAM * PreFilters Time On <Value>
CAM * PreFilters Time Off
```

`Method` 设置过滤器所用的方法，给出的取值为 `Analytical`（解析法）。四项过滤器的取值如下。

| `取值` | 说明 |
|------|------|
| `OutOfRange` | 轨道历元过期门限，界面默认 2592000 sec（即 30 天） |
| `ApoPeri` | 远/近地点门限，界面默认 50000 m |
| `Orbit` | 轨道路径筛选器门限 |
| `Time` | 时间筛选器门限 |

每项过滤器均以 `On <Value>` 开启并按 `<Value>` 设置门限值，以 `Off` 关闭。

**等效距离门限**

对应轨控安全性分析高级设置的等效距离门限，用于设置等效距离的黄色、红色告警门限与等效距离系数。

```atk-command
CAM * DistThreshold Yellow <Value>
CAM * DistThreshold Red <Value>
CAM * DistThreshold EquivalFactor <Value>
```

| `取值` | 说明 |
|------|------|
| `Yellow` | 黄色告警的等效距离门限 |
| `Red` | 红色告警的等效距离门限 |
| `EquivalFactor` | 等效距离系数 $k$ |

等效距离按 $s_{k}=\max \left(d_{k}/k,\left|R_{k}\right|\right)$ 计算，其中 $d_{k}$ 为相对距离、$R_{k}$ 为径向距离；界面上等效距离小于黄色门限、红色门限的数据分别以黄色、红色标识。

**计算自然交会**

对应自然交会模块的计算。

```atk-command
CAM * Compute CloseAnalysis
```

**计算避撞机动规划（遍历分析）**

对应避撞机动规划模块的遍历分析区域。本组子命令的第二个词为 `CAM`，其后才是具体项。

```atk-command
CAM * CAM LowBoundCtrlTime "<TimeValue>"
CAM * CAM LowBoundDA <Value>
CAM * CAM UpBoundCtrlTime "<TimeValue>"
CAM * CAM UpBoundDA <Value>
CAM * CAM Enum UseCtrlTime {On | Off}
CAM * CAM Enum UseCtrlDA {On | Off}
CAM * CAM Enum TimeStep <Value>
CAM * CAM Enum DAStep <Value>
CAM * CAM Enum AddToVerification
CAM * Compute CAMEnum
```

| 子命令 | 说明 |
|------|------|
| `CAM LowBoundCtrlTime`、`CAM UpBoundCtrlTime` | 控制时刻前限、控制时刻后限 |
| `CAM LowBoundDA`、`CAM UpBoundDA` | 半长轴控制量下限、半长轴控制量上限 |
| `CAM Enum UseCtrlTime` | 设置是否进行时间规划 |
| `CAM Enum UseCtrlDA` | 设置是否进行控制量规划 |
| `CAM Enum TimeStep` | 遍历分析的时间步长 |
| `CAM Enum DAStep` | 遍历分析的半长轴控制步长 |
| `CAM Enum AddToVerification` | 将选中结果载入到机动复核 |
| `Compute CAMEnum` | 执行遍历分析计算 |

**计算避撞机动规划（优化分析）**

对应避撞机动规划模块的优化分析区域。

```atk-command
CAM * CAM Opti MinRange <Value>
CAM * CAM Opti AddToVerification
CAM * Compute CAMOpti
```

| 子命令 | 说明 |
|------|------|
| `CAM Opti MinRange` | 规避门限 |
| `CAM Opti AddToVerification` | 将选中结果载入到机动复核 |
| `Compute CAMOpti` | 执行优化分析计算 |

**计算机动复核**

对应机动复核模块。

```atk-command
CAM * MV ManeuverTime "<TimeValue>"
CAM * MV CtrlDA <Value>
CAM * MV InTrack <Value>
CAM * MV AddSatToScenario
CAM * Compute ManeuverVerification
```

| 子命令 | 说明 |
|------|------|
| `MV ManeuverTime` | 控制时刻 |
| `MV CtrlDA` | 半长轴控制量 |
| `MV InTrack` | 横向机动量 |
| `MV AddSatToScenario` | 添加卫星到场景 |
| `Compute ManeuverVerification` | 执行机动复核计算 |

**计算偏差机动复核**

对应偏差机动复核模块。

```atk-command
CAM * MVUq ManeuverTime "<TimeValue>"
CAM * MVUq CtrlDA <Value>
CAM * MVUq SemiAxisDev <Value>
CAM * MVUq AddSatToScenario
CAM * Compute MVUq
```

| 子命令 | 说明 |
|------|------|
| `MVUq ManeuverTime` | 控制时刻 |
| `MVUq CtrlDA` | 半长轴控制量 |
| `MVUq SemiAxisDev` | 半长轴标准差 3σ |
| `MVUq AddSatToScenario` | 添加卫星到场景 |
| `Compute MVUq` | 执行偏差机动复核计算 |

**计算偏差机动复核（半长轴偏差估算）**

对应偏差机动复核模块的半长轴偏差估算，据此估算半长轴偏差。

```atk-command
CAM * MVUq MVUDa3s EngineThrust Mean <Value>
CAM * MVUq MVUDa3s EngineThrust SD <Value>
CAM * MVUq MVUDa3s SpacecraftMass Mean <Value>
CAM * MVUq MVUDa3s SpacecraftMass SD <Value>
CAM * MVUq MVUDa3s BurnDuration Mean <Value>
CAM * MVUq MVUDa3s BurnDuration SD <Value>
CAM * MVUq MVUDa3s Azimuth Mean <Value>
CAM * MVUq MVUDa3s Azimuth SD <Value>
CAM * MVUq MVUDa3s Elevation Mean <Value>
CAM * MVUq MVUDa3s Elevation SD <Value>
CAM * Compute MVUDa3s
```

每项输入量均须分别给出 `Mean`（均值）与 `SD`（标准差）两个取值。

| 输入量 | 说明 | 界面标注单位 |
|------|------|------|
| `EngineThrust` | 发动机推力 | `N` |
| `SpacecraftMass` | 航天器质量 | `kg` |
| `BurnDuration` | 开机时长 | `sec` |
| `Azimuth` | 推力方位角 | `deg` |
| `Elevation` | 推力俯仰角 | `deg` |

**输出数据**

将各分析结果另存为文件。

```atk-command
CAM * SaveAs CloseAnalysis
CAM * SaveAs CAMEnum
CAM * SaveAs ManeuverVerification
CAM * SaveAs MVUDa3s
CAM * SaveAs MVUq
```

| `取值` | 说明 |
|------|------|
| `CloseAnalysis` | 自然交会结果 |
| `CAMEnum` | 遍历分析结果 |
| `ManeuverVerification` | 机动复核结果 |
| `MVUDa3s` | 半长轴偏差估算结果 |
| `MVUq` | 偏差机动复核结果 |

注意事项：

- 各子命令的参数个数与顺序固定，不可调换。
- 带单位的参数，其取值单位由当前 Connect 的单位设置决定，并非固定值：交会分析门限、等效距离告警门限、半长轴控制量及其上下限、规避门限、半长轴控制步长、半长轴标准差按 `Distance` 单位输入；时间步长按 `Time` 单位输入；控制时刻、控制时刻前限与后限按 `Date` 单位输入。单位设置方式参见[常用单位格式](../../2-参数值格式/单位格式.md)。
- `<TimeValue>` 等时刻值内部含空格，必须整体用双引号括起来，如 `"1 Jul 2021 09:00:00.000"`；日期时间的填写格式参见[日期时间格式](../../2-参数值格式/日期时间格式.md)。文件路径的写法同理，须整体用双引号括起来。
- 发动机推力、横向机动量的量纲在 Connect 单位设置中没有对应项，其单位为界面标注的 `N`、`m/s`，不受 Connect 单位设置影响；等效距离系数 `EquivalFactor` 为无量纲系数。
- `SaveAs` 支持把结果另存到指定文件，此时在结果类型后给出文件路径，如 `CAM * SaveAs CloseAnalysis "C:\Result\CloseAnalysis.txt"`。

## 示例

::: details open **选择卫星对象并配置目标数据库**

```
CAM * FromSatellite Mode Scenario */Satellite/Satellite1
CAM * SpaceObjects UseTLE On
CAM * SpaceObjects TLE "C:\Data\TLE.txt"
CAM * ExcludedSSC Add 2 25544 43013
```

- `*/Satellite/Satellite1`：卫星对象的完整路径
- `SpaceObjects UseTLE On`：使用 TLE 文件作为目标数据库
- `"C:\Data\TLE.txt"`：TLE 文件路径
- `ExcludedSSC Add 2 25544 43013`：添加 2 个排除目标 SSC 编号

:::

::: details open **设置交会分析门限与等效距离门限**

```
CAM * MaxRange 5000
CAM * RelativeOrbitModel Nonlinear
CAM * DistThreshold Yellow 200
CAM * DistThreshold Red 50
CAM * DistThreshold EquivalFactor 10
```

- `MaxRange 5000`：交会分析门限的取值，单位由当前 Connect 的距离单位设置决定
- `RelativeOrbitModel Nonlinear`：相对轨道预报模型取非线性方程
- `DistThreshold Yellow 200`：黄色告警的等效距离门限
- `DistThreshold Red 50`：红色告警的等效距离门限
- `DistThreshold EquivalFactor 10`：等效距离系数 $k$

:::

::: details open **计算自然交会并另存结果**

```
CAM * Compute CloseAnalysis
CAM * SaveAs CloseAnalysis "C:\Result\CloseAnalysis.txt"
```

- `Compute CloseAnalysis`：执行自然交会计算
- `SaveAs CloseAnalysis "C:\Result\CloseAnalysis.txt"`：把自然交会结果另存到指定文件

:::

::: details open **进行遍历分析**

```
CAM * CAM LowBoundCtrlTime "1 Jul 2021 09:00:00.000"
CAM * CAM UpBoundCtrlTime "1 Jul 2021 09:10:00.000"
CAM * CAM LowBoundDA 0.5
CAM * CAM UpBoundDA 5.0
CAM * CAM Enum UseCtrlTime On
CAM * CAM Enum UseCtrlDA On
CAM * CAM Enum TimeStep 60
CAM * CAM Enum DAStep 0.1
CAM * Compute CAMEnum
CAM * SaveAs CAMEnum "C:\Result\CAMEnum.txt"
```

- `"1 Jul 2021 09:00:00.000"`：控制时刻前限，字符串内部含空格，须用双引号括起来
- `CAM LowBoundDA 0.5`、`CAM UpBoundDA 5.0`：半长轴控制量的下限、上限
- `CAM Enum UseCtrlTime On`：进行时间规划
- `CAM Enum TimeStep 60`：时间步长的取值，单位由当前 Connect 的时间单位设置决定
- `CAM Enum DAStep 0.1`：半长轴控制步长
- `Compute CAMEnum`：执行遍历分析计算
- `SaveAs CAMEnum "C:\Result\CAMEnum.txt"`：把遍历分析结果另存到指定文件

:::

::: details open **进行机动复核与偏差机动复核**

```
CAM * MV ManeuverTime "1 Jul 2021 09:05:00.000"
CAM * MV CtrlDA 1.5
CAM * MV InTrack 0.2
CAM * Compute ManeuverVerification
CAM * MVUq ManeuverTime "1 Jul 2021 09:05:00.000"
CAM * MVUq CtrlDA 1.5
CAM * MVUq SemiAxisDev 0.01
CAM * Compute MVUq
```

- `"1 Jul 2021 09:05:00.000"`：控制时刻，字符串内部含空格，须用双引号括起来
- `MV CtrlDA 1.5`：半长轴控制量的取值
- `MV InTrack 0.2`：横向机动量的取值
- `Compute ManeuverVerification`：执行机动复核计算
- `MVUq SemiAxisDev 0.01`：半长轴标准差 3σ 的取值
- `Compute MVUq`：执行偏差机动复核计算

:::
