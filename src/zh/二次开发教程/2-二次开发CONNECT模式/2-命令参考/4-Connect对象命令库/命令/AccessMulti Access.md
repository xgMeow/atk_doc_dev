---
groups: [可见性分析]
---

# AccessMulti Access

## 作用

为 AccessMulti 已配置的多组对象**批量计算可见性**。

本命令一次处理当前配置中的每一组「目标对象与来源对象」组合，每组组合在场景中生成一个访问（Access）对象，详见下文「关于场景中生成的访问对象」。

**本命令不返回报告。** 计算结果体现为场景中生成的访问对象，须用 [Access_RM](./Access_RM%20Access.md) 另行读取。

## 前置条件

- **参与计算的对象须已存在**，须先用 [New](./New.md) 创建（如卫星、地面站）。对象路径指向不存在的对象时，命令返回 NACK。

- **须先完成配置。** 先用 AccessMulti / Objects 指定目标对象，再用 AccessMulti / Assets 指定来源对象。未指定目标对象即执行 AccessMulti / Assets，或未指定来源对象即执行本命令，均返回 NACK。

  两条配置命令的用法参见 [AccessMulti Objects](./AccessMulti%20Objects.md) 与 [AccessMulti Assets](./AccessMulti%20Assets.md)。

- **每个目标对象都须已分配来源对象。** 当前目标列表中若有任一目标尚未分配来源，本命令返回 NACK；此时须重新执行 AccessMulti / Assets，为当前目标列表分配来源。

- **来源对象须在场景中首次执行 AccessMulti 系列命令之前创建。** 此后新建的卫星单独作为来源对象给出时，AccessMulti / Assets 返回 NACK。

- 参与计算的卫星等对象须已生成星历数据，故须先执行 [Animate](./Animate.md) 的 Reset：

    ```
    Animate * Reset
    ```

    未执行 Reset 即发送本命令，命令照常返回 ACK 并生成访问对象，但读取结果时报告正文为「无分析数据！」。

## 语法

```atk-command
AccessMulti / Access Compute {<StartTime> <StopTime> | UseObjectTimes}
```

## 语法说明

本命令由三部分构成：命令名 AccessMulti、**子命令 / Access Compute**、**一个时段参数块**。

| 部分 | 含义 |
| --- | --- |
| AccessMulti | 命令名。 |
| / Access Compute | 子命令。斜杠与斜杠后的三个单词均为子命令的组成部分。 |
| 时段参数块 | 指定计算所用时段，为两个日期时间，或 UseObjectTimes，详见下文「时段参数块」。 |

**命令名与子命令之间的斜杠不可省略。** 写成 AccessMulti Access Compute 时，命令返回 NACK。

命令名、子命令中的单词与关键字均**不区分大小写**，参见[命令语法约定](../../1-命令语法约定.md)。写成 AccessMulti / access compute 与写成全大写的 AccessMulti / ACCESS COMPUTE 同样可行。

## 时段参数块

以下两种写法二选一。

**两个日期时间。** 依次给出**开始历元**与**结束历元**，格式参见[日期时间格式](../../2-参数值格式/日期时间格式.md)。两个日期时间均须用双引号括起；未加引号，或只给出其中一个，或内容无法解析为合法日期时间，命令均返回 NACK。

**UseObjectTimes。** 不给出具体日期时间，改用参与计算的对象自身时段。

- **两个历元的先后顺序不可颠倒**，须按开始历元在前、结束历元在后的次序给出。
- **本命令不接受 TimePeriod 关键字。** 在 Access Compute 之后误写 TimePeriod 关键字会返回 NACK；直接依次给出两个日期时间即可。Access 命令的时段须冠以 TimePeriod 关键字，两者写法不同，不可套用。
- 时段参数块**只识别 UseObjectTimes 这一个词**。写成其他任何内容，包括漏写末尾 s 的 UseObjectTime，均返回 NACK。
- **在时段参数块之后多写日期时间不会报错。** 依次给出三个及以上日期时间时，命令仍按前两个历元处理；UseObjectTimes 之后多写日期时间同样被忽略。

**计算所用时段不随访问对象保存。** 访问对象只记录对象对本身，读取结果时的时段由读取命令的时段参数块决定，与本命令所用时段无关，参见 [Access_RM](./Access_RM%20Access.md) 的「时段参数块」。

## 输出

**本命令无返回值。** 命令被接受时 CONNECT 返回空响应，不返回任何报告文本；命令被拒绝时返回 NACK。

计算结果体现为场景中生成的访问对象。须用 [Access_RM](./Access_RM%20Access.md) 读取，读取时以**目标对象**的路径为参数：

```
Access_RM */Facility/Facility1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

以来源对象的路径读取时返回 NACK。

## 关于场景中生成的访问对象

**每一组目标对象与来源对象的组合，都会在场景中生成一个访问（Access）对象**，位于对象树的 ObjectAccess 之下，名称由该对对象的两个指针构成，形如 Access - 1975871500528, 1976206728096。

- **一次计算处理当前配置中的全部组合。** 目标列表与来源列表各有多个时，组合数为两者数目之积：2 个目标对象与 2 个来源对象共生成 4 个访问对象。
- **同一组对象重复计算不会重复新增**，已有对象直接沿用。
- **已有访问对象不因再次计算而删除。** 变更配置后重新计算，只会为尚未计算过的组合新增对象，先前生成的组合一并保留。
- 访问对象随场景一并卸载。

## 补充说明

- **本命令与 Access 的分工**：[Access](./Access.md) 一次计算一对对象并直接返回可见性报告；本命令批量计算多组对象对，不返回报告，结果须另行读取。
- **本命令按发送前最后一次配置计算。** 目标列表与来源列表都由各自的配置命令整体替换，重复配置不会追加。
- 目标对象与来源对象的选取限制，参见 [AccessMulti Objects](./AccessMulti%20Objects.md) 与 [AccessMulti Assets](./AccessMulti%20Assets.md)。

## 示例

::: details open **批量计算两个地面站与两颗卫星之间的可见性**

须先建好场景与对象，执行 Reset 生成星历，再配置目标与来源，最后计算：

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
New / */Satellite Satellite1
SetState */Satellite/Satellite1 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7000000.0 0.001 98.0 0.0 0.0 0.0
New / */Satellite Satellite2
SetState */Satellite/Satellite2 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7200000.0 0.001 53.0 0.0 0.0 0.0
New / */Facility Facility1
SetPosition */Facility/Facility1 Geodetic 0.0 0.0 0.0
New / */Facility Facility2
SetPosition */Facility/Facility2 Geodetic 40.0 116.0 0.0
Animate * Reset
AccessMulti / Objects */Facility/Facility1 */Facility/Facility2
AccessMulti / Assets */Satellite/Satellite1 */Satellite/Satellite2
AccessMulti / Access Compute "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

最后一条命令为 2 个目标对象与 2 个来源对象的四个组合各生成一个访问对象。随后以目标对象的路径读取结果：

```
Access_RM */Facility/Facility1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

上方示例中的时间步与轨道参数仅为示意，实际使用时应按场景设定。

:::

::: details open **采用对象自身时段**

```
AccessMulti / Access Compute UseObjectTimes
```

:::

::: details open **返回 NACK 的常见写法**

```
AccessMulti Access Compute "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
AccessMulti / Access Compute
AccessMulti / Access Compute TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
AccessMulti / Access Compute "5 Mar 2025 00:00:00.000"
AccessMulti / Access Compute 5 Mar 2025 00:00:00.000
```

五条命令依次对应：缺少命令名与子命令之间的斜杠、省略时段参数块、误用 TimePeriod 关键字、只给出一个日期时间、日期时间未加双引号。

:::
