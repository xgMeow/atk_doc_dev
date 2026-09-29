# VO Articulate

## 作用

驱动对象三维模型上的某个关节做一次运动，关节的起止值在命令中直接给出。

适用于卫星、地面站、飞机、船、车辆、导弹、火箭共 7 类对象。`<ObjectPath>` 所指向的对象，其模型须**含有关节部件**。

只要场景和所需模型已加载，本命令可在任意时刻下达；关节运动实际发生在 `"<StartTime>"` 与 `<Duration>` 所描述的时段内。

与 `VO AddArticulation` 相比：后者用于**定义**一个关节动作（可设定周期、加速/减速曲线等），本命令参数更少，用于按已知起止值**直接驱动**一次关节运动。

## 语法

```atk-command
VO <ObjectPath> Articulate "<StartTime>" <Duration> <ArticName> <TransformationName> <BeginningArticValue> <EndArticValue>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，其所属模型须含有关节部件，如 `*/Satellite/Satellite1` |
| `"<StartTime>"` | 关节运动的起始时刻，**按当前 Connect 日期格式填写**，默认 UTCG，格式参见 [日期时间格式](../../../2-参数值格式/日期时间格式.md)；字符串内部含空格，须用双引号括起来 |
| `<Duration>` | 关节运动持续的秒数，**始终按秒解释** |
| `<ArticName>` | 被移动的具体关节部件名称 |
| `<TransformationName>` | 该关节的旋转轴名称 |
| `<BeginningArticValue>` | 关节运动范围的起始值 |
| `<EndArticValue>` | 关节运动范围的结束值 |

::: warning 注意
- `<ArticName>`、`<TransformationName>`、`<BeginningArticValue>`、`<EndArticValue>` 四项的取值**取决于具体模型**，须与模型文件中实际定义的关节名、旋转轴名及其取值范围一致。
:::

## 示例

::: details open **驱动卫星模型上的关节运动**

```
VO */Satellite/Satellite1 Articulate "1 Nov 2000 22:00:00.00" 30 Cargo Rotate 0 -160
```

- `"1 Nov 2000 22:00:00.00"`：关节运动的起始时刻，按当前 Connect 日期格式填写，默认 UTCG；字符串内部含空格，须用双引号括起来
- `30`：关节运动持续 30 秒
- `Cargo`：被移动的关节部件名
- `Rotate`：该关节的旋转轴名
- `0 -160`：关节运动范围的起止值，依次对应 `BeginningArticValue`、`EndArticValue`；上例表示把该关节从 `0` 转到 `-160`

:::
