import React, { useState } from 'react';
import './DropDown.css'

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("Option 1");

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const data = {
      "Option 1": {
        heading: " About India",
        subheadings: [
          { title: "January", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." },
          { title: "February", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." }
        ]
      },
      "Option 2": {
        heading: " About france",
        subheadings: [
          { title: "January", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." },
          { title: "February", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." }
        ]
      },
      "Option 3": {
        heading: "About china",
        subheadings: [
          { title: "January", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." },
          { title: "February", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." }
        ]
      },
      "Option 4": {
        heading: "About London",
        subheadings: [
          { title: "January", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." },
          { title: "February", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula at nibh aliquet fermentum." }
        ]
      }
    };
  

  return (
    <div className="dropdown-container">
         
         <div>
 <span className='me-2 ' style={{fontSize:'20px'}}>Updated News</span>
  <select className="dropdown " value={selectedOption} onChange={handleChange}>
    <option value="Option 1">India</option>
    <option value="Option 2">France</option>
    <option value="Option 3">China</option>
    <option value="Option 4">London</option>
  </select>
  
</div>

 
    <div className="sidebar shadow">
      <h2>{data[selectedOption].heading}</h2>
      {data[selectedOption].subheadings.map((subheading, index) => (
        <div key={index}>     
        <div className="dot"></div>
        <div className="vertical-line"></div>
          <h4  className='text-danger'>{subheading.title}</h4>
          <p className='text-success'>{subheading.content}</p>
        </div>
      ))}
    </div>
  </div>

  );
}

export default Dropdown;
