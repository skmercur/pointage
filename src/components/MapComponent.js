import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import firebase from "../config/FireBaseConfig";
import "mapbox-gl/dist/mapbox-gl.css";
export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2ttZXJjdXIiLCJhIjoiY2pzZ2V4ZWVoMDlpbTN5cGt6aG9ybG9kMCJ9.gM0FxuT6iOwSrRGpCjJOLA";
    this.state = {
      lng: 4.756171,
      lat: 36.054363,
      zoom: 10,
      sellsmans: [],
      markers: []
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.flyTo({
      center: [4.756171, 36.054363],

      speed: 0.4, // make the flying slow

      essential: true,
      zoom: 15
    });
    let sellsmans = [];
    var markers = [];
    let db = firebase.database().ref("position");
    db.on("value", snapshot => {
      let data = Object.values(snapshot.val());
      console.log("positions");
      console.log(snapshot.val());
      snapshot.forEach(sellsman => {
        if (sellsmans.length == 0) {
          let i = 0;
          Object.getOwnPropertyNames(snapshot.val()).forEach(sell => {
            console.log(sell);
            let van = data[i]?.van ? data[i]?.van : sell;
            sellsmans.push({
              van: van,
              lat: data[i].lat,
              lon: data[i].log,
              speed: data[i].speed,
              date: data[i].date ? data[i].date : "No date"
            });
            i++;
          });
        }
      });
      console.log(sellsmans);
      if (this.state.sellsmans.length == 0) {
        this.setState({ sellsmans: sellsmans });
      }
      console.log(this.state.sellsmans.length);
      if (this.state.sellsmans.length > 0) {
        markers.forEach(marker => {
          marker.remove();
        });
      }
      this.state.sellsmans.forEach(seller => {
        console.log(seller);
        var popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false
        }).setHTML(
          "<h3> VAN : " +
            seller.van +
            "</h3><h4> Vitesse : " +
            Math.round(seller.speed * 3.6) +
            "</h4><h4> Date : " +
            seller.date +
            "</h4>"
        );
        /*.setText(
            "Van " +
              seller.van +
              " Vitesse " +
              Math.round(seller.speed * 3.6) +
              " Km/h  " +
              seller.date
          )*/ var marker = new mapboxgl.Marker()
          .setLngLat([seller.lon, seller.lat])
          .setPopup(popup)
          .addTo(map);
        markers.push(marker);
      });
    });
  }
  render() {
    return (
      <div
        style={{ width: "100%", height: "100%", position: "fixed" }}
        ref={el => (this.mapContainer = el)}
      />
    );
  }
}
