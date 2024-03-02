import { useState, React } from 'react'; 
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Projects from './Projects';

function Navbar (){

    const [value, setValue] = useState("Fribago");
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
      return (
        <>
        <TabContext value={value}>
          <TabList className="navLinks" value={value} onChange={handleChange} aria-label="my projects choosing tabs">
            <Tab href= "#jumpToContent" label="Fribago" icon={ <img src="img/Fribago/fribago_logo.ico" alt="Fribago logo"/>} iconPosition='end' value="Fribago" style={{ fontSize: '1.5em', fontWeight: 600, fontFamily: '"Baloo Paaji 2"', color: '#7cffd5', padding: 0 }}/>
            <Tab href= "#jumpToContent" label="Matopeli" value="Matopeli" style={{ fontWeight: 600, fontFamily: 'Honk', letterSpacing: '2px' }}/>
          </TabList>
          <TabList className="navLinks2" value={value} onChange={handleChange} aria-label="third projects choosing tabs">
            <Tab href= "#jumpToContent" icon={ <img src="img/Kirjanpitaja/kirjanpitaja_logo.png" alt="Kirjanpitäjä logo" height="45" backgroundcolor="#98B252"/>}  value="Kirjanpitaja"/>
            <Tab href= "#jumpToContent" label="Onnenpyörä" className='multicolorText' value="Onnenpyora" style={{ fontWeight: 600 }}/>
          </TabList>
          <TabList className="navLinks3" value={value} onChange={handleChange} aria-label="third projects choosing tabs">
            <Tab href= "#jumpToContent" label="IPA Konevuokraamo" value="IpaKonevuokraamo" style={{ fontWeight: 600, color: "#fb9d10", textShadow: "1px 1px 2px black", fontFamily: "Quantico" }}/>
            <Tab href= "#jumpToContent" label="Portfolio" value="Portfolio" style={{ fontWeight: 600, color: "var(--lessBrightYellow" }}/>
          </TabList>
          <hr id="jumpToContent"></hr>
          <TabPanel value="Matopeli"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Onnenpyora"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Fribago"><Projects projectName={value} /></TabPanel>
          <TabPanel value="IpaKonevuokraamo"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Kirjanpitaja"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Portfolio"><Projects projectName={value} /></TabPanel>
        </TabContext>
        </>
      );
}

export default Navbar;