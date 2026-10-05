import React from "react";
import AcUnitModule from '@mui/icons-material/AcUnit';

const AcUnitIcon = AcUnitModule?.default ?? AcUnitModule;

function Future() {
    return (
        <ul>
            <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Syvennän taitojani aloittamalla uusia projekteja.</li>
            <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Etsin aktiivisesti työtä ohjelmoinnin parissa.</li>
            <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Kehitän AI-kehitys taitojani.</li>
        </ul>
    )
}

export default Future;