---
title: 'Hotel Flamingos'
description: 'Hotel de prueba por excelencia'
date: 2018-11-14T19:02:50-07:00
draft: false
slider: {base: "https://res.cloudinary.com/itermotus/", pics: "assets/jonathonhotel/img/common/jonathon-hotel-general-fachada.jpg,assets/jonathonhotel/img/common/jonathon-hotel-general-exterior.jpg,assets/jonathonhotel/img/common/jonathon-hotel-general-terraza-vista-teatro.jpg"}
showBanners: true
keepAspectRatio: true
bannerFullWidth: true
---
<div class="container">
   <div class="row">
	   <div class="col-sm-7">
         <div class="mb-4">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus mattis venenatis. Praesent mattis sit amet nisi in facilisis. Nullam venenatis facilisis quam, non convallis risus eleifend et. Integer non pellentesque dolor, et elementum tortor. Sed orci eros, pulvinar ut posuere et, gravida vel neque</p>
            <p>Quisque eget quam quis mi sollicitudin suscipit. Mauris finibus, lorem vel blandit ornare, neque eros auctor eros, et tempor sapien nulla ac nisl. Etiam non metus in diam posuere suscipit. Morbi elementum mauris sit amet scelerisque hendrerit.</p>
            <a href="/servicios">Conoce más →</a>
         </div>
         <div class="row mb-4">
            <div class="col-6 col-lg-4 text-center">
               {{< iconAmenity name="Alberca" icon="pool" >}}
            </div>
            <div class="col-6 col-lg-4 text-center">
               {{< iconAmenity name="Terraza" icon="balcony" >}}
            </div>
            <div class="col-6 col-lg-4 text-center">
               {{< iconAmenity name="Desayuno" icon="food" >}}
            </div>
            <div class="col-6 col-lg-4 text-center">
               {{< iconAmenity name="Recepción 24h." icon="frontdesk" >}}
            </div>
            <div class="col-6 col-lg-4 text-center">
               {{< iconAmenity name="Ubicación" icon="location" >}}
            </div>
            <div class="col-6 col-lg-4 text-center">
               {{< iconAmenity name="Wifi gratuito" icon="wifi" >}}
            </div>
         </div>
         <div class="mb-4">
         {{< video youtubeId="-xAXYDfoDEU" base="//res.cloudinary.com/itermotus/" path="assets/residencelheritage/residence-lheritage-video.png">}}
         </div>
      </div>
      <div class="col-sm-5">
         {{< dealList items="1" isFluid="true" >}}
      </div>
   </div>
   <div class="list--fullpage">
      {{< media title="Eleifend rhoncus" base="//res.cloudinary.com/itermotus/" path="/assets/allritmocancun/img/portada-parque.png">}}
         <div class="badge badge-success mb-2">¡Lorem ipsum dolor sit amet!</div>
         <p>Quisque eget quam quis mi sollicitudin suscipit. Mauris finibus, lorem vel blandit ornare, neque eros auctor eros, et tempor sapien nulla ac nisl. Etiam non metus in diam posuere suscipit. Morbi elementum mauris sit amet scelerisque hendrerit.</p>
      {{< /media >}}
   </div>
   <div class="row">
      <div class="col-sm-5">
         {{< homeAmenity title="Habitaciones" url="/habitaciones" base="//res.cloudinary.com/itermotus/" path="/assets/jonathonhotel/img/rooms/mazatlan/jonathon-hotel-habitacion-mazatlan.jpg" >}}
         Morbi eleifend rhoncus
         {{< /homeAmenity >}}
      </div>
      <div class="col-sm-7">
         {{< homeAmenity title="Curabitur in dolor nec orci" url="/servicios" base="//res.cloudinary.com/itermotus/" path="/assets/jonathonhotel/img/common/jonathon-hotel-general-roof-pool.jpg" >}}
         Ut tincidunt et felis sit amet
         {{< /homeAmenity >}}
      </div>
   </div>
   <div class="row">
      <div class="col-sm-7">
         {{< homeAmenity title="Donec vitae" url="/servicios" base="//res.cloudinary.com/itermotus/" path="/assets/jonathonhotel/img/common/jonathon-hotel-general-terraza-bar.jpg" >}}
         Nullam tristique malesuada sem, ac cursus lectus rutrum
         {{< /homeAmenity >}}
      </div>
      <div class="col-sm-5">
         {{< homeAmenity title="Aliquam viverra" url="/servicios" base="//res.cloudinary.com/itermotus/" path="/assets/jonathonhotel/img/common/jonathon-hotel-restaurante-1.jpg" >}}
         Sed luctus arcu sed massa dapibus
         {{< /homeAmenity >}}
      </div>
   </div>
</div>
