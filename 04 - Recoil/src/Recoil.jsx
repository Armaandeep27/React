import {RecoilRoot, atom, useRecoilValue, useSetRecoilState} from 'recoil';

const counter = atom({
    default : 0,
    key : 'counter'
})

function Recoil(){

    console.log('whole app re-rendered')
    
    return (
        <RecoilRoot>
            <Count />
            <Increase />
            <Decrease />
        </RecoilRoot>
    )
}

function Count(){

    console.log('count re-rendered')
    const count = useRecoilValue(counter);
    return (
        <h1>{count}</h1>
    )
}

function Increase(){

    console.log('increase re-rendered')
    const setCount = useSetRecoilState(counter);
    function increase(){
        setCount(cur => cur + 1)
    }

    return (
        <button onClick={increase}>Increase</button>
    )
}

function Decrease(){

    console.log('decrease re-rendered')
    const setCount = useSetRecoilState(counter);
    function Decrease(){
        setCount(cur => cur - 1)
    }
    
    return (
        <button onClick={Decrease}>Decrease</button>
    )
}

export default Recoil

// only count re-renders now cuz recoil handles atoms 

// also in react theres smth called memo in which if u wrap something it will 
// only re-render that component if a prop changes or a state variable inside
// it changes