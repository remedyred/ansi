import {ansiRegex, ansiStyles, generateStyleCodes, stripAnsi} from '../src'

const BLACK = '\u001b[30m'
const RED = '\u001b[31m'
const GREEN = '\u001b[32m'
const ANSI_STRING = `${RED} ${GREEN} ${BLACK}`


describe("ansiRegex", () => {
	it('should return an instance of RegExp', () => expect(ansiRegex()).toBeInstanceOf(RegExp))

	it('should have the g flag', () => expect(ansiRegex().flags).toBe('g'))

	it('(true) should NOT have the g flag', () => expect(ansiRegex(true).flags).toBe(''))

	it('should return the ansi string', () => {
		expect(ANSI_STRING.match(ansiRegex())).toStrictEqual([RED, GREEN, BLACK])
	})

	it('(true) should return the first ansi string', () => {
		expect(ansiRegex(true).exec(ANSI_STRING)[0]).toBe(RED)
	})
})

describe("stripAnsi", () => {
	it('should strip ansi from a string', () => {
		expect(stripAnsi(ANSI_STRING)).toBe('  ')
	})
})

describe('ansiStyles', () => {
	it('should have a color property', () => expect(ansiStyles.color).toBeDefined())
	it('should have a bgColor property', () => expect(ansiStyles.bgColor).toBeDefined())
	it('should have a modifier property', () => expect(ansiStyles.modifier).toBeDefined())
	it('should have a rgbToAnsi256 method', () => expect(ansiStyles.rgbToAnsi256).toBeInstanceOf(Function))
	it('should have a hexToRgb method', () => expect(ansiStyles.hexToRgb).toBeInstanceOf(Function))
	it('should have a hexToAnsi256 method', () => expect(ansiStyles.hexToAnsi256).toBeInstanceOf(Function))
	it('should have a ansi256ToAnsi method', () => expect(ansiStyles.ansi256ToAnsi).toBeInstanceOf(Function))
	it('should have a rgbToAnsi method', () => expect(ansiStyles.rgbToAnsi).toBeInstanceOf(Function))
	it('should have a hexToAnsi method', () => expect(ansiStyles.hexToAnsi).toBeInstanceOf(Function))
})

describe("generateStyleCodes", () => {
	it("generateStyleCodes should match snapshot", () => {
		expect(generateStyleCodes()).toMatchSnapshot()
	})
})
