import React, {useEffect} from 'react';
import './About.css';

const About = ()=>{         
    let points = [];
    let counter = 0;
    let maxSize = 100;
    let opacity = 0;
    let canvasOpacity = 1;
    let goRight = true;
    let goDown = true;
    useEffect(()=>{
        const canvas = document.getElementById('about-canvas');
        // canvas.width = window.innerWidth * 0.45;
        // canvas.height = window.innerHeight * 0.5; 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        const context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width, canvas.height);  
        for(let i=0; i < 20; i++){
            points.push(
                {
                    initialX: Math.random() * canvas.width,
                    initialY : Math.random() * canvas.height
                }
            )
        }
        window.requestAnimationFrame(draw);
    });    
    const draw = ()=>{        
        const canvas = document.getElementById('about-canvas');
        const context = canvas.getContext('2d');
        if (counter < maxSize) {
            for (let i = 0; i < points.length; i++) {
                context.beginPath();
                context.moveTo(points[i]['initialX'], points[i]['initialY']);
                if (i + 1 < points.length) {
                    context.lineTo(points[i + 1]['initialX'], points[i + 1]['initialY']);
                } else {
                    context.lineTo(points[0]['initialX'], points[0]['initialY']);
                }
                context.strokeStyle = `rgba(229, 229, 0, ${opacity})`;
                context.stroke();
            }
            for (let point of points) {
                point.initialX = goRight ? point.initialX + 3 : point.initialX - 3;
                point.initialY = goDown ? point.initialY + 3 : point.initialY - 3;

            }
            counter++;
            opacity = counter < maxSize / 2? opacity +=  1 / maxSize: opacity -=  1 / maxSize;
            canvasOpacity = canvasOpacity - 1 / maxSize
            document.getElementById('about-canvas').style.opacity = canvasOpacity;
            console.log
        } else{
            context.clearRect(0,0,canvas.width, canvas.height);   
            counter = 0;
            points = [];
            canvasOpacity = 1;
            opacity= 0;
            goRight = Math.random() > 0.5;
            goDown = Math.random() > 0.5;
            for(let i=0; i < 20; i++){
                points.push(
                    {
                        initialX: Math.random() * canvas.width,
                        initialY : Math.random() * canvas.height
                    }
                )
            }

        }
            

        
        setTimeout(()=>{
            window.requestAnimationFrame(draw);
        }, 50)
    }

    return (
        <div className="about">
            <div className="about-title-wraper">
                <h1>This is the About Title</h1>
            </div>
            <canvas id="about-canvas" className="about-canvas"/>
        </div>
    );
}

export default About;