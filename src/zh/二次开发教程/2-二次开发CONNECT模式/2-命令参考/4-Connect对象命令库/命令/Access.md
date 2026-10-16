---
groups: [可见性分析]
---

# Access

## 作用

计算两个对象之间的可见性，并将结果以**可见性报告**的形式返回。

命令不改变参与计算的对象参数，但每计算一对对象，都会在场景中生成一个访问对象，详见下文「关于场景中生成的访问对象」。

## 前置条件

- **参与计算的两个对象须已存在**，须先用 [New](./New.md) 创建（如卫星、地面站）。对象路径指向不存在的对象时，命令返回 NACK。

- **两个对象须互不相同。** 以同一个对象充当两个参数时，命令返回 NACK。

- 参与计算的卫星等对象须已生成星历数据，故须先执行 [Animate](./Animate.md) 的 Reset：

    ```
    Animate * Reset
    ```

    新建对象之后其星历数据尚未生成。未执行 Reset 即发送本命令，报告正文只有「无分析数据！」。详见 [Animate](./Animate.md) 的「关于 Reset」一节。

## 语法

```atk-command
Access <ObjectPath> <AccessObjectPath> {TimePeriod <StartTime> <StopTime> | UseObjectTimes}
```

## 语法说明

本命令由三部分构成：命令名 Access、**两个对象路径**、**一个时段参数块**。

| 部分 | 含义 |
| --- | --- |
| Access | 命令名。 |
| `<ObjectPath>` | 参与计算的第一个对象路径。 |
| `<AccessObjectPath>` | 参与计算的第二个对象路径。 |
| 时段参数块 | 指定计算所用时段，须二选一：`TimePeriod <StartTime> <StopTime>` 或 UseObjectTimes，详见下文「时段参数块」。 |

**两个对象路径的先后顺序有意义。** 报告中以第一个对象为起点、第二个对象为终点；调换顺序后，报告的标题与各项数值随之改变。

**时段参数块不可省略。** 只写命令名与两个对象路径时，命令返回 NACK。

对象路径按[命令语法约定](../../1-命令语法约定.md)的常规写法填写：第一组路径写完整路径，其后写截断路径，如 `*/Satellite/Satellite1 Satellite/Satellite2`；两者均写完整路径同样可行。对象类型与名称**区分大小写**，写成 `*/satellite/Satellite1` 返回 NACK。

语法中尖括号、花括号、竖线、双引号等符号的含义，参见[命令语法约定](../../1-命令语法约定.md)。

## 时段参数块

### TimePeriod

须依次给出**开始历元**与**结束历元**两个日期时间，格式参见[日期时间格式](../../2-参数值格式/日期时间格式.md)。两个日期时间均须用双引号括起；未加引号，或内容无法解析为合法日期时间，或只给出其中一个，命令均返回 NACK。

- **两个历元的先后顺序可颠倒**，颠倒后与正序所得结果相同。
- 计算在**场景分析时段之内**进行。所给时段超出场景分析时段时，超出部分不参与计算：例如场景分析时段为 00:00—06:00，写成 00:00—12:00 与写成 00:00—06:00 所得结果相同。
- 可见区间按所给时段**截断**。某个可见区间跨出所给时段的边界时，报告中该区间的开始历元或结束历元取时段边界值。
- 所给时段内出现多个可见区间时，报告中逐条列出，序号自 1 起递增。
- 两个历元相同时、或所给时段内两个对象始终不可见时，报告正文为「无分析数据！」。

### UseObjectTimes

不给出具体时段，改用参与计算的对象自身的时段。

**本命令只识别 TimePeriod 这一关键字。** 时段参数块中写成其他任何词时，命令均不报错，一律按「采用对象自身时段」处理：例如把 UseObjectTimes 误写为 UseObjectTime，命令照样返回结果。故关键字须自行保证书写正确。

## 输出

Access **有返回值**，返回的是可见性报告文本本身。报告由以下三部分组成：

1. **标题**，格式为「第一个对象名对第二个对象名的可见性报告」，对象名为其路径中的最后一段；其下另起一行重复该对象对，并给出分隔线。
2. **可见区间表**，列为序号、开始历元(UTCG)、结束历元(UTCG)、时长(s)。
3. **全局统计结果**，给出最小可见时长、最大可见时长、平均可见时长、平均不可见时长与总可见时长。

```
Access */Satellite/Satellite1 */Facility/Facility1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
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

所给时段内两个对象始终不可见时，报告正文为「无分析数据！」，既无可见区间表，也无统计结果：

```
Satellite1对Facility1的可见性报告
Satellite1对Facility1
----------------------
无分析数据！
```

**该情形下命令不返回 NACK**，结果仅在报告正文中体现。

## 关于场景中生成的访问对象

**每成功计算一对对象，场景中都会新增一个访问（Access）对象**，位于对象树的 ObjectAccess 之下，用以记录这一对对象之间的可见性关系。

- **同一对对象与书写顺序无关**：先后以 A、B 与 B、A 各计算一次，只生成一个访问对象，不会重复新增。
- **该对象无法用命令单独删除**：Delete、Remove、Unload、UnloadSubObj 等命令作用于它时均返回 NACK。它会随场景一并卸载，即执行 `Unload / *` 移除场景时一并消失。

## 补充说明

- **本命令的输出固定为可见性报告。** 若需 AER、参数变化率、不可见报告、统计摘要等其他格式，改用 [Access_RM](./Access_RM%20Access.md)。
- **本命令一次只计算一对对象。** 若需批量处理多对对象，改用 AccessMulti 系列命令（先配置来源与目标，再统一计算），参见 [AccessMulti Access](./AccessMulti%20Access.md)。

## 示例

::: details open **建立场景并计算卫星与地面站之间的可见性**

须先建好场景与对象，并执行 Reset 生成星历：

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
```

上方示例中的时间步与轨道参数仅为示意，实际使用时应按场景设定。

:::

::: details open **计算两颗卫星之间的可见性**

```
Access */Satellite/Satellite1 */Satellite/Satellite2 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

:::

::: details open **采用对象自身时段**

```
Access */Satellite/Satellite1 */Facility/Facility1 UseObjectTimes
```

:::

::: details open **时段内无可见区间**

```
Access */Satellite/Satellite1 */Facility/Facility1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 01:00:00.000"
```

报告正文为「无分析数据！」。

:::

::: details open **返回 NACK 的常见写法**

```
Access */Satellite/Satellite1 */Satellite/Satellite2
Access */Satellite/Satellite1 */Satellite/Satellite1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Access */Satellite/Nope */Satellite/Satellite2 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

三条命令依次对应：省略时段参数块、两个参数指向同一对象、对象路径指向不存在的对象。

:::
