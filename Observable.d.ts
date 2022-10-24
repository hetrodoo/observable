export default class Observable<T> {
    constructor(value: T);

    public get value(): T;

    public set value(newValue: T);

    public subscribe(listener: (value: T) => void);

    public unsubscribe(listener: (value: T) => void);
}
