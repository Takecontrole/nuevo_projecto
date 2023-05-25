const TopImage = () => {
  return (
                <div style={{
   height: "70vh", width:"100%",
   }}>
   <img src="../../images/K8mRmGxq-Untitled-design-2022-01-31T122555.161-1200x675.jpg"
   style={{
   height: "70vh", width:"100%", objectFit:"cover", objectPosition:"5% top",marginTop:"50px"}}
    />
         
         <div style={{margin:0,
   height: "200px",
   width: "330px",
   position: "relative",
   bottom:"+300px",
   marginLeft: "80px"}} className="d-none d-sm-block" >
         <p style={{color:"white",
fontSize:"35px",
textShadow:"0 0 8px black",
fontWeight:"600"}} >За облаками</p>
         <p style={{color:"white",
fontSize:"25px",
textShadow:"0 0 8px black",
fontWeight:"500"}} >Ограниченный выпуск</p>
         <div style={{display: "flex",
alignItems: "center",
width: "300px",
height: "70px"}}>
         <span style={{color:"white",
fontSize:"20px",
textShadow:"0 0 8px black",
marginRight: "20px"}} >Новая коллекция</span> 
         <button style={{border: "2px solid white",
color: "black",
fontSize:"20px",
width: "180px",
height: "50px",
padding: "10px",
backgroundColor: "white",
cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"}}>перейти</button>
         </div>
         </div>
         </div>
  )
}

export default TopImage;