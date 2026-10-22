---
title: Basic Definitions
index: false
---

# Basic Definitions

The definition configuration of a FigureOfMerit consists of four parts:

- [**Definition**](#definition): Selects the FigureOfMerit type, the statistical parameter type, and type-specific parameters.
- [**Satisfaction Condition**](#satisfaction-condition): Further filters valid coverage windows on top of visibility constraints.
- [**Invalid Data Indicator**](#invalid-data-indicator): Assigns a specified invalid value when certain conditions are not met.
- [**Valid Value Limits**](#valid-value-limits): Applies additional upper and lower limits to the computation results.

![FigureOfMerit Basic Property Configuration](../../../../../../zh/03-基础使用指南/03-对象管理/02-属性配置/品质因子/01-基本定义/media/README/image-20260922105431775.png)

## Definition

The Definition tab is used to select the FigureOfMerit type and specify computation parameters. The main configuration items are:

- **Type**: Selects from the 16 FigureOfMerit types.
- **Statistical Parameter Type**: Selects the statistic to compute; different FigureOfMerit types offer different statistic options.
- **Type-Specific Parameters**: Some types require additional settings, for example:
  - Revisit Time: sets the minimum multiplicity.
  - Dilution of Precision: selects the sub-method and computation type.

## Satisfaction Condition

The Satisfaction Condition is used to further filter coverage windows on top of visibility constraints.

For example, if you need to analyze periods when the analysis object is "simultaneously covered by at least 2 resources", set the **Type** to "N Asset Coverage", enable the Satisfaction Condition, and set it to "Greater Than" a valid value of "2".

## Invalid Data Indicator

Some Figures of Merit require specific conditions to be computable. When these conditions are not met, the system assigns a specified invalid value to distinguish "invalid" from "zero coverage".

For example, computing the Geometric Dilution of Precision requires at least 3-fold coverage. For periods with fewer than 3-fold coverage, the FigureOfMerit always displays the set invalid value.

## Valid Value Limits

Valid Value Limits provide constraints beyond those of the computation model. When the coverage satisfies the FigureOfMerit computation model but the result falls outside the range defined by **Valid Value Limits**, the value is treated as an invalid value.

::: tip How FigureOfMerit Results Are Output
After the analysis is complete, FigureOfMerit results can be output through **Data Reports** and **Chart Reports**. Some types also support display in the 2D/3D views as **Contours** or **Dynamic Data**.
:::
