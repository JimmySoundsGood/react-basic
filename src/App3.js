import './index.css'

const myDiv = {
    color: 'red',
    fontSize: '50px'
}

function App3() {
    return (
        <div className="foo">
            <div style={myDiv}>test</div>
        </div>
    )
}

export default App3;
