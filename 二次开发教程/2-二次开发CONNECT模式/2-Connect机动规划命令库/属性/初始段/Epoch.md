# Epoch

## 作用

为初始段设置轨道历元

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.Epoch <Value> <Unit>
```

## 补充说明

- `Unit` 支持 `UTCG`, `EpSec`, `Sec`, `EpMin`, `Min`

::: warning 注意
获得此属性值暂未实现
:::

## 示例

::: details open **使用 EpSec 单位设置轨道历元**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Epoch 86400 EpSec
```
:::

::: details open **使用 UTCG 格式设置轨道历元**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Epoch "2 Feb 2023 14:14:14.144" UTCG
```
:::
