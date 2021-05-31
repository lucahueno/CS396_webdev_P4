function initMap() {
    // The location of Uluru
    // The map, centered at Uluru
    const map1 = new google.maps.Map(document.getElementById("map1"), {
      mapId: "24e5af6c19d8e70c",
      zoom: 15,
      center: { lat: 34.68138080733625, lng: 135.8232708524054 },
    });
    const map2 = new google.maps.Map(document.getElementById("map2"), {
        mapId: "24e5af6c19d8e70c",
        zoom: 17,
        center: { lat: 34.68505570778322, lng: 135.70649228748178 },
      });
    const map3 = new google.maps.Map(document.getElementById("map3"), {
      mapId: "24e5af6c19d8e70c",
      zoom: 16,
      center: { lat: 34.65671592680408, lng: 135.70644993267734 },
    });  
    // The marker, positioned at Uluru
    const marker1 = new google.maps.Marker({
      position: { lat: 34.67838080733625, lng: 135.8202708524054 },
      map: map1,
    });
    const marker2 = new google.maps.Marker({
      position: { lat: 34.68485570778322, lng: 135.70659228748178 },
      map: map2,
    });
    const marker3 = new google.maps.Marker({
      position: { lat: 34.65671592680408, lng: 135.70444993267734 },
      map: map3,
    });
}

  