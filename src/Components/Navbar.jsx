import { useState, React } from 'react'; 
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Projects from './Projects';

function Navbar (){

    const [value, setValue] = useState("Fribago");
  
    const handleChange = (event, newValue) => {
      console.log(event.target.selected);
      event.target.classList.add("box_shadow");
        setValue(newValue);
    };
  
      return (
        <>
        <TabContext value={value}>
          <TabList className="navLinks" value={value} onChange={handleChange} aria-label="my projects choosing tabs">
            <Tab label="Matopeli" value="Matopeli" style={{ fontSize: '1.2em', fontWeight: 600 }}/>
            <Tab label="Onnenpyörä" value="Onnenpyora" style={{ fontSize: '1.2em', fontWeight: 600 }}/>
            <Tab label="Fribago" value="Fribago" style={{ fontSize: '1.2em', fontWeight: 600 }}/>
          </TabList>
          <TabList className="navLinks2" value={value} onChange={handleChange} aria-label="second projects choosing tabs">
            <Tab label="IPA Konevuokraamo" value="IpaKonevuokraamo" style={{ fontSize: '1.2em', fontWeight: 600 }}/>
            <Tab label="Kirjanpitäjä" value="Kirjanpitaja" style={{ fontSize: '1.2em', fontWeight: 600 }}/>
            <Tab label="Portfolio" value="Portfolio" style={{ fontSize: '1.2em', fontWeight: 600 }}/>
          </TabList>
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