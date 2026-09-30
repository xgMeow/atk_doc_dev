# RealisticBallistic

## 作用

设置真实弹道导弹的轨迹参数

## 语法

```atk-command
RealisticBallistic <MissileObjectPath> Trajectory MissileType {LRM | MRM | SRM} <TimeValue> <StepSize> LnLatGeoD <LaunchLat> <LaunchLon> <LaunchAlt> ImLatGeoD <ImLat> <ImLon> <ImAlt>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<MissileObjectPath>` | 导弹对象完整路径，自场景 `*` 起写全，如 `*/Missile/Missile1`；路径参数的写法参见[命令语法约定](../../1-命令语法约定.md) |
| `Trajectory` | 关键字，表示按弹道设置导弹轨迹 |
| `MissileType` | 导弹类型的切换关键字，其后须紧跟导弹类型的取值 |
| `{LRM \| MRM \| SRM}` | 导弹类型，取值见下表 |
| `<TimeValue>` | 弹道的起始时刻，取值单位由当前 Connect 的 `Date` 单位设置决定 |
| `<StepSize>` | 弹道轨迹的步长，取值单位由当前 Connect 的 `Time` 单位设置决定 |
| `LnLatGeoD` | 弹道发射点位置的关键字，其后须依次给出 `<LaunchLat>`、`<LaunchLon>`、`<LaunchAlt>` 三项 |
| `<LaunchLat>`、`<LaunchLon>` | 发射点的大地纬度、经度，取值单位由当前 Connect 的 `Angle` 单位设置决定 |
| `<LaunchAlt>` | 发射点的高程，取值单位由当前 Connect 的 `Distance` 单位设置决定 |
| `ImLatGeoD` | 弹道落点位置的关键字，写法与 `LnLatGeoD` 相同，其后依次给出 `<ImLat>`、`<ImLon>`、`<ImAlt>` 三项 |
| `<ImLat>`、`<ImLon>` | 落点的大地纬度、经度，取值单位由当前 Connect 的 `Angle` 单位设置决定 |
| `<ImAlt>` | 落点的高程，取值单位由当前 Connect 的 `Distance` 单位设置决定 |

`MissileType` 的取值如下。

| `取值` | 说明 |
|------|------|
| `LRM` | 远程弹道弹 |
| `MRM` | 中程弹道弹 |
| `SRM` | 近程弹道弹 |

注意事项：

- 带单位的参数，其取值单位由当前 Connect 的单位设置决定，并非固定值：`<TimeValue>` 按 `Date` 单位输入，`<StepSize>` 按 `Time` 单位输入，纬经度按 `Angle` 单位输入，高程按 `Distance` 单位输入。各单位量纲的可选单位参见[常用单位格式](../../2-参数值格式/单位格式.md)。
- `<TimeValue>` 内部含空格，必须整体用双引号括起来，如 `"5 Aug 2026 06:02:00.00"`；日期时间的填写格式参见[日期时间格式](../../2-参数值格式/日期时间格式.md)。
- 参数顺序必须严格遵循语法定义，不可调换；`LnLatGeoD`、`ImLatGeoD` 两组位置参数都不可省略。

## 示例

::: details open **设置中程弹道导弹的弹道参数**

```
RealisticBallistic */Missile/Missile1 Trajectory MissileType MRM "5 Aug 2026 06:02:00.00" 20.0 LnLatGeoD 12 -63 1.0 ImLatGeoD 26 -15 0.2
```

- `*/Missile/Missile1`：导弹对象完整路径
- `Trajectory`：关键字，表示按弹道设置导弹轨迹
- `MissileType`：导弹类型的切换关键字
- `MRM`：导弹类型取值，中程弹道弹
- `"5 Aug 2026 06:02:00.00"`：弹道的起始时刻，字符串内部含空格，须用双引号括起来
- `20.0`：弹道轨迹的步长，取值单位由当前 Connect 的时间单位设置决定
- `LnLatGeoD 12 -63 1.0`：弹道发射点位置，依次为大地纬度 12、经度 -63、高程 1.0
- `ImLatGeoD 26 -15 0.2`：弹道落点位置，依次为大地纬度 26、经度 -15、高程 0.2

:::
