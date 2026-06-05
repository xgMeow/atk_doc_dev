# Exec_Report_RM

## 作用

获得指定报告类型的数据。

## 用法

```
Exec_Report_RM <ObjectPath> ({Option} <Value>)...
```

## 说明

- **Style `<ReportStyleName>`**  
  要创建的报告样式的名称。名称必须与已存在的报告名称保持一致。

- **TimePeriod `{TimeInterval}`**  
  输入开始时间和结束时间。设置格式请查看“常用设置格式–常用日期/时间格式”。

- **TimeStep `<Value>`**  
  输入步长，用于创建报告。

- **AccessObject `<AccessObjectPath>`**  
  指定要计算的对象（暂无实现）。

- **AdditionalData `<Data>`**  
  一些报告需要额外的数据。

- **Summary `{ Include | Only }`**  
  此类型不一定包含输出报告。使用此选项时，配合 `Type` 的 `Export` 选项，将把摘要数据包含在导出的报告文件中（此类型只用于 `Type` 的 `Export` 选项）。

- **AllLines `{ On | Off }`**  
  输入此选项将返回一份报告，其中包括命令中指定的报表样式的所有标题、空格、选项卡和空白行（暂无实现）。

## 举例

```
Exec_Report_RM */Satellite/Satellite1 Style "Position" TimePeriod "2023-07-29 09:19:01.000" "2023-07-29 10:09:38.000"
```