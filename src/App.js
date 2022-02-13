import axios from "axios";
import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    img: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://pixabay.com/api/?q=cat&page=1&key=25286831-c1746f19640ae946dcd0d7543&image_type=photo&orientation=horizontal&per_page=12"
      )
      .then((res) => this.setState({ img: res.data.hits }))
      .catch((err) => console.log(err));
  }

  render() {
      const {img} = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery img={img} />
      </>
    );
  }
}
