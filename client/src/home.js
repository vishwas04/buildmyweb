// import './home.css';
import React from "react";
// { Component }
// import axios from 'axios';
// const fs = require('fs');

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filess:null,
            file: "",
            x:0
        };
        this.setRef=(el)=>{this.myRef=el};
        this.handleImagePreview = this.handleImagePreview.bind(this);
        this.handleImagePreview1 = this.handleImagePreview1.bind(this);
        // this.handleImageUpload = this.handleImageUpload.bind(this);
    }


    // handleImageUpload(uploadEvent) {
    //     uploadEvent.preventDefault();
    //     const formData = new FormData();
    //     formData.append("file",this.state.file);

    //     fetch('http://localhost:5000/input',{
    //         mode: 'cors',
    //         method:'POST',
    //         body:formData
    //       })
    //       .then((response) => {
    //           if(response.status==200)
    //             console.log(response.json);
    //         })
              
    //         // window.location.href ="http://localhost:3000"
    //   .catch((error) => {
    //     console.log(error)
    //   });


    // }

    handleImagePreview1(previewEvent) {
        
        this.setState({ filess: previewEvent.target.files }) 
    }
    handleImagePreview(previewEvent) {
        // fs.readFile('/Users/vishwas/Desktop/a/a.csv', 'utf8', function (err, data) {
        //     var dataArray = data.split(/\r?\n/);
        //     console.log(dataArray);
        //   });
        this.setState({ x: this.state.x + 1 })  
        // console.log(this.state.x)
        // console.log(this.state.filess.length)
        if(this.state.filess!=null)
        {
            if(this.state.x!==this.state.filess.length)
            {
                this.myRef.innerHTML=this.state.filess[this.state.x].name;
                this.setState({

                        file: URL.createObjectURL(this.state.filess[this.state.x])
                    })
            }
            else
            {
                this.setState({x: 0 }) ;
                this.myRef.innerHTML=this.state.filess[0].name;
                this.setState({
                    file: URL.createObjectURL(this.state.filess[0])
                })
            }
        }
        else
        {
            alert("image upload plez")
        }
       
    }
    

    render() {
        return (
            <div>
            <style>{'body { background-color: #fff1a1; }'}</style>
            <h1 id="home_h1">BUILD MY WEB</h1>
            <form action="http://localhost:5000/input" method="post" enctype="multipart/form-data"> 
                <input id="home_file" type="file" className="button-78" accept="image/*" name="file" onChange={this.handleImagePreview1}  multiple/>    
                <h3   ref={this.setRef}></h3>
                <button id="home_prev" type="button" className="button-78"  onClick={this.handleImagePreview}>Preview</button>
                <button id="home_submit" className="button-78" type="submit" >Build</button>
                <img id="home_img" className="button-62"  src={this.state.file} alt="Upload image -> Preview -> Build" width="500" height="600"/>
            </form> 
            
            </div>
        )
    }

}

export default ImageUpload;

// {/* */}onChange={this.handleImagePreview}
// {/* */}


// handleImagePreview(previewEvent) {
    //     for (let i = 0; i < previewEvent.target.files.length; i++) { 
    //         this.setState({
    //             file: this.state.file.concat(URL.createObjectURL(previewEvent.target.files[i]))
    //         })
    //       }
        
    // }



    // action="http://localhost:5000/input" method="post" enctype="multipart/form-data"