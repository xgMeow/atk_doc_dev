# Units_SetConnect

## 作用

设置Connect模式单位属性

## 用法

```
Units_SetConnect <AppOrScenPath> {Default | Internal | {Dimension} {Unit}... }
```

## 说明

- `{Dimension} {Unit}`请查看常用设置格式-常用单位格式
- Connect模式仅支持`{Dimension}`设置 `Date`,`Distance`,`Time`,`Angle`

## 举例

```
Units_SetConnect / Date "JDate"
```
