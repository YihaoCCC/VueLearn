<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    render() {
        const increment = () => this.counter ++
        const decrement = () => this.counter --
        const counterTest = 0
        return (
            <div>
                <h2>利用jsx写vue</h2>
                {counterTest}
                {this.counter}
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
        )
    },
}
</script>