import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'

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
