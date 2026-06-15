# TLEFileOptions

## 作用

将 TLE 文件中属性重新设置给 TLE 对象。

## 语法

```
TLEFileOptions <SatObjectPath> (AddFile "<FilePath>")
```

## 补充说明

- 文件中必须有卫星数据与已存在卫星的 `SSCNumber` 匹配，并且参数与已存在卫星参数不相同

## 示例

::: details open **将 TLE 文件中属性重新设置给 TLE 对象**
```
TLEFileOptions */Satellite/Satellite1 AddFile "C:\Users\A411-2\Desktop\ATK_B\Bin\SGP4-VER.TLE"
```
:::
