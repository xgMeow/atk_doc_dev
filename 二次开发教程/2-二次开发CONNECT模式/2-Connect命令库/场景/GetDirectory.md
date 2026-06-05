# GetDirectory

## 作用

返回所选目录的路径

## 语法

```
GetDirectory <ApplicationPath> {DirOption}
```

## 参数说明

| `{DirOption}` | 说明 |
|------|------|
| `DefaultUser` | 返回程序运行目录 |
| `UserData` | 返回当前用户数据目录 |
| `ATKHome` | 返回 ATK 运行文件夹 |
| `Config` | 返回用户的配置目录 |
| `Scenario` | 返回场景文件目录 |
| `AllUsers` | 返回包含所有用户的 ATK 应用程序数据的目录 |
| `Database {Satellite \| City \| Facility}` | 返回指定的数据目录 |

## 示例

::: details open **返回卫星数据库目录**

```
GetDirectory / Database Satellite
```

:::
