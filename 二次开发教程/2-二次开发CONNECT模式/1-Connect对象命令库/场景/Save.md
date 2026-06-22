# Save

## 作用

保存场景或对象

## 语法

```atk-command
Save <ApplicationPath> <ObjectPath> ["<SaveInDirectory>"]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 目前为默认值 `*`，为当前场景路径 |
| `<SaveInDirectory>` | 设置保存路径，当前场景会保存到此路径下，需要输入保存文件名 |

## 示例

::: details open **保存当前场景**

```
Save / *
```

:::
