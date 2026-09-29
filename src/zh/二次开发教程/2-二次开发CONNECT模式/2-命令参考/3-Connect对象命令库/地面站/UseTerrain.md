# UseTerrain

## 作用

开启或关闭地面站的地形高度。

本命令仅作用于 **Facility（地面站）**。

## 语法

```atk-command
UseTerrain <FacilityPath> {On|Off}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<FacilityPath>` | 地面站对象路径。 |
| `{On\|Off}` | `On`：开启地形高度；`Off`：关闭地形高度。 |

## 示例

::: details open **开启地面站地形高度**

```
atkConnect(conID,'UseTerrain','*/Facility/Facility1 On')
```

- `'UseTerrain'`：命令名
- `'*/Facility/Facility1 On'`：对当前场景下的地面站 `Facility1` **开启**地形高度

:::
