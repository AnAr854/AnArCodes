import { useState, React } from 'react'; 
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab';
import PersonIcon from '@mui/icons-material/Person';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function Navbar (props){

        const [value, setValue] = useState(0);
      
        const handleChange = (event, newValue) => {
            setValue(newValue);
            props.changeTab(newValue);
        };

    return (
        <Tabs className="navLinks" value={value} onChange={handleChange} aria-label="icon label tabs example">
          <Tab icon={<PersonIcon />} label="Minä" href="#aboutMe"/>
          <Tab icon={<DeveloperModeIcon />} label="Projektit" href="#myProjects"/>
          <Tab icon={<PersonPinIcon />} label="Linkit" href="#links"/>
        </Tabs>
      );
}
export default Navbar;