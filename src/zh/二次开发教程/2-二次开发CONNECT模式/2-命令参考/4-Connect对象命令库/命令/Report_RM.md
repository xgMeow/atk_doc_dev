---
groups: [场景]
---

# Report_RM

## 作用

读取指定对象的报告数据。报告输出哪些列、按什么方式组织，由报告样式决定。

## 前置条件

- 待读取的对象须已存在，例如卫星须先用 [New](./New.md) 创建。
- 对象若是新近创建的，须先执行 [Animate](./Animate.md) 命令的 Reset 生成星历数据，否则报告只有标题、取不到数据行。详见 [Animate](./Animate.md) 的「关于 Reset」。
- TimePeriod 所给时段须落在当前场景区间之内，参见下文「TimePeriod 的取值范围」。

## 语法

```atk-command
Report_RM <ObjectPath> ({Option} <Value>)...
```

## 语法说明

本命令由三部分构成：命令名 Report_RM、待读取的对象路径、以及一组可选项。

语法中的 `({Option} <Value>)...` 表示可给出任意多组「选项名 + 取值」，各组之间以空格分隔。其中 Style 与 TimePeriod 两项**为必填项**，其余可选项视报告类型选用。各组之间的书写顺序不限，例如把 TimePeriod 写在 Style 之前同样有效。

## 参数说明

| 参数 | 说明 |
| --- | --- |
| Style | 指定报告样式。取值须与报告样式的名称完全一致，名称中含空格时须用双引号括起，如 Style "Access Duration"。可用的样式名称见下文「报告类型说明」。 |
| TimePeriod | 指定读取的时段，依次给出开始时刻与结束时刻，两个时刻均用双引号括起。两个时刻须同时给出，缺少任一个即返回 NACK；开始时刻须早于结束时刻，两者颠倒亦返回 NACK；时段须落在场景区间之内，越出边界即返回 NACK。日期时间格式参见[常用日期/时间格式](../../2-参数值格式/日期时间格式.md)。 |
| TimeStep | 指定输出步长。**在卫星类报告上不起作用**：无论是否给出本参数、取值多少，输出的采样间隔恒为 60 秒。 |
| AccessObject | 指定要计算的对象（覆盖定义对象不包括此属性）。 |
| AdditionalData | 一些报告需要额外的数据（覆盖定义对象不包括此属性）。 |

## 不写 TimePeriod 时会读到 2000-01-01 的数据

**读取报告时必须给出 TimePeriod。** 不给出时，报告不会沿用场景区间，而是固定读取 2000-01-01 00:00:00 至 2000-01-02 00:00:00 的数据，采样间隔 60 秒，共 1441 行。

该默认时段是一个常量，与下列三者均无关：

- **与场景区间无关**。把场景区间分别设为 1999 年、2014 年、2025 年、2030 年的同一日，不写 TimePeriod 时读到的数据一律落在 2000-01-01。
- **与对象自身的时段无关**。把卫星自身的时段改为 2027 年，用 [GetTimePeriod](./GetTimePeriod.md) 读回确认修改已生效，不写 TimePeriod 时读到的数据仍落在 2000-01-01。
- **与当前仿真时刻无关**。用 [Animate](./Animate.md) 的 Step 把仿真时刻推进到场景区间之外，不写 TimePeriod 时读到的数据不变。

需要读取 2000-01-01 之外的时段时，命令中若未给出 TimePeriod，得到的数据与预期完全不符，且命令不会报错，极易被误认为报告本身没有数据。读取报告应始终显式指定时段。

## TimePeriod 的取值范围

- 两个时刻均须落在**场景区间之内**。恰好取满整个场景区间可以正常读取；起点提前 1 秒、或终点延后 1 秒，均返回 NACK。
- 时段落在场景区间之内、但落在**对象自身时段之外**时，命令不报错，返回的是只有标题、没有数据行的空报告。此时应从场景区间与对象时段是否一致上排查。

## 报告类型说明

对象数据报告的样式名称，可查看安装目录下 .\AstroData\ReportStyle 文件夹，其中的文件名即为报告样式名称，可输出的报告文件格式为 rsf。

此外还支持以下几类报告样式：

1. 可见性报告：Access（可见性报告）、AER（可见 AER 报告）、AER Rate（可见性参数变化率报告）、UnAccessible（不可见报告）、UnAccessible AER（不可见 AER 报告）、Access Summary（可见性统计报告）、AER Summary（可见 AER 统计报告）、UnAccessible Summary（不可见统计报告）、Range Rate（可见性距离变化率报告）。
2. 区域覆盖报告：Access Duration（可见时段报告）、Gap Duration（不可见时段报告）、Global Coverage（整体覆盖报告）、Gaps in Global Coverage（整体未覆盖报告）、Grid Point Information（网格点信息报告）、Grid Point Visible Assets（网格点可见对象报告）、Percent Coverage（覆盖百分比报告）、Coverage By Assets（对象覆盖报告）、Coverage By Latitude（纬度覆盖报告）。
3. 以下区域覆盖报告需要覆盖定义对象拥有**子对象品质因子**才可获取：Grid Stats Over Time（网格状态报告）、Grid Stats（网格状态报告）、Percent Satisfied（有效百分比报告）、Satisfied by Time（有效值报告）、Value By Grid Point At Time（网格点品质参数报告）、Value By Grid Point（网格点品质参数报告）、Value By Latitude（纬度品质参数报告）、Value By Longitude（经度品质参数报告）。

## 示例

::: details open **读取卫星位置报告**

须先建好场景与卫星，并用 Animate 的 Reset 生成星历，再指定要读取的时段：

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "6 Mar 2025 00:00:00.000"
New / */Satellite Satellite1
Animate * Reset
Report_RM */Satellite/Satellite1 Style "Position" TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 01:00:00.000"
```

上述命令读取的是场景区间内 1 小时的数据，共 61 行，采样间隔 60 秒。

:::

::: details open **不写 TimePeriod 时的对照**

承上例，把 TimePeriod 去掉，其余不变：

```
Report_RM */Satellite/Satellite1 Style "Position"
```

读到的数据不是上例中的 2025-03-05，而是 2000-01-01 00:00:00 至 2000-01-02 00:00:00 的 1441 行。详见上文「不写 TimePeriod 时会读到 2000-01-01 的数据」。

:::

::: details open **读取覆盖定义的可见时段报告**

报告中样式名称含空格，须用双引号括起：

```
New / */CoverageDefinition CoverageDefinition1
Cov */CoverageDefinition/CoverageDefinition1 Asset */Satellite/Satellite1 Assign
Cov */CoverageDefinition/CoverageDefinition1 Interval "5 Mar 2025 00:00:00.000" "6 Mar 2025 00:00:00.000"
Report_RM */CoverageDefinition/CoverageDefinition1 Style "Access Duration" TimePeriod "5 Mar 2025 00:00:00.000" "6 Mar 2025 00:00:00.000"
```

:::
