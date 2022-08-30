# Interface: Styles

## Hierarchy

- `StyleCodes`

  ↳ **`Styles`**

## Table of contents

### Properties

- [bgColor](Styles.md#bgcolor)
- [color](Styles.md#color)
- [modifier](Styles.md#modifier)

### Methods

- [ansi256ToAnsi](Styles.md#ansi256toansi)
- [hexToAnsi256](Styles.md#hextoansi256)
- [hexToRgb](Styles.md#hextorgb)
- [rgbToAnsi256](Styles.md#rgbtoansi256)

## Properties

### bgColor

• **bgColor**: [`StyleCategory`](../README.md#stylecategory)<[`BackgroundColor`](../README.md#backgroundcolor)\>

#### Inherited from

StyleCodes.bgColor

___

### color

• **color**: [`StyleCategory`](../README.md#stylecategory)<[`Color`](../README.md#color)\>

#### Inherited from

StyleCodes.color

___

### modifier

• **modifier**: [`StyleCategory`](../README.md#stylecategory)<[`Modifier`](../README.md#modifier)\>

#### Inherited from

StyleCodes.modifier

## Methods

### ansi256ToAnsi

▸ **ansi256ToAnsi**(`color`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`number`

___

### hexToAnsi256

▸ **hexToAnsi256**(`hex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`number`

___

### hexToRgb

▸ **hexToRgb**(`hex`): [`number`, `number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`number`, `number`, `number`]

___

### rgbToAnsi256

▸ **rgbToAnsi256**(`r`, `g`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

`number`
