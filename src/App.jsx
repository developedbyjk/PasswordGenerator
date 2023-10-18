import React, { useRef } from 'react';

import './App.css'

function App() {
  
  const char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];
  
  
     const [pwd,setPwd]= React.useState("")
     const [numCheck,SetnumCheck] = React.useState(false)
     const [alphCheck,SetalphCheck] = React.useState(false)
     const [spclCheck,SetspclCheck] = React.useState(false)
     const[passLength,SetpassLength]= React.useState(8)
     const pwdRef = useRef(null);
     
    
       function generatePass(){
    
          let newPassword = '';
          let characters = '';
          
          if (numCheck) characters += "0123456789";
          if (alphCheck) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          if (spclCheck) characters += "~`!@#$%^&*()_-+={}[],|:;<>.?/";
          
           if (!characters) {
          // If no checkboxes are selected, generate password from default character set
          characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/";
           
           }
          
          for (let i = 0; i <passLength; i++) {
              newPassword += characters[Math.floor(Math.random() * characters.length)];
          }
          setPwd(newPassword);    
   
      }
  
  
      function copyToClipboard() {
        pwdRef.current.select();
        document.execCommand('copy');
      }

      return(
        <>
        <div className="container">

       
        <h1>Generate <br/>Passw<span id="ast">*</span>rd</h1>
        <br/>
     
        <div >

         <br/>
           
        <div class="textcopysection" 
        onClick={copyToClipboard}>
        <input id="gotpwd" 
        type='text' 
        value={pwd} 
        readOnly
        ref={pwdRef}
        
        />
        <i class="fa-regular fa-copy"></i>
        </div>

        <br/>  <br/>

        <div className="options">
            <label>
            <input
                type="checkbox"
                onChange={()=>SetnumCheck(!numCheck)}
                checked={numCheck}
              
              /> <span> Numbers</span> 
              </label>

              <label>
            <input 
                type="checkbox"
                onChange={()=>SetalphCheck(!alphCheck)}
                checked={alphCheck}
            
              /><span>Alphabet</span>
              </label>

              <label>
            <input 
                type="checkbox"
                onChange={()=>SetspclCheck(!spclCheck)}
              checked={spclCheck}
            
              /><span>Symbol</span>
            </label>


            </div>
         

        </div>
        <br/>  <br/>
        <p>Length : {passLength} </p>
        <br/>  <br/>
        <input
            type="range"
            min="1"
            max="20"
            value={passLength}
            onChange={(e)=>SetpassLength(parseInt(e.target.value))}
            id="custom-slider"/>
        
        <br/> <br/> <br/>
        <button onClick={generatePass} id="generate-btn" > <b>Generate</b> </button>
        
        </div>
        
        <footer>
        <a href='https://www.instagram.com/developedbyjk/'>@developedbyjk</a>
        </footer>
        </>
    )
}

export default App
