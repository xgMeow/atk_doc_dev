# VO PruneArtic

## 作用

控制系统在通过 Connect 接收关节数据时保留的数据量，即裁剪删除对象已记录的关节数据。

删除范围由 `{PruneOption}` 指定，可删除该对象的全部关节数据。

## 语法

```atk-command
VO <ObjectPath> PruneArtic {PruneOption}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 关节所属对象的完整路径，自场景 `*` 起写全，如 `*/Satellite/ERS1`；路径参数的写法参见[命令语法约定](../../../1-命令语法约定.md) |

`{PruneOption}` 目前只支持一个取值：

| 选项 | 说明 |
|------|------|
| `All` | 删除该对象的全部关节数据 |

## 示例

::: details open **删除 ERS1 卫星的全部关节数据**

```
VO */Satellite/ERS1 PruneArtic All
```

- `*/Satellite/ERS1`：关节所属卫星的完整路径
- `All`：删除该对象的全部关节数据

:::
