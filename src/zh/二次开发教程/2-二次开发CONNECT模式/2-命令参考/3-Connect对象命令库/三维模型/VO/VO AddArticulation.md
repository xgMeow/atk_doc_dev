# VO AddArticulation

## 作用

为对象三维模型上的可动部件添加关节动作定义。关节动作会对模型中的部件施加动态变换。

适用于卫星、地面站、飞机、船、车辆、导弹、火箭共 7 类对象。

只要场景和所需模型已加载，本命令可在任意时刻下达；关节动作实际发生在 `StartTime`（或 `StartTimeConUnit`）与 `Duration` 所描述的时段内。

## 语法

```atk-command
VO <ObjectPath> AddArticulation {ArticulateOptions}
```

## 参数说明

`{ArticulateOptions}` 由下列选项及其取值构成，可按需组合使用：

| 选项 | 取值 | 说明 |
|------|------|------|
| `ArticulationName` | `<Value>` | 本关节动作所要附加到的模型关节名称，字符串，最长 31 个字符 |
| `TransformationName` | `<Value>` | 要更新的变换名称，字符串，最长 31 个字符 |
| `StartTime` | `<Value>` | 关节动作的起始时刻，按**历元秒**计（EpSec，自场景参考历元起算的累计秒数） |
| `StartTimeConUnit` | `{TimeValue}` | 关节动作的起始时刻，按当前 Connect 日期格式填写，默认 UTCG，格式参见 [日期时间格式](../../../2-参数值格式/日期时间格式.md) |
| `Duration` | `<Value>` | 关节动作持续的秒数，须大于 `0.0` |
| `DeadBandDuration` | `<Value>` | 结束值在结束时刻**之前**多少秒到达，单位秒，须 ≥ `0.0` 且 ≤ `Period` |
| `AccelDuration` | `<Value>` | 非线性加速的系数，须 ≥ `0.0` |
| `DecelDuration` | `<Value>` | 非线性减速的系数，须 ≥ `0.0` |
| `DutyCycleDelta` | `<Value>` | 关节动作周期开始时刻相对起止时段的百分比偏移，须 ≥ `0.0` 且 ≤ `Duration` |
| `Period` | `<Value>` | 完成一个完整周期所需的秒数，须 ≥ `0.0` 且 ≤ `Duration` |
| `StartValue` | `<Value>` | 关节动作的起始值，须大于该关节的最小值且小于其最大值 |
| `AutoStartValue` | 无 | 替代 `StartValue` 使用：不指定起始值，关节从 `StartTime` 时刻的实际取值开始动作 |
| `EndValue` | `<Value>` | 关节动作的结束值，须大于该关节的最小值且小于其最大值 |
| `Force` | 无 | 强制应用本关节动作，覆盖与之重叠的其他关节动作 |

::: warning 注意
- `ArticulationName`、`TransformationName`、`Duration` 为**必填项**，缺少其中任一项或填写有误时，命令会执行失败（返回 Nack）。
- 除上述三项外的其余选项，未指定时均默认为 `0.0`。
- 使用 `AutoStartValue` 时若不写 `StartValue`，则关节从 `StartTime` 时刻的实际取值开始动作；但若同时使用了 `Period`，仍须给出 `StartValue`，用于确定该周期的完整运动范围。
- `ArticulationName`、`TransformationName` 取的是**模型文件中已定义**的关节名与变换名，须与模型实际内容一致。
:::

## 示例

::: details open **为卫星添加两个关节动作**

```
VO */Satellite/Satellite1 AddArticulation ArticulationName SlrPnl-1 TransformationName xrot StartTime 0 Duration 300 DeadBandDuration 0.0 AccelDuration 0 DecelDuration 0 DutyCycleDelta 0 Period 10 StartValue 10 EndValue 60
VO */Satellite/Satellite1 AddArticulation ArticulationName SlrPnl-1 TransformationName xrot StartTime 330 Duration 20 DeadBandDuration 11 StartValue 60 EndValue -30
```

- `ArticulationName SlrPnl-1`、`TransformationName xrot`：指定模型中已有的关节及其变换
- `StartTime 0`、`StartTime 330`：起始时刻，按历元秒给出，分别为第 0 秒与第 330 秒
- `Duration 300`、`Duration 20`：关节动作持续的秒数
- `Period 10`：每 10 秒完成一个完整周期
- `StartValue 10`、`EndValue 60`（第二条为 `StartValue 60`、`EndValue -30`）：关节动作的起始值与结束值
- `DeadBandDuration 11`：结束值在结束时刻前 11 秒到达
- 第二条命令未写出的选项（`AccelDuration`、`DecelDuration`、`DutyCycleDelta`、`Period`）均默认为 `0.0`

:::

::: details open **以 Connect 日期格式指定起始时刻**

```
VO */Satellite/Satellite1 AddArticulation ArticulationName SRB_Left TransformationName MoveX StartTimeConUnit "08 Jun 2007 23:40:08.018" Duration 250 StartValue 0 EndValue -1000
```

- `StartTimeConUnit "08 Jun 2007 23:40:08.018"`：起始时刻按当前 Connect 日期格式填写，默认 UTCG；字符串内部含空格，须用双引号括起来
- `Duration 250`：关节动作持续 250 秒
- `StartValue 0`、`EndValue -1000`：关节动作的起始值与结束值

:::
