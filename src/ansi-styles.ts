import {ANSI_BACKGROUND_OFFSET, ansiCodes, AnsiCodes, AnsiRenderFn, StyleCodes, Styles} from './common'

function wrapAnsi16(offset = 0): AnsiRenderFn {
	return (code: number): string => {
		return `\u001B[${code + offset}m`
	}
}

function wrapAnsi256(offset = 0): AnsiRenderFn {
	return (code: number): string => {
		return `\u001B[${38 + offset};5;${code}m`
	}
}

function wrapAnsi16m(offset = 0): AnsiRenderFn {
	return (red: number, green: number, blue: number): string => {
		return `\u001B[${38 + offset};2;${red};${green};${blue}m`
	}
}

function generateStyleCodes() {
	const codes = new Map()

	const styleCodes: StyleCodes = {...ansiCodes}

	for (const [groupName, group] of Object.entries(styleCodes)) {
		for (const [styleName, codePair] of Object.entries(group)) {
			styleCodes[styleName] = {
				open: `\u001B[${codePair[0]}m`,
				close: `\u001B[${codePair[1]}m`
			}

			group[styleName] = styleCodes[styleName]

			codes.set(codePair[0], codePair[1])
		}

		Object.defineProperty(styleCodes, groupName, {
			value: group,
			enumerable: false
		})
	}

	Object.defineProperty(styleCodes, 'codes', {
		value: codes,
		enumerable: false
	})

	styleCodes.color.close = '\u001B[39m'
	styleCodes.bgColor.close = '\u001B[49m'

	styleCodes.color.ansi = wrapAnsi16()
	styleCodes.color.ansi256 = wrapAnsi256()
	styleCodes.color.ansi16m = wrapAnsi16m()
	styleCodes.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET)
	styleCodes.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET)
	styleCodes.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET)

	return styleCodes
}

function styleFactory(): Styles {
	const styles = generateStyleCodes() as Styles

	// From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
	Object.defineProperties(styles, {
		rgbToAnsi256: {
			value(red, green, blue) {
				// We use the extended greyscale palette here, with the exception of
				// black and white. normal palette only has 4 greyscale shades.
				if (red === green && green === blue) {
					if (red < 8) {
						return 16
					}

					if (red > 248) {
						return 231
					}

					return Math.round((red - 8) / 247 * 24) + 232
				}

				return 16 +
					36 * Math.round(red / 255 * 5) +
					6 * Math.round(green / 255 * 5) +
					Math.round(blue / 255 * 5)
			},
			enumerable: false
		},
		hexToRgb: {
			value(hex) {
				const matches = /(?<colorString>[\da-f]{6}|[\da-f]{3})/i.exec(hex.toString(16))
				if (!matches) {
					return [0, 0, 0]
				}

				let {colorString} = matches.groups

				if (colorString.length === 3) {
					colorString = colorString.split('').map(character => character + character)
						.join('')
				}

				const integer = Number.parseInt(colorString, 16)

				return [integer >> 16 & 0xFF, integer >> 8 & 0xFF, integer & 0xFF]
			},
			enumerable: false
		},
		hexToAnsi256: {
			value: hex => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
			enumerable: false
		},
		ansi256ToAnsi: {
			value(code) {
				if (code < 8) {
					return 30 + code
				}

				if (code < 16) {
					return 90 + (code - 8)
				}

				let red
				let green
				let blue

				if (code >= 232) {
					red = ((code - 232) * 10 + 8) / 255
					green = red
					blue = red
				} else {
					code -= 16

					const remainder = code % 36

					red = Math.floor(code / 36) / 5
					green = Math.floor(remainder / 6) / 5
					blue = remainder % 6 / 5
				}

				const value = Math.max(red, green, blue) * 2

				if (value === 0) {
					return 30
				}

				let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red))

				if (value === 2) {
					result += 60
				}

				return result
			},
			enumerable: false
		},
		rgbToAnsi: {
			value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
			enumerable: false
		},
		hexToAnsi: {
			value: hex => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
			enumerable: false
		}
	})

	return styles
}

export {Styles, StyleCategory, BackgroundColor, Color, Modifier, AnsiControls, AnsiMethods, CodePair, AnsiRenderFn} from './common'
export const ansiStyles = styleFactory()
