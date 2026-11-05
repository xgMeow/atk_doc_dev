---
groups: [场景]
---

# Units_Set

## 作用

设置用户界面、Connect 及报告所使用的单位

## 语法

```atk-command
Units_Set <ScenarioPath> {Option} <Parameters>
```

## 补充说明

`{Option}` 指定要设置哪一类单位，`<Parameters>` 指定具体的单位设置。

各 `{Option}` 的 `<Parameters>` 写法相同，均为 `{Internal | {Dimension} {Unit}... }`：既可只写关键字 `Internal`，也可写一组或多组 `{Dimension} {Unit}`。其中 `{Dimension} {Unit}` 的取值范围参见[单位格式](../../2-参数值格式/单位格式.md)。

`{Option}` 的可取值为：

| `{Option}` | 说明 |
|------|------|
| `GUI` | 设置通过图形界面输入数据时使用的单位 |
| `Report` | 设置通过图形界面生成和显示报告时使用的单位 |
| `Connect` | 设置发送 Connect 命令时取值的单位 |
| `ConnectReport` | 设置当前 Connect 会话中生成和显示报告时使用的单位 |
| `All` | 同时为 Connect、GUI、Report、ConnectReport 设置指定的单位 |

注意事项：

- 四类单位互相独立，各自保存、各自生效：修改一类不影响其余三类。
- `Connect` 单位按量纲设置，命令中各参数按其所属量纲取所设置的单位，如角度值按 `Angle` 单位输入、距离值按 `Distance` 单位输入；未设置过的量纲取该量纲的缺省单位。可设置的量纲见[单位格式](../../2-参数值格式/单位格式.md)中的对照表；速度、加速度、角速度、面积由距离、时间、角度组合推导，不单独设置。
- 本命令可作用于 GUI、Report 等多类单位；若只需设置 Connect 单位，可使用 [Units_SetConnect](./Units_SetConnect.md)。

## 示例

::: details open **设置图形界面的距离单位**

```
Units_Set * GUI Distance km
```

- `*`：场景路径，代表当前场景
- `GUI`：要设置的单位模块，此处为界面单位设置
- `Distance`：量纲，表示距离
- `km`：距离单位，千米

:::

::: details open **设置 Connect 命令的日期单位**

```
Units_Set * Connect Date BJT
```

- `*`：场景路径，代表当前场景
- `Connect`：要设置的单位类别，此处为 Connect 命令输入
- `Date`：量纲，表示日期
- `BJT`：日期单位，北京时

:::

::: details open **同时设置所有类别的距离单位**

```
Units_Set * All Distance km
```

- `*`：场景路径，代表当前场景
- `All`：同时作用于 Connect、GUI、Report、ConnectReport
- `Distance`：量纲，表示距离
- `km`：距离单位，千米

:::
