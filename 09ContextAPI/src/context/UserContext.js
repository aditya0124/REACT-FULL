import React from "react";

const UserContext = React.createContext( );

export default UserContext

// here UserContext become  provvide and component inside it now access this global context here a snippet of provide format   
//<UserContext>
//    <Login/>
//    <Card>
//      <Data/>
//    </Card>
//  </UserContext>