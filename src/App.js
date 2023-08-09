import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Spinner, Navbar, NavbarBrand, UncontrolledCarousel } from "reactstrap";
import { ActorsList } from "./components/actors/ActorsList";
import DropdownComponent from "./components/actors/DropdownComponent";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      actors: [],
      filterParam: "",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.fetchActors();
    }, 3000);
  }
  fetchActors = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en"
    );
    const data = await res.json();
    this.setState({ actors: data.results, isLoading: false });
  };
  handleFilter = (filterParam) => {
    this.setState({ filterParam: filterParam });
  };
  render() {
    const { isLoading, actors, filterParam } = this.state;
    let filteredData = actors;
    if (filterParam === "male") {
      filteredData = this.state.actors.filter((actor) => actor.gender === 2);
    } else if (filterParam === "female") {
      filteredData = this.state.actors.filter((actor) => actor.gender === 1);
    } else {
      filteredData = this.state.actors.sort(
        (a, b) => a.popularity - b.popularity
      );
    }
    return (
      <div className="App">
        <Navbar className="my-2" color="dark" dark>
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://mail.reachdevelopment.org/wp-content/uploads/2022/05/786-7865793_drama-mask-theatre-transparent-theatre-masks-clipart-hd.png"
              style={{
                height: 40,
                marginRight: "20px",
                
              }}
            />
            Welcome to our Actors API
          </NavbarBrand>
        </Navbar>

        <div className="carousel-wrapper">
          <UncontrolledCarousel
            items={[
              {
                altText: "Slide 1",
                caption: "Hollywood",
                key: 1,
                src: "https://griffithobservatory.org/wp-content/uploads/2021/12/cameron-venti-6QDvwq2Fjsc-unsplash-scaled.jpg",
              },
              {
                altText: "Slide 2",
                caption: "Movie Premiers",
                key: 2,
                src: "https://cdn.vox-cdn.com/thumbor/IeSzP2Y1-RlYo9xEVvluKFjAFxQ=/0x0:3840x2001/1200x675/filters:focal(1613x694:2227x1308)/cdn.vox-cdn.com/uploads/chorus_image/image/70569082/RRR_Still_5.36.jpg",
              },
              {
                altText: "Slide 3",
                caption: "Movie Tickets",
                key: 3,
                src: "https://www.pluggedin.com/wp-content/uploads/2023/04/nefarious-1024x587.jpg",
              },
            ]}
          />
        </div>
        <DropdownComponent handleFilter={this.handleFilter} />
        {isLoading ? (
          <div className="spinner">
            <Spinner>Loading...</Spinner>
          </div>
        ) : (
          <ActorsList actors={filteredData} />
        )}
      </div>
    );
  }
}

export default App;