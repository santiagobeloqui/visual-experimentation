import React, {useEffect} from 'react';
import './Home.css';

const Home = () => {
    let points = [];
    useEffect(()=>{
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth * 0.45;
        canvas.height = window.innerHeight * 0.5; 
        for(let i=0; i < 50; i++){
            points.push(
                {
                    initialX: Math.random() * canvas.width,
                    initialY : Math.random() * canvas.height,
                    xGoRight: Math.random() > 0.5,
                    yGoDown: Math.random() > 0.5
                }
            )
        }
        window.requestAnimationFrame(draw);
    }); 

    const draw = ()=>{
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width, canvas.height);   
        for(let i = 0; i < points.length; i++){
            context.beginPath();
            context.arc(points[i]['initialX'], points[i]['initialY'], 3, 0, Math.PI * 2, false);
            context.fillStyle = '#e5e500';
            context.fill();
            context.beginPath();
            context.moveTo(points[i]['initialX'], points[i]['initialY']);
            if(i + 1 < points.length){
                context.lineTo(points[i+1]['initialX'], points[i+1]['initialY']);
            } else{
                context.lineTo(points[0]['initialX'], points[0]['initialY']);
            }
            context.strokeStyle = 'rgba(229, 229, 0, 0.15)';
            context.stroke();
        }
        for(let point of points){
            if(point.initialX >= canvas.width){
                point.xGoRight = false;
            } else if(point.initialX <= 0){
                point.xGoRight = true;
            } 

            if(point.initialY >= canvas.height){
                point.yGoDown = false;
            } else if(point.initialY <= 0){
                point.yGoDown = true;
            } 
            point.initialX = point.xGoRight? point.initialX + 1: point.initialX - 1;
            point.initialY = point.yGoDown? point.initialY + 1: point.initialY - 1;
            
        }
        setTimeout(()=>{
            window.requestAnimationFrame(draw);
        }, 20)
    }
    return (
        <div className="home">
            <div className="title-wraper">
                <h1>This is a Home Title</h1>
            </div>
            <canvas id="canvas" />
        </div>
    );
}

export default Home;