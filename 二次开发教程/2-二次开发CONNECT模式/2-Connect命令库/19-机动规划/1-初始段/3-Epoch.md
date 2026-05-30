## Epoch
 

作用：为初始段设置轨道历元

用法： 

```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.Epoch <Value> <Unit>
```

说明： `Unit` 支持 `UTCG`, `EpSec`, `Sec`, `EpMin`, `Min`

注意：获得此属性值暂未实现

举例：
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Epoch 86400 EpSec
```

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Epoch "2 Feb 2023 14:14:14.144" UTCG
```
