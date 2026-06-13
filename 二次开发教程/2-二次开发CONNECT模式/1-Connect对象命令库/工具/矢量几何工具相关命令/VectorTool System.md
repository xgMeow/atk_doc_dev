# VectorTool System

## 作用

定义和修改 `System` 组件。

## 语法

```
VectorTool <ScenarioPath> <ParentObject> {Action} System <SystemName> [{SystemType} <SystemTypeParams>]
```

## 参数说明

| `{Action}` | Parameters | 说明 |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{SystemType} [<SystemTypeParams>]` | `<SystemTypeParams>` 是可选的，详细参数请看下表。若未指定 `<SystemTypeParams>`，则使用默认值。 |
| Modify | `{SystemType} [<SystemTypeParams>]` | `<SystemName> {SystemType}` 必须定义一个现有的角度组件。`{SystemType}` 不可修改。`<SystemTypeParams>` 为必填项。 |
| Delete | | 删除 `<SystemName>` 定义的角度组件。 |

| `{SystemType}` | `<SystemTypeParams>` |
| ------------------------------------- | ------------------  |
| "Assembled" | |
| "Launch" | `"<ReferencePoint>" <CentralBodyName> <AngleValue>` |
| "LaunchInertial" | `"<ReferencePoint>" <CentralBodyName> <AngleValue> <Epoch>` |
| "Topocentric" | `"<ReferencePoint>" <CentralBodyName>` |

## 示例

::: details open **创建 System 组件**
```
VectorTool * Satellite/Satellite1 Create System SatSystem1 "LaunchInertial"
```
:::

::: details open **修改 System 组件**
```
VectorTool * Satellite/Satellite1 Modify System SatSystem1 "LaunchInertial" "CentralBody/Earth ICRF.Origin" Moon 30 "26 Mar 2026 00:00:00.000"
```
:::

::: details open **删除 System 组件**
```
VectorTool * Satellite/Satellite1 Delete System SatSystem1 
```
:::
