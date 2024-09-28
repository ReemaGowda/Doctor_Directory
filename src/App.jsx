/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import data from "./TemplateData.json";
import "./style.css";

const App = () => {
  const [profiles, updateProfiles] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardioloogy",
      rating: 4.8,
      profilePic:
        "https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_640.png",
      phone: "342-223-90",
      email: "jondeo@gmail.com",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Radiology",
      rating: 2.8,
      profilePic:
        "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-doctor-hand-painted-female-doctor-png-image_1158135.jpg",
      phone: "398-263-90",
      email: "janeSwith@gmail.com",
    },
    {
      id: 3,
      name: "Dr. kouen kim",
      specialty: "Dermotology",
      rating: 9.8,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZRgcK5yBqagQ1PAp3DVhiDd93NcXTHIvAA&s",
      phone: "212-989-10",
      email: "kouenkim@gmail.com",
    },
    {
      id: 4,
      name: "Dr.jack jonas",
      specialty: "General",
      rating: 2.8,
      profilePic:
        "https://cdn.pixabay.com/photo/2017/01/31/22/06/doctor-2027615_1280.png",
      phone: "398-223-70",
      email: "jackjons@gmail.com",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div>
        <div className="templateContainer">
          <div className="searchInput_Container">
            <input
              id="searchInput"
              type="text"
              placeholder="Search here..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className="template_Container">
            <div></div>

            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.location.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.specialty.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />

                    <div>
                      Name : <h3>{val.name}</h3>
                      {/* specialty:    <h2>{val.specialty}</h2>
                     location : <h2>{val.location}</h2>
                   Rating:   <h2>{val.rating}</h2> */}
                      Phone : <h2>{val.phone}</h2>
                      Email : <h2>{val.email}</h2>
                    </div>
                    {/* <p className="price">${val.price}</p> */}
                  </div>
                );
              })}
          </div>
        </div>
        <h2>Doctor Detail Modal:</h2>
      </div>
      <div className="profile-card">
        {profiles.map((profile) => {
          return (
            <Card
              key={profile.id}
              id={profile.id}
              name={profile.name}
              specialty={profile.specialty}
              rating={profile.rating}
              profilePic={profile.profilePic}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
