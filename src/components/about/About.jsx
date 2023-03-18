import React from "react";
import "./about.css";
// import ME from "../../assets/dtgk-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { GiOpenFolder } from "react-icons/gi";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";
function createData(name, content) {
  return {
    name, content

  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
              </Typography>
              <div>
                {row.content}
              </div>
            </Box>
          </Collapse>
        </TableCell>

      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const About = () => {
  const rows = [
    createData('Marvel Studios', 'Marvel Studios, LLC[5] (originally known as Marvel Films from 1993 to 1996) is an American film and television production company that is a subsidiary of Walt Disney Studios, a division of Disney Entertainment, which is owned by the Walt Disney Company. Marvel Studios produces the Marvel Cinematic Universe (MCU) films and series, based on characters that appear in Marvel Comics publications.'),
    createData('History', "The Marvel Cinematic Universe (MCU) is the product of 80 years' worth of successes, failures, and ideas made by people who couldn't let go of their Marvel visions, for better or for worse."),
    createData('Award', "The Academy of Motion Picture Arts and Sciences officially awarded Marvel Studios five nominations for Black Panther: Wakanda Forever. Among these was the studio's first-ever nomination in an acting category at the 95th Academy Awards."),
  ];

  return (
    <section className="mold" id="about">
      <h5>Get To Know</h5>
      <h2>About Marvel Studios</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://vtv1.mediacdn.vn/zoom/700_438/2015/marvel-studios-1423554845115.jpg" alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            MagnusJS(Dinh Bach) is a software engineer in Ho Chi Minh city, Vietnam. He enjoys building software with Reactjs, Nextjs, typing safe code with Typescript or dealing with algorithms and data structures.
          </p>
          <TableContainer className="about__content coll">
            <Table aria-label="collapsible table">
              <TableHead>
              </TableHead>
              <TableBody className="text">
                {rows.map((row) => (
                  <Row className="p" key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>




      </div>
    </section>
  );
};

export default About;
