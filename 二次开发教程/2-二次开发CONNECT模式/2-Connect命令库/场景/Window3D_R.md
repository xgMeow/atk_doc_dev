# Window3D_R

## 作用

返回三维窗口信息

## 语法

```
Window3D_R <ScenarioPath> {WindowOption} [WindowID <WinNumber>]
```

## 参数说明

| `{WindowOption}` | 说明 |
|------|------|
| `Size` | 返回三维窗口的大小(包括边框) |
| `InnerSize` | 返回三维窗口的大小(不包括边框) |

## 示例

::: details open **获取三维窗口内部大小**

```
Window3d_R * InnerSize
```

:::
