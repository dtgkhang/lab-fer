import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DetailModal from "../DetailModal";
import './films.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import axios from "axios";

export default function FilmPresentation({ films }) {
  const [openModal, setOpenModal] = useState();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const getMoives = async () => {
    try {
      const response = await axios.get("https://640da1d1b07afc3b0db1f601.mockapi.io/api/movie")
      console.log(response);

      if (response.data) {
        console.log(response.data);
        setMovies(response.data)
      } else {
        // message.error(response.data.message);

      }
    } catch (err) {
      // message.error(err.message);

    }
  };
  // const handleOk = (openModal) => {
  //   navigate(`/detail/${openModal}`)
  //   setOpenModal(undefined)  };

  const handleCancel = () => {
    setOpenModal(undefined)
  };



  useEffect(() => {

    getMoives();

  }, []);
  return (
    <div className="container mt-5">
      <Grid container spacing={3}>
        {movies.map((film) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: 630 }}>
              <CardMedia
                sx={{ height: 450 }}
                image={film.Image}
                title={film.Title}
              />

              <CardContent className="background">
                <Typography variant="h5" gutterBottom component="div">
                  {film.Title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <p className='year'>{film.Year} - {film.Nation}</p>
                </Typography>
              </CardContent>

              <CardActions className='background' style={{ justifyContent: "center" }}>
                <Button variant="contained" onClick={() => setOpenModal(film.id)} size="small">Review</Button>
                <Button variant="contained" onClick={() => navigate(`/detail/${film.id}`)} size="small">Detail page</Button>
              </CardActions>


              <DetailModal img={film.Image} data={film.data}
                isModalOpen={openModal === film.id}
                handleOk={() => navigate(`/detail/${film.id}`)}
                handleCancel={handleCancel}
              />
            </Card>
          </Grid>
        ))}

      </Grid>
    </div>



  );
}
