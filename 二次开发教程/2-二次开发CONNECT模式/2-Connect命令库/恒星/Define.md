# Define

作用：设置恒星类型及其参数

::: note 用法
```
Define <StarObjectPath> {StarOption} <Parameters>
```
:::

::: info 说明

| `{StarOption}` | `<Parameters>`             |
| ------------ | --------------------------   |
| Position     | `<RightAscen> <Declination>` |
| Motion       | `<RightAscen> <Declination>` |
| Magnitude    | `<Magnitude>`                |
| Parallax     | `<Parallax>`                 |

:::

::: tip 举例
```
Define */Star/Star1 Position 20.0 48.0
```
:::
