# GetEpoch

## 作用

获取当前场景的历元时间

## 语法

```atk-command
GetEpoch <ScenarioPath>
```

## 补充说明

- 仅在当前场景存在时返回历元信息：返回一条消息，给出当前场景的历元，按 Connect 日期格式输出。
- Connect 日期格式由单位设置命令控制：可用 `Units_Set` 的 `Connect` 类别设置 `Date` 量纲，如 `Units_Set * Connect Date BJT`；也可使用仅针对 Connect 单位的 [Units_SetConnect](Units_SetConnect.md)。
- 日期格式的可选值参见[常用单位格式](../../2-参数值格式/单位格式.md)中 `Date` 行。

## 示例

::: details open **查看当前场景历元**

```
GetEpoch *
```

- `*`：场景路径，代表当前场景

:::
