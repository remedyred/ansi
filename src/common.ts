export type CodePair = [number, number]

export type Modifier = 'bold' | 'dim' | 'hidden' | 'inverse' | 'italic' | 'overline' | 'reset' | 'strikethrough' | 'underline'

export type Color = 'black' | 'blackBright' | 'blue' | 'blueBright' | 'cyan' | 'cyanBright' | 'gray' | 'green' | 'greenBright' | 'grey' | 'magenta' | 'magentaBright' | 'red' | 'redBright' | 'white' | 'whiteBright' | 'yellow' | 'yellowBright'

export type BackgroundColor = 'bgBlack' | 'bgBlackBright' | 'bgBlue' | 'bgBlueBright' | 'bgCyan' | 'bgCyanBright' | 'bgGray' | 'bgGreen' | 'bgGreenBright' | 'bgGrey' | 'bgMagenta' | 'bgMagentaBright' | 'bgRed' | 'bgRedBright' | 'bgWhite' | 'bgWhiteBright' | 'bgYellow' | 'bgYellowBright'

export type StyleCategory<Allowed extends string> = Partial<AnsiControls> & Partial<AnsiMethods> & Record<Allowed, CodePair>

export type AnsiRenderFn = (...args) => string

export type AnsiMethods = {
	ansi: AnsiRenderFn
	ansi256: AnsiRenderFn
	ansi16m: AnsiRenderFn
}

export interface AnsiControls {
	close: string
	open: string
}

export interface AnsiCodes {
	modifier: Record<Modifier, CodePair>
	color: Record<Color, CodePair>
	bgColor: Record<BackgroundColor, CodePair>
}

export interface StyleCodes {
	modifier: StyleCategory<Modifier>
	color: StyleCategory<Color>
	bgColor: StyleCategory<BackgroundColor>
}

export interface Styles extends StyleCodes {
	rgbToAnsi256(r: number, g: number, b: number): number
	hexToRgb(hex: string): [number, number, number]
	ansi256ToAnsi(color: number): number
	hexToAnsi256(hex: string): number
	hexToAnsi(hex: string): number
	rgbToAnsi(red, green, blue): number
}

export const ANSI_BACKGROUND_OFFSET = 10

// Setup gray and bgGray since they are used multiple times
const gray: CodePair = [90, 39]
const bgGray: CodePair = [100, 49]

export const ansiCodes: AnsiCodes = {
	modifier: {
		reset: [0, 0],
		// 21 isn't widely supported and 22 does the same thing
		bold: [1, 22],
		dim: [2, 22],
		italic: [3, 23],
		underline: [4, 24],
		overline: [53, 55],
		inverse: [7, 27],
		hidden: [8, 28],
		strikethrough: [9, 29]
	},
	color: {
		black: [30, 39],
		red: [31, 39],
		green: [32, 39],
		yellow: [33, 39],
		blue: [34, 39],
		magenta: [35, 39],
		cyan: [36, 39],
		white: [37, 39],
		gray,
		grey: gray,

		// Bright color
		blackBright: gray,
		redBright: [91, 39],
		greenBright: [92, 39],
		yellowBright: [93, 39],
		blueBright: [94, 39],
		magentaBright: [95, 39],
		cyanBright: [96, 39],
		whiteBright: [97, 39]
	},
	bgColor: {
		bgBlack: [40, 49],
		bgRed: [41, 49],
		bgGreen: [42, 49],
		bgYellow: [43, 49],
		bgBlue: [44, 49],
		bgMagenta: [45, 49],
		bgCyan: [46, 49],
		bgWhite: [47, 49],
		bgGray,
		bgGrey: bgGray,

		// Bright color
		bgBlackBright: bgGray,
		bgRedBright: [101, 49],
		bgGreenBright: [102, 49],
		bgYellowBright: [103, 49],
		bgBlueBright: [104, 49],
		bgMagentaBright: [105, 49],
		bgCyanBright: [106, 49],
		bgWhiteBright: [107, 49]
	}
}
