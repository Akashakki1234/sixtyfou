import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react'


export default function Navbar() {
const [navitem,setnavitem]= useState(true)
 
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
  
    const [currentDate, setCurrentDate] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }, []);
  
    const tick = () => {
      setTime(new Date());
    };
 
    const getGreeting = () => {
        const hour = time.getHours();
        if (hour >= 5 && hour < 12) {
          return 'Good morning';
        } else if (hour >= 12 && hour < 17) {
          return 'Good afternoon';
        } else {
          return 'Good evening';
        }
      };
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav-bg">
  <div className="container-fluid">
    <div>
    <h3 className="navbar-brand ms-5 text-light" href="#">{getGreeting()}, Srikanth</h3>
    <p className='p-0 ms-5 text-light'>You have subscribed the retail app</p>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item">
          <a className="nav-link text-light" href="#"> <i class="fa-regular fa-calendar me-2"></i> <span> Today, {date } {month}</span> </a>  
        </li>
        <li className="nav-item ms-2">
          <a className="nav-link text-light" href="#"><i class="fa-regular fa-clock me-2"></i><span>{time.toLocaleTimeString()}</span></a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link text-light" href="#"><i class="fa-regular fa-bell" onClick={e=>{alert('No Notifications')}}></i></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<div className='side-content'> 
<div className={`side-container ${navitem?"navitem":"" }  `}>
    <div className='option1 nav-options mb-3 ' onClick={e=>setnavitem(!navitem)}>
        <i class="fa-solid fa-arrow-rotate-right p-2" ></i>
        <h4>menu</h4>
     </div>

     <div className='option1 nav-options '>
        <i class="fa-solid fa-magnifying-glass"></i>
        <h4>Search</h4>
     </div>
     <div className='option1 nav-options'>
     <i class="fa-regular fa-heart"></i>
        <h4>Favourite</h4>
     </div>
     <div className='option1 nav-options'>
     <i class="fa-regular fa-comment"></i>
        <h4>Comment</h4>
     </div>

     <div className='option1 nav-options'>
     <i class="fa-solid fa-truck-fast"></i>
        <h4>Truck</h4>
     </div> 
      <div className='option1 nav-options'>
      <i class="fa-regular fa-handshake"></i>
        <h4>Shake Hand</h4>
     </div> 
      <div className='option1 nav-options'>
      <i class="fa-solid fa-chalkboard"></i>
        <h4>Moniner</h4>
     </div> 
      <div className='option1 nav-options'>
      <i class="fa-solid fa-volume-xmark"></i>
        <h4>Volume</h4>
     </div>
       {/* <div className='option1 nav-options mt-1'>
       <i class="fa-solid fa-skull-crossbones"></i>
        <h4>Dont's</h4>
     </div> */}
       <div className='option1 nav-options mt-4'>
       <i class="fa-solid fa-gear"></i>
        <h4>Settings</h4>
     </div>
</div>
</div>
    <div>
    <div className="card-container container " >
  <div className="card shadow">
    <div className='ms-3 mt-4'>
  <i class="fa-regular fa-folder-open" style={{color:'#53C3FC'}}></i>
 <h5 className='mt-3'>My Saved Library 1</h5>
  <p>dd-mm-yyyy</p>
  </div>
  </div>
  <div className="card shadow">
    <div className='ms-3 mt-4'>
  <i class="fa-regular fa-folder-open" style={{color:'#7071F7'}}></i>
 <h5 className='mt-3'>My Saved Library 1</h5>
  <p>dd-mm-yyyy</p>
  </div>

  </div>
  <div className="card shadow">
    <div className='ms-3 mt-4'>
  <i class="fa-regular fa-folder-open" style={{color:'#FB515C'}}></i>
 <h5 className='mt-3'>My Saved Library 1</h5>
  <p>dd-mm-yyyy</p>
  </div>

  </div>
  <div className="card shadow">
    <div className='ms-3 mt-4'>
  <i class="fa-regular fa-folder-open"style={{color:'#FC815D'}} ></i>
 <h5 className='mt-3'>My Saved Library 1</h5>
  <p>dd-mm-yyyy</p>
  </div>

  </div>
  <div className="card shadow">
    <div className='ms-3 mt-4'>
  <i class="fa-regular fa-folder-open" style={{color:'#16CB8E'}}></i>
 <h5 className='mt-3'>My Saved Library 1</h5>
  <p>dd-mm-yyyy</p>
  </div>

  </div>
 
</div>


    </div>
    </div>
  )
}
