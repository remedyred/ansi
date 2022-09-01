# @snickbit/ansi

## Table of contents

### Interfaces

- [AnsiControls](interfaces/AnsiControls.md)
- [Styles](interfaces/Styles.md)

### Type Aliases

- [AnsiMethods](README.md#ansimethods)
- [AnsiRenderFn](README.md#ansirenderfn)
- [BackgroundColor](README.md#backgroundcolor)
- [CodePair](README.md#codepair)
- [Color](README.md#color)
- [Modifier](README.md#modifier)
- [StyleCategory](README.md#stylecategory)

### Variables

- [ansiStyles](README.md#ansistyles)

### Functions

- [ansiRegex](README.md#ansiregex)
- [generateStyleCodes](README.md#generatestylecodes)
- [stripAnsi](README.md#stripansi)

## Type Aliases

### AnsiMethods

Ƭ **AnsiMethods**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ansi` | [`AnsiRenderFn`](README.md#ansirenderfn) |
| `ansi16m` | [`AnsiRenderFn`](README.md#ansirenderfn) |
| `ansi256` | [`AnsiRenderFn`](README.md#ansirenderfn) |

___

### AnsiRenderFn

Ƭ **AnsiRenderFn**: (...`args`: `any`) => `string`

#### Type declaration

▸ (...`args`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`string`

___

### BackgroundColor

Ƭ **BackgroundColor**: ``"bgBlack"`` \| ``"bgBlackBright"`` \| ``"bgBlue"`` \| ``"bgBlueBright"`` \| ``"bgCyan"`` \| ``"bgCyanBright"`` \| ``"bgGray"`` \| ``"bgGreen"`` \| ``"bgGreenBright"`` \| ``"bgGrey"`` \| ``"bgMagenta"`` \| ``"bgMagentaBright"`` \| ``"bgRed"`` \| ``"bgRedBright"`` \| ``"bgWhite"`` \| ``"bgWhiteBright"`` \| ``"bgYellow"`` \| ``"bgYellowBright"``

___

### CodePair

Ƭ **CodePair**: [`number`, `number`]

___

### Color

Ƭ **Color**: ``"black"`` \| ``"blackBright"`` \| ``"blue"`` \| ``"blueBright"`` \| ``"cyan"`` \| ``"cyanBright"`` \| ``"gray"`` \| ``"green"`` \| ``"greenBright"`` \| ``"grey"`` \| ``"magenta"`` \| ``"magentaBright"`` \| ``"red"`` \| ``"redBright"`` \| ``"white"`` \| ``"whiteBright"`` \| ``"yellow"`` \| ``"yellowBright"``

___

### Modifier

Ƭ **Modifier**: ``"bold"`` \| ``"dim"`` \| ``"hidden"`` \| ``"inverse"`` \| ``"italic"`` \| ``"overline"`` \| ``"reset"`` \| ``"strikethrough"`` \| ``"underline"``

___

### StyleCategory

Ƭ **StyleCategory**<`Allowed`\>: `Partial`<[`AnsiControls`](interfaces/AnsiControls.md)\> & `Partial`<[`AnsiMethods`](README.md#ansimethods)\> & `Record`<`Allowed`, [`CodePair`](README.md#codepair)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Allowed` | extends `string` |

## Variables

### ansiStyles

• `Const` **ansiStyles**: [`Styles`](interfaces/Styles.md)

## Functions

### ansiRegex

▸ **ansiRegex**(`onlyFirst?`): `RegExp`

Ansi regular expression

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `onlyFirst` | `boolean` | `false` |

#### Returns

`RegExp`

___

### generateStyleCodes

▸ **generateStyleCodes**(): `StyleCodes`

#### Returns

`StyleCodes`

___

### stripAnsi

▸ **stripAnsi**(`text`): `string`

Remove ansi escape codes from a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`
