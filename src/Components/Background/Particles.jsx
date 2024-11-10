import React, { useEffect } from 'react';
import './Particles.css';

const Particles = () => {
    useEffect(() => {
        const numParticles = 10;
        const particlesContainer = document.getElementById('particles-container');

        // Remove existing particles if they exist (to prevent duplication on re-render)
        while (particlesContainer.firstChild) {
            particlesContainer.removeChild(particlesContainer.firstChild);
        }

        for (let i = 0; i < numParticles; i++) {
            let particle = document.createElement('div');
            particle.classList.add('particle');

            // Randomize particle size, position, and animation duration
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            particlesContainer.appendChild(particle);
        }
    }, []);

    return <div id="particles-container" className="particles-container"></div>;
};

export default Particles;
