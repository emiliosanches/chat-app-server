export class InvalidValue extends Error {
    constructor(
        public fields: string[]
    ) {
        super("Invalid fields.");
    }
}