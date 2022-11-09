export interface Clickable {
	addEventListener<K extends 'click'>(
		type: K,
		listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
		options?: boolean | AddEventListenerOptions
	): void;
	removeEventListener<K extends 'click'>(
		type: K,
		listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
		options?: boolean | EventListenerOptions
	): void;
}

export type InputType =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'wee';

export type DeepRecord<K extends keyof any, T> =
	// DeepRecord<K, T> | T;
	{
		[P in K]: DeepRecord<K, T> | T;
	};

// Utility types
/**
 * Construct a type with the properties of T in type K set to optional.
 */
export type PartialBy<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

/**
 * Construct a type with the properties of T in type K set to required.
 */
export type RequiredBy<T, K extends keyof T> = Pick<Required<T>, K> & Omit<T, K>;

export type ValueOf<T extends Record<string | number | symbol, unknown>> = T[keyof T];
