import React from "react";
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
    workPlace: String,
    location: String,
    shortDescription: String,
    startYear: Number,
    endYear: Number,
  ) {
    return {
      workPlace,
      location,
      shortDescription,
      startYear,
      endYear,
      history: [
        {
          description: 'selitys',
        },
      ],
    };
  }

  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="right">{row.workPlace}</TableCell>
          <TableCell align="right">{row.location}</TableCell>
          <TableCell align="right">{row.shortDescription}</TableCell>
          <TableCell align="right">{row.startYear}</TableCell>
          <TableCell align="right">{row.endYear}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Tarkempi kuvaus
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tähän selitys</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  const rows = [
    createData('Kerttuojan Lomamökit', "Ivalo", "Leirintäalueen hoitaja", 1998, 2001),
    createData('Mannerheimin LastensuojeluLiitto', "Ivalo", "Lastenhoitaja",  1999, 2002),
    createData('Ämmän Leipä', "Ivalo", "Kiireapulainen",  2002, 2002),
    createData('Hotelli Ivalo', "Ivalo", "Karaoke-emäntä",  2003, 2003),
    createData('Autogrilli Rasti Juntunen', "Suomussalmi", "Grillityöntekijä", 2004, 2005),
    createData('Evox Rifa Oy / Kemet Electronics Oy', "Suomussalmi", "Vaihetyöntekijä", 2006, null),

  ];

function WorkHistory (){

    return (
        <>
         <TableContainer>
      <Table aria-label="collapsible table" style={{width: "90%", margin: "auto"}}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right" style={{fontWeight: "bold"}}>Työnantaja</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Paikkakunta</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Työnimike</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Aloitusvuosi</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Päättymisvuosi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>);
}

export default WorkHistory;