---
groups: [可见性分析]
---

# Access_RM Access

## 作用

获取**当前访问**的可见性报告，并以 `ReportStyle` 参数指定报告样式，输出可见性报告、视线参数（AER）报告、参数变化率报告、统计摘要等九种格式之一。

命令只生成报告，不新建、不修改场景中的对象。报告所针对的对象对由「当前访问」决定，见下文「关于当前访问」。

## 前置条件

- **须先算出访问。** 本命令不能自行指定参与计算的两个对象，报告的目标是场景中的「当前访问」，即最近一次由 [Access](./Access.md) 计算出的那一对对象。尚未计算过任何一对对象时，命令返回 NACK。

- **对象路径须指向当前访问的第一个对象。** 指向该对中的第二个对象时，命令返回 NACK。

- 访问结果以对象的星历数据为基础，须先执行 [Animate](./Animate.md) 的 Reset，参见 [Access](./Access.md) 的「前置条件」。

## 语法

```atk-command
Access_RM <ObjectPath> Access Compute "<ReportStyle>" [{<StartTime> <StopTime> | UseObjectTimes}]
```

## 语法说明

本命令由四部分构成：命令名 Access_RM、**一个对象路径**、**关键字对 Access Compute**、**一个报告样式**，以及**一个可省略的时段参数块**。

| 部分 | 含义 |
| --- | --- |
| Access_RM | 命令名。 |
| `<ObjectPath>` | 当前访问中第一个对象的路径。 |
| Access Compute | 固定关键字对，须成对给出；只写其中一个时命令返回 NACK。 |
| `<ReportStyle>` | 报告样式，取值见下文「报告样式」。 |
| 时段参数块 | 可省略。给出时为两个日期时间，或 UseObjectTimes，见下文「时段参数块」。 |

命令名与关键字均不区分大小写，参见[命令语法约定](../../1-命令语法约定.md)。

**时段参数的写法与 Access 命令不同。** Access 的时段须冠以 TimePeriod 关键字；本命令**不接受** TimePeriod 关键字，写成 `Access Compute "Access" TimePeriod "..." "..."` 会返回 NACK，直接依次给出开始历元与结束历元两个日期时间即可。

对象路径按[命令语法约定](../../1-命令语法约定.md)的常规写法填写：可写完整路径 `*/Satellite/Satellite1`，也可写截断路径 `Satellite/Satellite1`。对象类型与名称**区分大小写**，写成 `*/satellite/Satellite1` 返回 NACK；指向不存在的对象返回 NACK；写成访问对象自身的路径（`*/ObjectAccess/...`）同样返回 NACK。

### 时段参数块

以下两种写法二选一，整块亦可省略。

**两个日期时间。** 依次给出**开始历元**与**结束历元**，格式参见[日期时间格式](../../2-参数值格式/日期时间格式.md)。两个日期时间均须用双引号括起；未加引号、只给出其中一个，或内容无法解析为合法日期时间，命令均返回 NACK。

**UseObjectTimes。** 不给出具体日期时间，改用对象自身时段。

- **两个历元的先后顺序不可颠倒**，须按开始历元在前、结束历元在后的次序给出。
- 所给时段须落在**场景分析时段之内**。
- 各可见区间按该时段**截断**：某个可见区间跨出时段边界时，报告中该区间的开始历元或结束历元取时段边界值。
- 时段内无可见区间、或两个历元相同时，报告正文为「无分析数据！」，命令**不**返回 NACK。
- 时段参数块可整块省略。省略时不限定时段，报告覆盖整个场景分析时段，与给出 UseObjectTimes 时所得结果相同。

**报告所用时段由本命令的时段参数块决定，与先前 Access 命令所用的时段无关。** 例如场景分析时段为 00:00—06:00，先以 00:00—03:00（其内无可见区间）计算访问，得到「无分析数据！」；其后不带时段执行本命令，返回的仍是覆盖整个场景分析时段、含各可见区间的完整报告。

### 报告样式

`<ReportStyle>` 取值如下。样式名不区分大小写，`Access`、`access`、`aCcEsS` 等价，写法上一般用双引号括起。

| 报告样式 | 报告标题 |
| --- | --- |
| Access | 可见性报告 |
| AER | 视线参数报告 |
| AER Rate | 视线参数变化率报告 |
| UnAccessible | 不可见报告 |
| UnAccessible AER | 不可见视线参数报告 |
| Access Summary | 可见性统计报告 |
| AER Summary | 视线参数统计报告 |
| UnAccessible Summary | 不可见统计报告 |
| Range Rate | 距离变化率报告 |

样式名写成上表之外的其他内容时，命令**不返回 NACK**，而是返回一行文本，形如：

```
/Scenario/Demo/Satellite/Satellite1 No Coverage Report
```

其中前段为 `<ObjectPath>` 所指对象的完整路径，末尾固定为 No Coverage Report。样式名拼写有误时，须据此辨认。

## 输出

Access_RM **有返回值**，返回的是报告文本本身。

报告首行为标题，格式为「第一个对象名对第二个对象名的〈报告标题〉」，报告标题见上表，对象名为其路径中的最后一段；其下另起一行重复该对象对，并给出分隔线。其后各类样式的正文构成如下。

| 报告样式 | 正文 |
| --- | --- |
| Access、UnAccessible | 区间表，列为序号、开始历元(UTCG)、结束历元(UTCG)、时长(s)；随后给出全局统计结果 |
| Access Summary、UnAccessible Summary | 不含区间表，只给出全局统计结果；统计块中以「最小」「最大」两行给出对应区间的起止历元与时长 |
| AER、UnAccessible AER | 逐点列出时间(UTCG)、相对时间(s)、方位角(deg)、俯仰角(deg)、距离(m)；每个区间之后给出该区间俯仰角与距离的极值、均值，最后给出全局统计结果 |
| AER Rate | 逐点列出方位角变化率(deg/s)、俯仰角变化率(deg/s)、距离变化率(m/s)、角变化率(deg/s)，并给出极值、均值与全局统计结果 |
| Range Rate | 逐点列出时间、相对时间与距离变化率(m/s)，并给出极值、均值与全局统计结果 |
| AER Summary | 不含逐点表，只给出俯仰角与距离的极值、均值与全局统计结果 |

以 Access 样式为例：

```
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

上例返回的报告如下：

```
Satellite1对Facility1的可见性报告
Satellite1对Facility1
----------------------
                               序号             开始历元(UTCG)             结束历元(UTCG)       时长(s)
                         ----------    -----------------------    -----------------------    ----------
                                  1    2025-03-05 03:22:18.387    2025-03-05 03:31:53.562       575.175
                                  2    2025-03-05 04:56:06.578    2025-03-05 05:09:08.946       782.368
全局统计结果
------------------
    最小可见时长(s)               1    2025-03-05 03:22:18.387    2025-03-05 03:31:53.562       575.175
    最大可见时长(s)               2    2025-03-05 04:56:06.578    2025-03-05 05:09:08.946       782.368
    平均可见时长(s)                                                                             678.772
    平均不可见时长(s)                                                                          6747.486
    总可见时长(s)                                                                              1357.543
```

时段内无可见区间、或两个历元相同时，报告正文为「无分析数据！」，既无区间表也无统计结果：

```
Satellite1对Facility1的可见性报告
Satellite1对Facility1
----------------------
无分析数据！
```

**该情形下命令不返回 NACK**，结果仅在报告正文中体现。

## 关于当前访问

**「当前访问」全局唯一，指的是场景中最近一次由 [Access](./Access.md) 成功计算出的那一对对象。** 本命令的 `<ObjectPath>` 须与该对中的第一个对象一致。

- 一对对象计算完成之后，以其第一个对象为 `<ObjectPath>` 可反复读取，结果稳定。
- **一旦计算了另一对对象，先前那一对即不再是「当前访问」**：此时以先前的对象为 `<ObjectPath>` 读取会返回 NACK，即使该对象及其访问对象仍存在于场景中。以新的一对中第一个对象读取，则正常返回。
- **重新计算原来那一对，它又会成为「当前访问」**，可再次读取。
- **读取失败不会改变「当前访问」**：某次读取返回 NACK 之后，以正确的对象路径重试仍然有效。

因此，**应先执行 Access 计算，紧接着执行本命令读取报告**，两条命令之间不要插入其他访问计算；若场景中算过多对对象，须重新计算目标那一对再读取。

## 补充说明

- **本命令不改变场景内容。** 执行前后场景中的对象清单一致，既不新增访问对象，也不改动原有访问。
- **本命令一次只读取一对对象的报告。** 若需一次为多对对象生成报告，改用 AccessMulti 系列命令，参见 [AccessMulti Access](./AccessMulti%20Access.md)。
- **本命令与 Access 的分工**：[Access](./Access.md) 固定输出可见性报告；需要 AER、参数变化率、不可见报告、统计摘要等其余样式时，用本命令。

## 示例

::: details open **建立场景、计算访问并读取可见性报告**

须先建好场景与对象，执行 Reset 生成星历，再计算访问：

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
New / */Satellite Satellite1
SetState */Satellite/Satellite1 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7000000.0 0.001 98.0 0.0 0.0 0.0
New / */Satellite Satellite2
SetState */Satellite/Satellite2 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7100000.0 0.001 98.0 0.0 0.0 0.0
New / */Facility Facility1
SetPosition */Facility/Facility1 Geodetic 40.0 116.0 0.0
Animate * Reset
Access */Satellite/Satellite1 */Facility/Facility1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

上方示例中的时间步与轨道参数仅为示意，实际使用时应按场景设定。

:::

::: details open **省略时段参数块**

不给出时段，报告覆盖整个场景分析时段：

```
Access_RM */Satellite/Satellite1 Access Compute "Access"
```

也可写成 `Access_RM */Satellite/Satellite1 Access Compute "Access" UseObjectTimes`，两者所得结果相同。

:::

::: details open **读取视线参数（AER）报告**

须先按上例计算访问，再读取报告：

```
Access_RM */Satellite/Satellite1 Access Compute "AER" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

:::

::: details open **读取不可见统计报告**

```
Access_RM */Satellite/Satellite1 Access Compute "UnAccessible Summary" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

:::

::: details open **时段内无可见区间**

```
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 03:00:00.000"
```

报告正文为「无分析数据！」。

:::

::: details open **返回 NACK 的常见写法**

```
Access_RM */Facility/Facility1 Access Compute "Access"
Access_RM */Satellite/Satellite1 Access Compute "Access" TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000"
Access_RM */Satellite/Satellite1 Compute "Access"
```

四条命令依次对应：以当前访问的**第二个对象**为对象路径、**不接受 TimePeriod 关键字**、只给出一个历元、缺少 Access 关键字。

:::
