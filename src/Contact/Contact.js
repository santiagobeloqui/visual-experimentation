import React, {useEffect} from 'react';
import './Contact.css';

const Contact = ()=>{         
    let points = [];
    let counter = 0;
    let maxSize = 100;
    let opacity = 0;
    let canvasOpacity = 1;
    let goRight = true;
    let goDown = true;
    useEffect(()=>{
        const canvas = document.getElementById('contact-canvas');
        // canvas.width = window.innerWidth * 0.45;
        // canvas.height = window.innerHeight * 0.5; 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        const context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width, canvas.height);  
        for(let i=0; i < 500; i++){
            points.push(
                {
                    initialX: Math.random() * ((canvas.width / 2 + 20) - (canvas.width / 2 - 20)) + (canvas.width / 2 - 20),
                    initialY : Math.random() * ((canvas.height / 2 + 20) - (canvas.height / 2 - 20)) + (canvas.height / 2 - 20),
                    xGoRight: Math.random() > 0.5,
                    yGoDown: Math.random() > 0.5

                }
            )
        }
        window.requestAnimationFrame(draw);
    });    
    const draw = ()=>{        
        const canvas = document.getElementById('contact-canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width, canvas.height);   
        for(let i = 0; i < points.length; i++){
            context.beginPath();
            context.arc(points[i]['initialX'], points[i]['initialY'], 2, 0, Math.PI * 2, false);
            context.fillStyle = '#e5e500';
            context.fill();
        }
        for(let point of points){
            if(point.initialX >= canvas.width || point.initialX <= 0 || point.initialY >= canvas.height || point.initialY <= 0){
                point.initialX = canvas.width / 2;
                point.initialY = canvas.height / 2;
            }
            point.initialX = point.xGoRight? point.initialX + Math.random() * 50: point.initialX - Math.random() * 50;
            point.initialY = point.yGoDown? point.initialY + Math.random() * 50: point.initialY - Math.random() * 50;
            
        }
        setTimeout(()=>{
            window.requestAnimationFrame(draw);
        }, 30)
    }

    return (
        <div className="contact">
            <div className="contact-title-wraper">
                <h1>This is the Contact Title</h1>
            </div>
            <canvas id="contact-canvas" className="contact-canvas"/>
        </div>
    );
}

export default Contact;