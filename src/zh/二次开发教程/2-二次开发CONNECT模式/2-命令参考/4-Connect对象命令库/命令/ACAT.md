---
groups: [高级接近分析]
---

# ACAT

## 作用

设置**高级接近分析**（AdvCat）对象的参数，并触发接近事件计算。

## 前置条件

`ACAT` 只能设置**已存在**的高级接近分析对象，它**不能创建对象**。使用前必须先用 [`New`](./New.md) 新建一个高级接近分析对象：

```
New / */AdvCat AdvCat1
```

之后所有设置都作用在该对象上，对象路径写 `*/AdvCat/AdvCat1`。

## 语法

```atk-command
ACAT <AdvCatObjPath> {CalculateOptions} <Parameters>
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `Compute On` | 执行接近分析计算，无返回值。对应界面【主配置】页的 <kbd>计算</kbd> 按钮 |
| `TimePeriod {TimeInterval}` | 设置分析周期（开始/结束历元），格式请查看[常用日期/时间格式](../../2-参数值格式/日期时间格式.md)。<br/>设置后该对象**不再使用场景区间** |
| `Primary {Parameters}` | 设置**主目标**列表（单目标） |
| `PrimaryMulti {Parameters}` | 设置**主目标**列表（多目标） |
| `Secondary {Parameters}` | 设置**次目标**列表（单目标） |
| `SecondaryMulti {Parameters}` | 设置**次目标**列表（多目标） |
| `Threshold <DistanceValue>` | 设置阈值，单位 **m**（缺省 `10000`）。<br/>主目标误差椭球与次目标误差椭球之间的距离低于该阈值时，记为接近事件 |
| `PntToPnt {On \| Off}` | 设置是否使用距离测量（缺省 `Off`）。<br/>`On` 时采用两目标之间的相对距离（而非椭球间距）作为判据 |
| `PreFilters {OutOfDate \| ApogeePerigee \| OrbitPath \| Time} {On \| Off \| <Value>}` | 设置预滤波器`{轨道历元过期 \| 远/近地点 \| 轨道路径 \| 时间}`是否使用及使用时的门限值，详见下文 |
| `ScaleFactor <ScaleValue>` | 设置椭球比例因子，缺省为 `1` |
| `SampleStepSize <MaxValue> <MinValue>` | 设置最大/最小采样步长（单位 s），**最大值在前**（缺省 `300 1`） |
| `ConjTcaMode {GlobalOnly \| LocalOnly \| GlobalPlusLocal \| LocalPlusEndPoints}` | 设置碰撞类型`{全局解 \| 局部解 \| 全局解 + 局部解 \| 局部解 + 边界}` |

### `Primary`/`Secondary` `{Parameters}` 取值

用于**单目标**列表：一条 `Add` 只能添加**一个**目标。

| 参数 | 说明 |
| --- | --- |
| `Add "<ObjPath>" \| "<ObjFileName>" {AdditionalParams}` | 将目标添加至列表。`{AdditionalParams}` **不可省略** |
| `Remove "<ObjPath>" \| "<ObjFileName>"` | 从列表移除目标 |
| `RemoveAll` | 移除列表中所有目标。**仅 `Primary` 支持**，`Secondary RemoveAll` 会返回 `NACK` |

### `PrimaryMulti`/`SecondaryMulti` `{Parameters}` 取值

用于**多目标**列表：一条 `Add` 可一次添加多个目标。

| 参数 | 说明 |
| --- | --- |
| `Add "<ObjPath>" [{AdditionalParams}]` | 将目标添加至列表。目标路径写在**同一对引号内**，用空格分隔多个目标，例如 `"Satellite/Sat1 Satellite/Sat2"`。`{AdditionalParams}` 可省略 |
| `Remove "<ObjPath>"` | 从列表移除目标 |

### `Add` 的 `{AdditionalParams}` 取值

| 参数 | 说明 |
| --- | --- |
| `{Class}` | 设置目标误差椭球类别，目前仅支持 `Fixed`（固定），大小写不敏感 |
| `<Tangential> <CrossTrack> <Normal>` | 设置目标误差椭球三轴半长（切向、横向、法向），单位 **m** |
| `HardBodyRadius <RadiusValue>` | 设置目标包络球半径，单位 **m** |

### `PreFilters` 的缺省状态、`<Value>` 单位与缺省值

新建对象时各预滤波器的默认状态：

| 滤波器 | 含义 | 新建时默认 | `<Value>` 单位 | `<Value>` 缺省值 |
| --- | --- | --- | --- | --- |
| `OutOfDate` | 轨道历元过期门限 | **关** | **秒** | `2592000`（30 天） |
| `ApogeePerigee` | 远/近地点门限 | **开** | 米 | `30000` |
| `OrbitPath` | 轨道路径门限 | **关** | 米 | `100000` |
| `Time` | 时间门限 | **开** | **米**（注意不是时间） | `30000` |

> 新建对象时 `ApogeePerigee` 与 `Time` 是**默认开启**的，会先按门限筛掉一批目标对；如果发现算不出预期的接近事件，先检查这两个滤波器。

## 补充说明

- **先建对象，再设参数**：`ACAT` 不创建对象。忘记先执行 `New / */AdvCat <名称>` 时，所有 `ACAT` 命令都会返回 `NACK`。
- **`Primary` 与 `PrimaryMulti` 的区别是本命令最容易用错的地方**：
  - `Primary`/`Secondary` 是**单目标**列表，一条 `Add` 只接受一个目标，且必须带 `{AdditionalParams}`；
    如果把多个目标写在一条命令里（如 `Add "Satellite/Sat1 Satellite/Sat2"`），ATK 会把整串当成**一个**目标路径存下来，而不是拆成两个目标。
  - `PrimaryMulti`/`SecondaryMulti` 是**多目标**列表，一条 `Add` 里用空格分隔多个目标即可一次全部添加，`{AdditionalParams}` 可选。
- **`{Class}` 目前只有 `Fixed`**：界面上误差椭球类别还有“轨道类型”“二次曲线”“二次/轨道”“协方差”，但本版本 Connect 未提供对应关键字。
- **`Threshold` 写纯数字**：单位为米。写成 `50 km` 时 ATK 会接受但**忽略单位词**（按 50 米存储），负值也不会报错，务必自行保证取值合法。
- **`TimePeriod` 会解除“使用场景区间”**：不设置时沿用场景区间；设置后使用指定的开始/结束历元。
- **给 `PreFilters` 传 `<Value>` 只修改门限值，不会自动启用该滤波器**：要启用需另发一条 `On`，例如先 `PreFilters OutOfDate On` 再 `PreFilters OutOfDate 2592000`。
- **参数名写错会直接 `NACK`**：`PreFilters` 的滤波器名与 `ConjTcaMode` 的模式名都必须完全匹配可选值。
- **包络球半径与 SSC 文件**：逐个目标设置包络球半径用 `HardBodyRadius`；改用文件统一设置目标半径，请参见 [`ACAT SSCFile`](./ACAT%20SSCFile.md)。两者对应界面【高级】页的“SSC 目标半径文件”。
- **查看计算结果**：`Compute On` 只触发计算、不返回数据。结果请在界面【主配置】页点击 <kbd>报告</kbd>，或用 [`Report_RM`](./Report_RM.md) 读取：

  ```
  Report_RM */AdvCat/AdvCat1 Style "Cat Event Message"
  ```

  高级接近分析内置的报告样式有 `Simple Message`、`Cat Event Message`、`All Message`（位于安装目录 `.\AstroData\ReportStyle\AdvCat\`）。

## 示例

::: details open **完整设置一轮高级接近分析并计算**

```
New / */AdvCat AdvCat1
ACAT */AdvCat/AdvCat1 Threshold 50000
ACAT */AdvCat/AdvCat1 PntToPnt On
ACAT */AdvCat/AdvCat1 Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2 Satellite/Satellite3 Satellite/Satellite4" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 Secondary Add "E:\AstroData\atkAllTLE.tce" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 SecondaryMulti Add "Satellite/Satellite6 Satellite/Satellite7 Satellite/Satellite8" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 TimePeriod "14 Nov 2030 08:00:00.000" "15 Nov 2030 08:00:00.000"
ACAT */AdvCat/AdvCat1 Compute On
```

:::

::: details open **单目标 vs 多目标：一次性添加多个目标**

```
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2 Satellite/Satellite3" Fixed 21000.0 11000.0 6000.0
```

:::

::: details open **设置预滤波器、椭球比例因子与采样参数**

```
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate On
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate 2592000
ACAT */AdvCat/AdvCat1 PreFilters ApogeePerigee 30000
ACAT */AdvCat/AdvCat1 PreFilters OrbitPath 100000
ACAT */AdvCat/AdvCat1 PreFilters Time 30000
ACAT */AdvCat/AdvCat1 ScaleFactor 1
ACAT */AdvCat/AdvCat1 SampleStepSize 300 1
ACAT */AdvCat/AdvCat1 ConjTcaMode GlobalPlusLocal
```

:::

::: details open **清空主目标列表**

```
ACAT */AdvCat/AdvCat1 Primary RemoveAll
```

:::

::: details open **读取接近事件报告**

```
Report_RM */AdvCat/AdvCat1 Style "Cat Event Message"
```

:::
