import React, {useEffect} from 'react';
import './Contact.css';

const Contact = ()=>{         
    let points = [];
    useEffect(()=>{
        const canvas = document.getElementById('contact-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        const context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width, canvas.height);  
        for(let i=0; i < 500; i++){
            points.push(
                {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    velocity: 0.03,
                    radius: 0.3
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
            context.arc(points[i]['x'], points[i]['y'], points[i]['radius'], 0, Math.PI * 2, false);
            context.fillStyle = '#e5e500';
            context.fill();
        }
        for(let point of points){
            if(point.x >= canvas.width || point.x <= 0 || point.y >= canvas.height || point.y <= 0){
                point.x = Math.random() * canvas.width;
                point.y = Math.random() * canvas.height;
                point.radius = 0.05;
            }

            point.x =  point.x +  (point.x - canvas.width / 2) * point.velocity;
            point.y = point.y + (point.y - canvas.height / 2) * point.velocity;
            point.radius = point.radius < 5? point.radius += point.velocity: point.radius;
            
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