import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';



export const Cards = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
    </div>
  )
}
