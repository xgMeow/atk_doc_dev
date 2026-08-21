# Exec_ReportCreate

## 作用

创建报告

## 语法

```atk-command
Exec_ReportCreate <ObjectPath> ({Option} <Value>)...
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Style "<ReportStyleName>"` | 要创建的报告样式的名称，名称必须与已存在的报告名称保持一致 |
| `Type {Display \| Save \| Export}` | 要创建的报告类型，输入 `Display` 来显示详细报告；输入 `Save` 把报告保存到文本中；输入 `Export` 把报告保存到文本中。暂无实现 |
| `File "<FilePath>"` | 输入要创建的文件的名称，`Type` 被要求输入 `Save` 或 `Export` |
| `TimePeriod {TimeInterval}` | 输入开始时间和结束时间，设置格式请查看[常用日期/时间格式](../../2-参数值格式/日期时间格式.md) |
| `TimeStep {<Value>}` | 输入步长用于创建报告 |
| `AccessObject <AccessObjectPath>` | 指定要计算的对象（暂无实现） |
| `AdditionalData "<Data>"` | 一些报告需要额外的数据 |
| `Summary {Include \| Only}` | 此类型不一定包含输出报告，使用此选项，使用 `Type` 的 `Export` 选项，将包含在导出报告文件中的摘要数据（此类型只用于 `Type` 的 `Export` 选项） |

## 示例

::: details open **创建位置报告并保存到文件**

```
Exec_ReportCreate */Satellite/Satellite1 Style "Position" File "linshi.rsf" TimePeriod "2023-07-29 09:19:01.000" "2023-07-29 10:09:38.000"
```

:::
