import { useState, React } from 'react'; 
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Projects from './Projects';

function Navbar (){

    const [value, setValue] = useState("Matopeli");
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
      return (
        // TABLIST KAPEAMMAKSI MOBIILIISSA; SITTEN MOBINÄKYMÄT!!
        <TabContext value={value}>
          <TabList className="navLinks" value={value} onChange={handleChange} aria-label="my projects choosing tabs">
            <Tab label="Matopeli" value="Matopeli" />
            <Tab label="Onnenpyörä" value="Onnenpyora" />
            <Tab label="Fribago" value="Fribago" />
            <Tab label="IPA Konevuokraamo" value="IpaKonevuokraamo" />
            <Tab label="Kirjanpitäjä" value="Kirjanpitaja" />
            <Tab label="Tämä portfolio" value="Portfolio" />
          </TabList>

          <TabPanel value="Matopeli"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Onnenpyora"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Fribago"><Projects projectName={value} /></TabPanel>
          <TabPanel value="IpaKonevuokraamo"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Kirjanpitaja"><Projects projectName={value} /></TabPanel>
          <TabPanel value="Portfolio"><Projects projectName={value} /></TabPanel>
        </TabContext>
      );
}

export default Navbar;