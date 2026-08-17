# Window3D

## 作用

创建、移除三维窗口

## 语法

```atk-command
Window3D <ScenarioPath> {Window3dOptions}
```

## 参数说明

| `{Window3dOptions}` | 说明 |
|------|------|
| `CreateWindow {Normal \| Attitude} [Path <TruncObjectPath>] [Title "<WindowTitle>"]` | 使用默认设置打开一个三维窗口 |
| `Remove` | 移除一个三维窗口 |

## 示例

::: details open **创建三维窗口**

```
Window3D / CreateWindow Normal
```

:::
