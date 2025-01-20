import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function WorkHistory() {
  return (
    <>
      <ul>
        <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Kemet Electronics Oy, Vaihetyöntekijä/Tiiminvetäjä, 2006 -</li>
        <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Autogrilli Rasti Juntunen, kesätyö/vkonlopputyö, 2004-2005</li>
        <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Hotelli Ivalo, Karaoke-emäntä, 3kk, 2003</li>
        <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Ämmän Leipä, Kiireapulainen, 2002</li>
        <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Mannerheimin Lastensuojeluliitto, Lastenhoitaja, 1999-2002</li>
        <li><AcUnitIcon style={{ marginRight: "0.5em", color: "#ffdf22" }} />Kerttuojan Lomamökit, Leirintäalueen hoitaja, kesätyö, 1998-2001</li>
      </ul>
      <p>Kaikki työpaikat ovat osaltaan antaneet paljon hyvää harjoitusta asiakaspalvelusta ja tiimityöskentelystä, sekä kehittäneet uuden oppimisen taitojani. Historiani paljastaa myös sen, että olen aina ollut työtä pelkäämätön ja ahkera.</p>
    </>
  );
}

export default WorkHistory;