import React,{useState} from 'react'

export default function About(props) {
    const change_textarea = (mode) =>{
        if(mode === 'dark'){
          return "black" ;
        }
        if(mode === 'light'){
          return "white"
        }
        if(mode === 'primary'){
          return "#0e0e60";
        }
         if(mode === 'success'){
          return "#074e07";
        }
      if(mode === 'danger'){
          return "#6a1313";
        }
        if(mode === 'warning'){
          return "#a4a410";
        }
      }
    const change_mode = (mode)=>{
    if(mode === 'dark')return 'light';
    if(mode === 'light')return 'dark';
    else{
      return 'light';
    }
  }
  return (
     <>
     
        {/* <div className={`container bg-${props.mode}` } style={{backgroundColor: change_textarea(props.mode)}}>
             <h1 className={`my-3 text-${change_mode(props.mode)}`}> About Us</h1>
                 <div className={`accordion `} id="accordionExample" >
                    <div className="accordion-item" style={{backgroundColor: change_textarea(props.mode)}}>
                        <h2 className="accordion-header" >
                        <button className={`accordion-button collapsed`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: change_textarea(props.mode),border:props.mode ==='light'?`2 px solid black`:'2px solid white'}}  >
                            <strong className={`text-${change_mode(props.mode)}`}>Analyse Your Text</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${change_mode(props.mode)}`}  >
                            TextUtils gives you a way to analyse your text quickly and efficiently, be it word count, character count anad may more functionality
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item " style={{backgroundColor: change_textarea(props.mode)}}>
                        <h2 className="accordion-header">
                        <button className={`accordion-button collapsed text-${change_mode(props.mode)}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{backgroundColor: change_textarea(props.mode),border:props.mode ==='light'?`2 px solid black`:'2px solid white'}}>
                           <strong> Free to Use</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${change_mode(props.mode)}`}  >
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.TextUtils reports the number of words, characters. Thus it is suitable for writing text with word.character limit.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor: change_textarea(props.mode)}}>
                        <h2 className="accordion-header">
                        <button className={`accordion-button collapsed text-${change_mode(props.mode)}`}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{backgroundColor: change_textarea(props.mode),border:props.mode ==='light'?`2 px solid black`:'2px solid white'} }>
                            <strong> Browser Compatible</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${change_mode(props.mode)}`}  >
                            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safasri, Opera. It suits to count characters in facebook, blog, books, document, pdf document,essays etc.
                        </div>
                        </div>
                    </div>
                </div>
           
        </div> */}
    </>
  )
}
