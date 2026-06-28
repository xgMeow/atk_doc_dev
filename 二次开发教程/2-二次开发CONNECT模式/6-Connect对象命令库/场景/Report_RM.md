# Report_RM

## 作用

获得指定报告类型的数据(包括覆盖定义对象)

## 语法

```atk-command
Report_RM <ObjectPath> ({Option} <Value>)...
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Style "<ReportStyleName>"` | 要获取的报告样式的名称，名称必须与已存在的报告名称保持一致 |
| `TimePeriod {TimeInterval}` | 输入开始时间和结束时间，设置格式请查看常用设置格式–常用日期/时间格式 |
| `TimeStep {<Value>}` | 输入步长用于创建报告 |
| `AccessObject <AccessObjectPath>` | 指定要计算的对象（覆盖定义对象不包括此属性） |
| `AdditionalData "<Data>"` | 一些报告需要额外的数据（覆盖定义对象不包括此属性） |

## 报告类型说明

1. 对象数据报告类型请查看安装包目录下 `.\AstroData\ReportStyle` 文件夹，文件名称即为报告名称
2. 支持可见性报告：`Access`-可见性报告，`AER`-可见 AER 报告，`AER Rate`-可见性参数变化率报告，`UnAccessible`-不可见报告，`UnAccessible AER`-不可见 AER 报告，`Access Summary`-可见性统计报告，`AER Aummary`-可见 AER 统计报告，`UnAccessible Summary`-不可见统计报告，`Range Rate`-可见性距离变化率报告
3. 支持区域覆盖报告：`Access Duration`-可见时段报告，`Gap Duration`-不可见时段报告，`Global Coverage`-整体覆盖报告，`Gaps in Global Coverage`-整体未覆盖报告，`Grid Point Information aer`-网格点信息报告，`Grid Point Visible Assets`-网格点可见对象报告，`Percent Coverage`-覆盖百分比报告，`Coverage By Assets`-对象覆盖报告，`Coverage By Latitude`-纬度覆盖报告，`Grid Stats Over Time`-网格状态报告，`Grid Stats`-网格状态报告，`Percent Satisfied`-有效百分比报告，`Satisfied by Time`-有效值报告，`Value By Grid Point At Time`-网格点品质参数报告，`Value By Grid Point`-网格点品质参数报告，`Value By Latitude`-纬度品质参数报告，`Value By Longitude`-经度品质参数报告

## 示例

::: details open **获取卫星位置报告**

```
Report_RM */Satellite/Satellite1 Style "Position" TimePeriod "2023-07-29 09:19:01.000" "2023-07-29 10:09:38.000"
```

:::

::: details open **获取覆盖定义的访问时长报告**

```
Report_RM */CoverageDefinition/CoverageDefinition1 Style "Access Duration"  TimePeriod "9 Apr 2025 04:00:00.000" "10 Apr 2025 04:00:00.000"
```

:::
