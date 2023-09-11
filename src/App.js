import './App.css';
import {db,auth} from './firebase.js';
import {useEffect, useState} from 'react';
import Post from './Post';
import Header from "./Header";




function App() {

    const [user,setUser] = useState();

    const [posts,setPosts] = useState([]);



    useEffect(()=>{

        auth.onAuthStateChanged(function(val){
          setUser(val.displayName);
        })


       db.collection('posts').orderBy('timestamp','desc').onSnapshot(function(snapshot){
          setPosts(snapshot.docs.map(function(document){
            return {id:document.id,info:document.data()}
          }))
       })

    },[])



  return (

    <div className="App">

    <Header setUser={setUser} user={user}></Header>
     
      {
        posts.map(function(val){

          return (

            <Post user={user} info={val.info} id={val.id} />

          )

        })
      }

      
    </div>
  );
}

export default App;
