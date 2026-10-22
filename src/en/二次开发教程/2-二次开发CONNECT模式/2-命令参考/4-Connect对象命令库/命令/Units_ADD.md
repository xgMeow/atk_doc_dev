---
groups: [Scenario]
---

# Units_ADD

## Description

Adds unit values, supporting time and various physical dimensions.

## Syntax

```atk-command
Units_ADD <ScenarioPath> {DimensionName} {Unit1} <Value1> {Unit2} <Value2>
```

## Additional Notes

- The first parameter `{DimensionName}` is the dimension on which the operation is based, for example `date` for date and time and `mass` for mass.

- It is followed by two operands in the "unit + value" form: `{Unit1} <Value1>` is the first group and `{Unit2} <Value2>` is the second group. `{Unit1}` and `{Unit2}` are the units used by the two operands respectively, and their values must belong to the dimension specified by `{DimensionName}`. For example, in `Units_ADD * mass kg 12.5 g 2500` the dimension is `mass`, and the units of the two operands are `kg` and `g` respectively.
- The two operands may use different units; the command converts them to a common unit before adding.
- The return value is the result of the addition, output in the unit currently set by the user; the unit set by the user can be queried with the `Units_Get` command. For example, in the `mass` dimension the result of `12.5 kg + 2500 g` is 15 kilograms, so the command outputs `15` if the mass unit is set to `kg`, and `15000` if it is set to `g`.

## Examples

::: details open **Add a date and a duration**

```
Units_ADD * date UTCG "1 Jul 2021 09:00:00.000" s 30
```

Adds 30 seconds to `1 Jul 2021 09:00:00.000`.

- `*`: the scenario path, representing the current scenario
- `date`: the dimension, indicating computation in date and time
- `UTCG`: the unit of the first operand, indicating UTC time
- `"1 Jul 2021 09:00:00.000"`: the value of the first operand; the date string contains spaces, so it must be enclosed in double quotes
- `s 30`: the second operand in "unit + value" form, that is, 30 seconds

:::

::: details open **Add two time values**

```
Units_ADD * date s 30 s 45
```

- `*`: the scenario path, representing the current scenario
- `date`: the dimension, indicating computation in time
- `s 30`: the first operand in "unit + value" form, that is, 30 seconds
- `s 45`: the second operand, that is, 45 seconds

:::

::: details open **Add two mass values**

```
Units_ADD * mass kg 12.5 g 2500
```

The two operands use different units (kilograms and grams), so the command converts them to a common unit before adding.

- `*`: the scenario path, representing the current scenario
- `mass`: the dimension, indicating computation in mass
- `kg 12.5`: the first operand in "unit + value" form, that is, 12.5 kilograms
- `g 2500`: the second operand, that is, 2500 grams

:::
