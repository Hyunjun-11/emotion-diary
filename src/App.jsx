import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'

import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'

// 1. "/" : 모든일기를 조회하는 index페이지
// 2. "/new" : 새로운 일기를 작성하는 CREATE
// 3. "/diary" : 일기를 상세조회하는 diary페이지

function App() {

  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  }

  return (
    <>
      {/* <div>
        <img src={"/emotion1.png"} alt="" />
        <img src={"/emotion2.png"} alt="" />
        <img src={"/emotion3.png"} alt="" />
        <img src={"/emotion4.png"} alt="" />
        <img src={"/emotion5.png"} alt="" />
      </div> */}

      <div>
        <img src={emotion1} alt="" />
        <img src={emotion2} alt="" />
        <img src={emotion3} alt="" />
        <img src={emotion4} alt="" />
        <img src={emotion5} alt="" />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New페이지 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
