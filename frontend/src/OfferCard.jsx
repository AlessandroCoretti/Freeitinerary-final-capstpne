import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, CardActions } from "@mui/material";
import "./css/Cards.css";

function OfferCard() {
  return (
    <div className="row w-100 align-items-top justify-content-around px-1 px-md-3 mb-3">
      <div className="Title-content mt-2 mx-2 mx-md-3">
        <p className="m-0 p-0 fs-2 fw-semibold">Today's plan</p>
      </div>
      <Card className="mt-3 mx-3 col-12 col-sm-6 col-md-4 col-lg-3 shadow" sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.unsplash.com/photo-1531366599837-ce0c0e17657c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF1cm9yYSUyMGJvcmVhbGV8ZW58MHx8MHx8fDA%3D"
            alt="green iguana"
            className="rounded-top"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              10% discount on your next trip to Northern Lights
            </Typography>
            <Typography className="description" variant="body2" sx={{ color: "text.secondary" }}>
              The polar aurora is a phenomenon characterized visually by light bands which take on a wide range of shapes and colours, rapidly changing in time
              and space, usually of red-green-blue colour, called auroral arcs, caused by the interaction of charged particles (protons and electrons) of solar
              origin (solar wind) with the Earth’s ionosphere (atmosphere between 100-500 km): these particles excite atoms of the atmosphere which, when
              deactivated, emit light of various wavelengths. It is called aurora borealis if in the northern (boreal) hemisphere, while the name southern
              aurora refers to the analogue of the southern (southern) hemisphere.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card className="mt-3 mx-3 col-12  col-sm-6 col-md-4 col-lg-3 shadow " sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://plus.unsplash.com/premium_photo-1661964146949-a35b9ae06f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwcGFkb2NpYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="green iguana"
            className="rounded-top"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fly on one of the balloons that colors Cappadocia
            </Typography>
            <Typography className="description" variant="body2" sx={{ color: "text.secondary" }}>
              Wake up at dawn and get ready for a magical experience as the sky of Cappadocia fills with colours. Aboard a hot-air balloon, you will fly over
              surreal landscapes carved by the wind and time: fairytale valleys, fairy chimneys and ancient houses carved in the rock. Watch the sun rise among
              the rock formations and let yourself be enveloped by the quietness of flight, with a panoramic view that seems out of a dream. After landing,
              toast with a glass of champagne to celebrate an unforgettable adventure.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card className="mt-3 mx-3 col-12  col-sm-6 col-md-4 col-lg-3 shadow " sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://plus.unsplash.com/premium_photo-1661964146949-a35b9ae06f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwcGFkb2NpYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="green iguana"
            className="rounded-top"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fly on one of the balloons that colors Cappadocia
            </Typography>
            <Typography className="description" variant="body2" sx={{ color: "text.secondary" }}>
              Wake up at dawn and get ready for a magical experience as the sky of Cappadocia fills with colours. Aboard a hot-air balloon, you will fly over
              surreal landscapes carved by the wind and time: fairytale valleys, fairy chimneys and ancient houses carved in the rock. Watch the sun rise among
              the rock formations and let yourself be enveloped by the quietness of flight, with a panoramic view that seems out of a dream. After landing,
              toast with a glass of champagne to celebrate an unforgettable adventure.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card className="mt-3 mx-3 col-12  col-sm-6 col-md-4 col-lg-3 shadow " sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://plus.unsplash.com/premium_photo-1661964146949-a35b9ae06f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwcGFkb2NpYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="green iguana"
            className="rounded-top"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fly on one of the balloons that colors Cappadocia
            </Typography>
            <Typography className="description" variant="body2" sx={{ color: "text.secondary" }}>
              Wake up at dawn and get ready for a magical experience as the sky of Cappadocia fills with colours. Aboard a hot-air balloon, you will fly over
              surreal landscapes carved by the wind and time: fairytale valleys, fairy chimneys and ancient houses carved in the rock. Watch the sun rise among
              the rock formations and let yourself be enveloped by the quietness of flight, with a panoramic view that seems out of a dream. After landing,
              toast with a glass of champagne to celebrate an unforgettable adventure.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card className="mt-3 mx-3 col-12 col-sm-6 col-md-4 col-lg-3 shadow" sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.unsplash.com/photo-1520483937043-ff3d8ce309b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1Z2d5fGVufDB8MHwwfHx8MA%3D%3D"
            alt="green iguana"
            className="rounded-top"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Unleash your wits with a buggy tour of the dunes of Maspalomas
            </Typography>
            <Typography className="description" variant="body2" sx={{ color: "text.secondary" }}>
              Feel the adrenaline rush as you drive a buggy through the spectacular golden dunes of Maspalomas, in the heart of Gran Canaria. Glide between
              Desert landscapes that alternate with breathtaking views of the ocean, facing rugged terrain and sandy stretches that will test the your driving
              skills. During the route, you will have the opportunity to stop and take unique photos and breathe the freedom of the desert. A The perfect
              combination of adventure, nature and fun that will make your visit to Gran Canaria truly unforgettable.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card className="mt-3 mx-3 col-12 col-sm-6 col-md-4 col-lg-3 shadow" sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHwwfDB8fHww"
            alt="green iguana"
            className="rounded-top"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Discover the magical lights in the streets of Tokyo
            </Typography>
            <Typography className="description" variant="body2" sx={{ color: "text.secondary" }}>
              Immerse yourself in the vibrant energy of Tokyo as the sun sets and the city lights up in a thousand colours. Take an evening tour of the most
              iconic neighborhoods: from Shibuya, with its famous crossroads teeming with life, to Shinjuku, where glittering skyscrapers and hidden alleys
              offer a perfect mix between modernity and tradition. Explore the neon streets of Akihabara, a pop culture and technology haven, and take a break
              in a typical izakaya to sample some of the best local food. Tokyo at night is a symphony of lights and sounds that never ceases to amaze. aurora
              refers to the analogue of the southern (southern) hemisphere.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default OfferCard;
