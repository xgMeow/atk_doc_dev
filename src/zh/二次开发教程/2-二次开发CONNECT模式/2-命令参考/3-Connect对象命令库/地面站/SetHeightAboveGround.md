# SetHeightAboveGround

## 作用

设置地面站的离地高度。

本命令仅作用于 **Facility（地面站）**。

## 语法

```atk-command
SetHeightAboveGround <FacilityPath> <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<FacilityPath>` | 地面站对象路径。 |
| `<Value>` | 离地高度，取值单位参见[单位格式](../../2-参数值格式/单位格式.md)。 |

## 示例

::: details open **设置地面站离地高度**

```
atkConnect(conID,'SetHeightAboveGround','*/Facility/Facility1 17.0')
```

- `'SetHeightAboveGround'`：命令名
- `'*/Facility/Facility1 17.0'`：把当前场景下的地面站 `Facility1` 的离地高度设为 `17.0`

:::

::: tip 相关参考

- [UseTerrain](UseTerrain.md)：开启或关闭地面站的地形高度

:::
