import React from 'react';
import Header from "./Header";
import CatNavBar from "./catNavBar";
import Body from "./Body";
import Footer from "./Footer"
import Modals from "./modal";

function LandingPage() {
  return(
  <div>
    <Header />
    <CatNavBar />
    <Body />
    <Footer />
    {/* <Modals /> */}
  </div>);
}

// import axios from 'axios';
// class LandingPage extends React.Component {
//  //initialize an object's state in a class
//   constructor(props) {
//     super(props)
//       this.state = {
//         data: []
//               }
//       }
//       //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
//       componentDidMount(){
//         //get request
//         axios.get('https://lamp.ms.wits.ac.za/home/s2172765/clothing.php').then(res => 
//         {
        
//         this.setState({data: res.data});
//            }); 
        
//         }
    
 
//   render() {
   
//     return (
     
//       <div className="maincontainer">
       
//         {/* <h1 className="mr-5 ml-5 mt-5">Therichpost.com</h1> */}
//         <div className="container mb-5 mt-5 text-left">
        
//         <table class="table table-hover">
//           <thead>
//             <tr>
//               <th>PRODUCT_ID</th>
//               <th>NAME</th>
//               <th>PRICE</th>
//               <th>DESCRIPTION</th>
//             </tr>
//           </thead>
//           <tbody>
//           {this.state.data.map((result) => {
//             return (
             
//                  <tr>
//                   <td>{result.PRODUCT_ID}</td>
//                   <td>{result.NAME}</td>
//                   <td>{result.PRICE}</td>
//                   <td>{result.DESCRIPTION}</td>
//                 </tr>
             
//             )
//           })}
           
            
//           </tbody>
//         </table>
       
            
//       </div>
     
//       </div>
     
// )
// };
// }

export default LandingPage;
