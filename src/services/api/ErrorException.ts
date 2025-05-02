export class ErrorException extends Error {
    public readonly message: string = ''

    constructor(props: string) {
        super()
        this.message = props
    }
}