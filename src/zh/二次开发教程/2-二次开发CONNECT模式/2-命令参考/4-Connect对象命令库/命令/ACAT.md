---
groups: [高级接近分析]
---

# ACAT

## 作用

设置**高级接近分析**（AdvCat）对象的参数，并触发接近事件计算。

## 前置条件

- **ACAT 不具备创建对象的能力**，仅能设置已存在的对象。使用前须先用 [New](./New.md) 创建高级接近分析对象：

    ```
    New / */AdvCat AdvCat1
    ```

    后续所有设置均作用于该对象，其对象路径为 */AdvCat/AdvCat1。未先创建对象时，所有 ACAT 命令均返回 NACK。

- 主目标、次目标所引用的对象或文件须已存在；目标库文件支持 .tce 与 .tle 两种格式。目标列表的取值方式参见下文「目标列表参数取值」。

- **在执行计算与读取报告之前，须先执行 [Animate](./Animate.md) 命令的 Reset，令各参与计算的对象生成星历数据**：

    ```
    Animate * Reset
    ```

    新建卫星等对象之后其星历数据尚未生成。未执行 Reset 即发送 Compute On，读取接近事件报告只能得到表头与分隔线、没有任何数据行；执行 Reset 之后场景才会写入各对象的星历。详见 [Animate](./Animate.md) 的「关于 Reset」一节。

## 语法

```atk-command
ACAT <AdvCatObjPath> <Option> <Parameters>
```

## 语法说明

本命令由三部分构成：**命令名** ACAT、**待设置的对象路径**、**一个参数块**。

| 部分 | 含义 |
| --- | --- |
| ACAT | 命令名。 |
| `<AdvCatObjPath>` | 待设置的高级接近分析对象路径。可写为截断路径，如 */AdvCat/AdvCat1；亦可写为完整路径 /Scenario/场景名/AdvCat/对象名。*/AdvCat/对象名、AdvCat/对象名、/Scenario/场景名/AdvCat/对象名 三种写法均被接受。 |
| 参数块 | 单个待设置的参数，即指定要设置的对象属性及其取值。 |

**一条 ACAT 命令仅设置一个参数。** 例如发送 ACAT */AdvCat/AdvCat1 Threshold 50000 PntToPnt On 时，只有排在首位的 Threshold 生效，其后的 PntToPnt 被忽略。需设置多个参数时，应分多条命令发送，每条命令均须重复书写对象路径。下列两条命令分别设置一个参数：

```atk-command
ACAT */AdvCat/AdvCat1 Threshold 50000
ACAT */AdvCat/AdvCat1 PntToPnt On
```

参数名书写错误将直接返回 NACK。

语法中尖括号、花括号、方括号、竖线、双引号等符号的含义，参见[命令语法约定](../../1-命令语法约定.md)。

## 参数说明

| 参数 | 说明 |
| --- | --- |
| Compute On | 执行接近分析计算，无返回值。 |
| TimePeriod | 设置分析时段，须依次给出开始历元与结束历元两个日期时间，格式参见[常用日期/时间格式](../../2-参数值格式/日期时间格式.md)。设置后该对象**不再使用场景区间**，改用所指定的开始历元与结束历元。 |
| Primary、PrimaryMulti | 增删**主目标**列表，取值见下文「目标列表参数取值」。 |
| Secondary、SecondaryMulti | 增删**次目标**列表，取值与上述两者一致。 |
| Threshold | 设置阈值，须给出一个距离值，单位为 **m**，缺省值 10000。当主目标误差椭球与次目标误差椭球之间的距离低于该阈值时，记为接近事件。 |
| PntToPnt | 设置是否**使用距离测量**。取值二选一：On 或 Off，缺省为 Off。取 Off 时以主目标误差椭球与次目标误差椭球之间的距离为判据；取 On 时改用两目标中心之间的距离为判据。 |
| PreFilters | 设置预滤波器是否启用及启用时的门限值，可用的滤波器与取值单位见下文「PreFilters 滤波器说明」。 |
| ScaleFactor | 设置椭球比例因子，须给出一个缩放系数，缺省值为 1。 |
| SampleStepSize | 设置采样步长，须依次给出最大步长与最小步长两个数值，单位为 s，缺省值为 300 与 1。**最大值在前**，且须满足第一个数值大于第二个，否则返回 NACK。 |
| ConjTcaMode | 设置碰撞类型，对应界面上的「碰撞类型」下拉框。四选一：GlobalOnly（全局解）、LocalOnly（局部解）、GlobalPlusLocal（全局解+局部解）、LocalPlusEndPoints（局部解+边界解），缺省值为 GlobalOnly。 |

**取值不区分大小写。** PntToPnt 的 On、ON、on，ConjTcaMode 的 GlobalOnly、globalonly，预滤波器的滤波器名 outofdate，均可正常接受。

## 目标列表参数取值

Primary、PrimaryMulti、Secondary、SecondaryMulti 均用于增删目标，取值方式一致。

其中 Primary 与 PrimaryMulti 作用于**同一个主目标列表**，Secondary 与 SecondaryMulti 作用于**同一个次目标列表**，用其中一种写法添加的目标，另一种写法同样可见。两组写法的差别仅在于**一条 Add 可添加的目标数量**：

| 参数 | 说明 |
| --- | --- |
| `Add "<Path>" {AdditionalParams}` | 单目标写法。仅可添加一个目标，附加参数**不可省略**，省略后返回 NACK。 |
| `Add "<Path>" [{AdditionalParams}]` | 多目标写法。目标路径书写于**同一对引号之内**，多个目标以空格分隔，可一次全部添加；附加参数可省略，省略时该目标的三轴半长与包络球半径均记为 0。 |
| Remove | 从列表中移除目标。**仅在单目标写法（Primary、Secondary）上生效**；以 PrimaryMulti、SecondaryMulti 发送 Remove 时命令返回成功，但目标并未从列表中移除。 |
| RemoveAll | 移除列表中的全部目标。**仅 Primary RemoveAll 可用**；Secondary、PrimaryMulti、SecondaryMulti 的 RemoveAll 均返回 NACK。 |

### 目标路径写法

目标路径可采用以下两种写法：

| 写法 | 含义 | 示例 |
| --- | --- | --- |
| 对象截断路径 | 场景中已存在的对象，须用双引号括起。 | "Satellite/Satellite1" |
| 文件全路径 | 目标库文件（.tce 或 .tle），须用双引号括起。ATK 自带的 TLE 库位于安装目录下的 <PathCopy :entry="tleDatabaseDir" /> 目录中。 | "D:\ProgramTool\ATK-4.2.0-alpha.2\AstroData\Database\Satellite\atkAllTLE.tce" |

两种写法中的路径**均不作校验**：添加场景中并不存在的对象、乃至指定一个并不存在的文件，命令同样返回成功，路径的有效性需自行保证。

### 目标库文件格式

主目标、次目标均可引用目标库文件，格式支持 .tce 与 .tle 两种，两者内容均为 TLE 两行根数：.tce 为 ATK 的 TLE 目标库文件，汇集整个卫星编目；.tle 为 TLE 文件，可容纳一个或多个目标。

### 多目标的分隔符

多目标写法中，**多个目标之间只能以空格分隔**。以逗号或分号分隔时，ATK 不报错，而是把整串当作**一个**目标路径存入列表，这些目标实际一个也没有加入，例如：

```atk-command
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2,Satellite/Satellite3"
```

在上例中，列表内记录的是以下这一条路径：

```
/Scenario/场景名/Satellite/Satellite2,Satellite/Satellite3
```

须改为以空格分隔：

```atk-command
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2 Satellite/Satellite3"
```

同理，**单目标写法中若把多个目标写在同一对引号内，ATK 也不会报错**，而是将整串作为单个目标路径存入列表，此时的执行结果与预期不符。需一次添加多个目标时，应改用 PrimaryMulti、SecondaryMulti。

## Add 附加参数取值

用于设置该目标自身的误差椭球与包络球参数，取值如下：

| 参数 | 说明 |
| --- | --- |
| 椭球类别 | 设置目标误差椭球类别，目前仅支持 Fixed（固定），不区分大小写。 |
| 三轴半长 | 依次给出**切向、径向、法向**三个半长数值，单位为 **m**，与界面上主目标列表、次目标列表中的「切向」「径向」「法向」三列一一对应（界面上以 km 显示）。 |
| HardBodyRadius | 设置目标包络球半径，须给出一个半径值，单位为 **m**。 |

### 缺省值

**在给出附加参数的前提下，未写出的项取缺省值。** 只给出三轴半长时，包络球半径缺省为 **1** m；只给出 HardBodyRadius 时，三个半长缺省为**切向 20000 m、径向 10000 m、法向 5000 m**。这两个缺省值与界面上的「默认」栏一致。

**若完全不写附加参数**（仅多目标写法允许），该目标的三轴半长与包络球半径**均记为 0**，并不取上述缺省值。而单目标写法省略附加参数会直接返回 NACK。

### 书写顺序与限制

**各项书写顺序无强制要求**，且椭球类别可以省略。下列写法均有效：

```
Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0
Primary Add "Satellite/Satellite1" 21000.0 11000.0 6000.0
Primary Add "Satellite/Satellite1" HardBodyRadius 20
Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0 HardBodyRadius 20
Primary Add "Satellite/Satellite1" HardBodyRadius 20 Fixed 21000.0 11000.0 6000.0
```

注意以下两类写法会返回 NACK：

- 只写椭球类别而不给出三个半长数值，如 Primary Add "Satellite/Satellite1" Fixed；
- 给出的半长数值不足三个。

## PreFilters 滤波器说明

### 滤波器一览

| 滤波器 | 界面名称 | 新建时默认 | 门限值单位 | 门限值缺省 |
| --- | --- | --- | --- | --- |
| OutOfDate | 轨道历元过期门限 | **关** | **秒** | 2592000（30 天） |
| ApogeePerigee | 远/近地点门限 | **开** | 米 | 30000 |
| OrbitPath | 轨道路径筛选器门限 | **关** | 米 | 100000 |
| Time | 时间筛选器门限 | **开** | **米**（并非时间单位） | 30000 |

上表「新建时默认」与「门限值缺省」两列，为新建高级接近分析对象后不做任何设置时的取值。

新建对象时 ApogeePerigee 与 Time **默认处于开启状态**，会先行按门限筛除部分目标对；若未得到预期的接近事件，应优先检查上述两个滤波器。

### 设置方式

**每个滤波器须分别用两条命令设置**：一条给出滤波器名与 On 或 Off 决定是否启用，另一条给出滤波器名与门限值修改门限。原因是**一条命令只处理排在最前的一个词**，例如 PreFilters Time Off 555 中只有 Off 生效，555 被忽略。两条命令的示例：

```atk-command
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate On
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate 2592000
```

**为预滤波器传入门限值仅修改门限，不会同时启用该滤波器**；启用须另行发送以 On 结尾的命令。例如对默认关闭的 OutOfDate 发送门限值后，其启用状态仍为关。

## 补充说明

- **须先创建对象**：ACAT 不具备创建对象的能力。未先执行 New 创建高级接近分析对象时，所有 ACAT 命令均返回 NACK。
- **一条命令只设置一个参数**：详见「语法说明」。
- **参数名书写错误将直接返回 NACK**：预滤波器的滤波器名与 ConjTcaMode 的模式名均须为上文列出的取值。
- **Primary 与 PrimaryMulti 的差别在于一条 Add 可添加的目标数量**（Secondary 与 SecondaryMulti 同理），两者作用于同一列表，可混用，例如先执行 PrimaryMulti 添加两个目标，再执行 Primary 添加第三个目标。
- **多目标只能以空格分隔，Remove 只在单目标写法上生效**：详见「目标列表参数取值」。
- **椭球类别目前仅支持 Fixed**：界面【高级】页的「误差椭球数据库」中还提供「时间二次曲线数据库」、「固定轨道类型数据库」、「二次/固定类型数据库」三项数据库文件选择，但本版本 Connect 未提供与之对应的关键字。
- **Threshold 与预滤波器门限值均不作数值校验**：若填入的内容不能解析为数值，ATK 不报错，而是**把该门限置为 0**。取值合法性需自行保证。
- **包络球半径与 SSC 文件**：逐个目标设置包络球半径使用 HardBodyRadius；若需通过文件统一设置目标半径，参见 [ACAT SSCFile](./ACAT%20SSCFile.md)。该文件对应界面上的「SSC 目标半径文件」。
- **计算结果的查看**：Compute On 仅触发计算，不返回数据。计算结果使用 [Report_RM](./Report_RM.md) 读取，其报告样式名为 Simple Message、Cat Event Message 或 All Message，样式文件位于安装目录下的 <PathCopy :entry="advCatStyleDir" /> 目录中。读取时须给出 TimePeriod，写法见下方「读取接近事件报告」示例。

## 示例

::: details open **完整设置并计算高级接近分析**

须先建好场景与卫星，并确认卫星已生成星历：

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
New / */Satellite Satellite1
SetState */Satellite/Satellite1 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7000000.0 0.001 98.0 0.0 0.0 0.0
New / */Satellite Satellite2
SetState */Satellite/Satellite2 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7010000.0 0.001 98.0 0.0 0.0 0.0
New / */AdvCat AdvCat1
ACAT */AdvCat/AdvCat1 Threshold 50000
ACAT */AdvCat/AdvCat1 PntToPnt On
ACAT */AdvCat/AdvCat1 Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 SecondaryMulti Add "Satellite/Satellite2" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Animate * Reset
ACAT */AdvCat/AdvCat1 Compute On
```

**注意**：[Animate](./Animate.md) 的 Reset 须排在 Compute On 之前，否则 Compute On 不会得到任何接近事件。上方示例中的时间步与轨道参数仅为示意，实际使用时应按场景设定。

:::

::: details open **一次添加多个目标**

```
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2 Satellite/Satellite3" Fixed 21000.0 11000.0 6000.0
```

多个目标路径须写在**同一对引号之内**、以**空格**分隔。逗号、分号不是分隔符。

:::

::: details open **从目标库文件添加次目标**

```
ACAT */AdvCat/AdvCat1 Secondary Add "D:\ProgramTool\ATK-4.2.0-alpha.2\AstroData\Database\Satellite\atkAllTLE.tce" Fixed 21000.0 11000.0 6000.0
```

文件路径须用双引号括起，且应替换为本机上的实际路径。

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

每个滤波器须用两条命令分别设置开关与门限；上例中 ApogeePerigee、OrbitPath、Time 三条只给出了门限值，因此它们不改变各自原有的启用状态。

:::

::: details open **清空主目标列表**

```
ACAT */AdvCat/AdvCat1 Primary RemoveAll
```

RemoveAll 只有 Primary 可用，不可写成 Secondary RemoveAll 或 PrimaryMulti RemoveAll。

:::

::: details open **读取接近事件报告**

须先执行 Compute On，并按上文「前置条件」的要求先生成星历。读取时须给出 TimePeriod，时段取高级接近分析的分析时段：

```
Animate * Reset
Report_RM */AdvCat/AdvCat1 Style "Cat Event Message" TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

报告样式与 TimePeriod 参数的写法详见 [Report_RM](./Report_RM.md)。

:::

<script setup>
import PathCopy from "@components/PathCopy/PathCopy.vue";

const tleDatabaseDir = { path: 'AstroData\\Database\\Satellite', name: 'AstroData\\Database\\Satellite' };
const advCatStyleDir = { path: 'AstroData\\ReportStyle\\AdvCat', name: 'AstroData\\ReportStyle\\AdvCat' };
</script>
