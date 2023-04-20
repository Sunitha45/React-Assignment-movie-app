import './App.css';
import React,{useState} from "react";
const App=()=>{
    const[search,setSearch]=useState('');
    const[data,setData]=useState([]);
    const submitHandler= e =>{
        e.preventDefault();
        const download=url=>{
        fetch(`https://www.omdbapi.com/?s={search}&apikey=e319212b`).then(response=>{
           response.arrayBuffer().then(function(buffer){
                const url=window.URL.createObjecturl(new Blob([buffer]));
                const link=document.createElement("a");
                link.href=url;
                link.setAttribute("download","image.png");
                document.body.appendChild(link);
                link.click();
            });
        })
    .catch(err => {
            console.log(err);
        });
    };
    return(
        <>
            <div>
        <center>
    <h1>search your favorite movie</h1>
    <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} /><br/>
        <input type="submit" value="Search" />
    </form>
    <div className="row">
        {data.map(movie=>
        <div className="col-md-4">
            <div class="card" style={{"width":"18rem"}}>
                <img src={movie.Poster} class="card-img-top" alt={movie.Title}/>
                <div class="card-body">
                    <h4 className="card-title">{movie.Title}</h4>
                    <a href={movie.Poster} className="btn btn-primary" onclick={()=>download(movie.Poster)}>download poster</a>
                </div>
            </div>  
        </div>
        )}
    </div>
        </center>
    </div>
         </>
    )
        }  
}

        
    export default App;
        
        
       

