import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images2.thanhnien.vn/Uploaded/hoangthang/2019_02_28/tuongoscar_giaioscar_anhshutterstock_IWLN.jpg?width=500')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Blog() {
  const classes = useStyles();

  return (
    <div >
      <AppBar className={classes.appBar} position="static">

      </AppBar>
      <Box className={classes.hero}>
        <Box>Oscar News</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid  item xs={12} sm={6} md={4}>
            <Card className={classes.card + " card" }>
              <CardActionArea >
                <CardMedia
                  className={classes.media }
                  image="https://images2.thanhnien.vn/528068263637045248/2023/2/24/will-smith-slap-16772314598721450731601.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Oscar lập đội xử lý khủng hoảng
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Sau sự kiện diễn viên Will Smith tát Chris Rock ngay trên sân khấu lễ trao giải Oscar năm 2022 khiến khán giả ngỡ ngàng.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      ThanhNien
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Feb 1, 2023
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card + " card" }>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.tuoitre.vn/tto/r/2016/06/30/24718069-1467279435.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Hội đồng chấm giải Oscar
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Ban tổ chức giải Oscar tuyên bố mời gần 700 thành viên mới, chủ yếu là nữ giới và người da màu, vào hội đồng bỏ phiếu giải thưởng điện ảnh danh giá này.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                     TuoiTre
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card + " card" }>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://vnn-imgs-a1.vgcloud.vn/cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2022/03/giai-Oscar/tuong-oscar.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Vì sao tượng vàng Oscar giá 1$

                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Tượng vàng Oscar là giải thưởng danh giá nhất ở Hollywood, nhưng đây chính là lý do tại sao nó chỉ trị giá 1 đô-la.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      vietNamNet
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card + " card" }>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://vtv1.mediacdn.vn/thumb_w/650/2022/9/19/phim-de-cu-oscars-1663559946200300471142-crop-16635599627391305590187.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Lượng người xem sụt giảm                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  các thành viên của Viện Hàn lâm đang họp bàn để nhằm tạo nên sự khác biệt và sức sống mới cho lễ trao giải danh giá Oscar 2023
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      VTV
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          {/* <Pagination count={10} /> */}
        </Box>
      </Container>
    </div>
  );
}

export default Blog;