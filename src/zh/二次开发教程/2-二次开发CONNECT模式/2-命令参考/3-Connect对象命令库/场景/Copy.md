# Copy

## 作用

拷贝并粘贴对象。

## 语法

```atk-command
Copy <ApplicationPath> <CopyFromObjectPath> [{CopyOption}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ApplicationPath>` | 目标应用路径 |
| `<CopyFromObjectPath>` | 源对象路径 |
| `{CopyOption}` | 可选参数，指定拷贝后的命名方式 |

### {CopyOption} 取值

| `{CopyOption}` | 说明 |
|----|------|
| `Name <NewName>` | 拷贝后使用新名称 |
| `Path <NewObjectPath>` | 拷贝后使用新路径 |

## 示例

::: details open **将 `/Satellite/Satellite1` 对象拷贝到 `/` 应用下，并重命名为 `Sat2`**

```
Copy / Satellite/Satellite1 Name Sat2
```

:::