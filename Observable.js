class Observable {
    #internalValue = undefined;
    #value = undefined;
    #listeners = [];

    constructor(value) {
        this.#internalValue = value;
        this.#value = value;

        if (Array.isArray(this.#value)) {
            const props = ['concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'unshift', 'sort', 'splice'];
            let thisRef = this;

            props.forEach(prop => Object.defineProperty(this.#value, prop, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: function (...args) {
                    const result = Array.prototype[prop].apply(this, args);
                    thisRef.#dispatch(thisRef.#value);
                    return result;
                }
            }));
        } else if (typeof this.#value === 'object' && this.#value !== null) {
            this.#value = {};

            Object.getOwnPropertyNames(this.#internalValue).forEach(name => {
                Object.defineProperty(this.#value, name, {
                    get: () => {
                        return this.#internalValue[name];
                    },
                    set: (value) => {
                        this.#internalValue[name] = value;
                        this.#dispatch(this.#internalValue);
                    }
                });
            });
        }
    }

    get value() {
        return this.#value;
    }

    set value(newValue) {
        this.#value = newValue;
        this.#dispatch(this.#value);
    }

    #dispatch(value) {
        this.#listeners.forEach(callback => callback(value));
    }

    subscribe(listener) {
        this.#listeners.push(listener);
    }

    unsubscribe(listener) {
        const index = this.#listeners.indexOf(listener);
        this.#listeners.splice(index, 1);
    }
}

module.exports = Observable;
