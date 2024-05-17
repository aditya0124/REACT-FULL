import Video2 from './components/Video2';
let obj= {
   title:'hero',
   link:'https://images.unsplash.com/photo-1709582034820-d83c63ea4d0a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

function App() {
  return(<div className="container">
    
    <Video2 {...obj}> </Video2>
     
    <Video2 title="React" link="https://images.unsplash.com/photo-1559116315-702b0b4774ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtbXl8ZW58MHx8MHx8fDA%3D"> </Video2>
  <Video2 title="HTML" link="https://images.unsplash.com/photo-1709642717827-9621f2a978a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"> </Video2>
  <Video2 title="CSS" link="https://images.unsplash.com/photo-1709582034820-d83c63ea4d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"> </Video2>
  </div>
  )
}
export default App;
