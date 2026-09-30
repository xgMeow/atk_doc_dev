# VO ArticulationFile

## 作用

加载外部关节定义文件，为对象三维模型指定关节所用的关节文件。

适用于卫星、地面站、飞机、船、车辆、导弹、火箭共 7 类对象。

## 语法

```atk-command
VO <ObjectPath> ArticulationFile <Options>
```

## 参数说明

`<Options>` 可取下列选项：

| 选项 | 取值 | 说明 |
|------|------|------|
| `EnableArticFile` | `{Yes \| No}` | 启用或禁用从外部文件加载关节。设为 `No` 会清除当前已加载的全部关节 |
| `FilePath` | `"<FilePath>"` | 关节文件的绝对路径 |

关于 `FilePath` 指定的文件：

- 合法关节文件的扩展名为「**对象自身的扩展名 + `ma`**」。例如卫星对象的扩展名是 `sa`，其关节文件的扩展名即 `.sama`；地面站为 `.fma`，其余对象依此类推。
- `"<FilePath>"` 可以指向本地磁盘上的文件，也可以指向 SDF 服务器上的文件。
- `"<FilePath>"` 为字符串字面量，输入时**须保留双引号**，如 `"C:\MyScenario\SatArtic.sama"`。

::: warning 注意
`EnableArticFile` 的 Yes/No 开关功能**尚未完善**。
:::

## 示例

::: details open **为卫星启用并设置关节文件**

```
VO */Satellite/Shuttle ArticulationFile EnableArticFile Yes FilePath "C:\MyScenario\SatArtic.sama"
```

- `EnableArticFile Yes`：启用从外部文件加载关节
- `FilePath "C:\MyScenario\SatArtic.sama"`：关节文件的绝对路径；`.sama` 是卫星对象的关节文件扩展名（对象扩展名 `sa` 之后接 `ma`）

:::
