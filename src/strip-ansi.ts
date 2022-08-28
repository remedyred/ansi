import {ansiRegex} from './ansi-regex'

/**
 * Remove ansi escape codes from a string
 * @param text
 */
export function stripAnsi(text: string): string {
	if (typeof text !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof text}\``)
	}

	return text.replace(ansiRegex(), '')
}
