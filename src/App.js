// import axios from "axios";
import {getImages} from './utils/imagesAxios';
import "./App.module.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from './components/Button/Button';

export default class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
      getImages()
      .then((images) => this.setState({ images }))
      .catch((err) => console.log(err));
  }

  render() {
      const {images} = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery images={images} />
        <Button />
      </>
    );
  }
}
