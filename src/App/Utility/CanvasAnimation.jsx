import React, { useEffect, useRef } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const runningRef = useRef(false);
  const frameRef = useRef(1);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const trailsRef = useRef([]);

  const E = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const initialize = (t) => {
      document.removeEventListener("mousemove", initialize);
      document.removeEventListener("touchstart", initialize);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("touchmove", onMouseMove);
      document.addEventListener("touchstart", onTouchStart);
      onMouseMove(t);
      createTrails();
      startAnimation();
    };

    const createTrails = () => {
      trailsRef.current = [];
      for (let i = 0; i < E.trails; i++) {
        trailsRef.current.push(
          new Trail({ spring: 0.45 + 0.025 * (i / E.trails) })
        );
      }
    };

    const startAnimation = () => {
      runningRef.current = true;
      requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      runningRef.current = false;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (event) => {
      const { clientX, clientY, touches } = event;
      const { x, y } = mousePosRef.current;
      if (touches) {
        mousePosRef.current.x = touches[0].pageX;
        mousePosRef.current.y = touches[0].pageY;
      } else {
        mousePosRef.current.x = clientX;
        mousePosRef.current.y = clientY;
      }
      event.preventDefault();
    };

    const onTouchStart = (event) => {
      if (event.touches.length === 1) {
        mousePosRef.current.x = event.touches[0].pageX;
        mousePosRef.current.y = event.touches[0].pageY;
      }
    };

    const animate = () => {
      if (runningRef.current) {
        context.globalCompositeOperation = "source-over";
        context.fillStyle = "transperant";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = "lighter";
        context.strokeStyle = "#322486";
        context.lineWidth = 1;

        for (let i = 0; i < E.trails; i++) {
          const trail = trailsRef.current[i];
          trail.update();
          trail.draw(context);
        }

        frameRef.current++;
        requestAnimationFrame(animate);
      }
    };

    class Oscillator {
      constructor({ phase = 0, offset = 0, frequency = 0.001, amplitude = 1 }) {
        this.phase = phase;
        this.offset = offset;
        this.frequency = frequency;
        this.amplitude = amplitude;
        this.value = 0;
      }

      update() {
        this.phase += this.frequency;
        this.value = this.offset + Math.sin(this.phase) * this.amplitude;
        return this.value;
      }
    }

    class Trail {
      constructor({ spring }) {
        this.spring = spring + 0.1 * Math.random() - 0.05;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];

        for (let i = 0; i < E.size; i++) {
          this.nodes.push({
            x: mousePosRef.current.x,
            y: mousePosRef.current.y,
            vx: 0,
            vy: 0,
          });
        }
      }

      update() {
        let t = this.spring;
        let e = this.nodes[0];
        e.vx += (mousePosRef.current.x - e.x) * t;
        e.vy += (mousePosRef.current.y - e.y) * t;

        for (let i = 0; i < this.nodes.length; i++) {
          e = this.nodes[i];
          if (i > 0) {
            const prev = this.nodes[i - 1];
            e.vx += (prev.x - e.x) * t;
            e.vy += (prev.y - e.y) * t;
            e.vx += prev.vx * E.dampening;
            e.vy += prev.vy * E.dampening;
          }
          e.vx *= this.friction;
          e.vy *= this.friction;
          e.x += e.vx;
          e.y += e.vy;
          t *= E.tension;
        }
      }

      draw(context) {
        let t, e;
        let n = this.nodes[0].x;
        let i = this.nodes[0].y;
        context.beginPath();
        context.moveTo(n, i);

        for (let a = 1; a < this.nodes.length - 2; a++) {
          t = this.nodes[a];
          e = this.nodes[a + 1];
          n = 0.5 * (t.x + e.x);
          i = 0.5 * (t.y + e.y);
          context.quadraticCurveTo(t.x, t.y, n, i);
        }

        t = this.nodes[this.nodes.length - 2];
        e = this.nodes[this.nodes.length - 1];
        context.quadraticCurveTo(t.x, t.y, e.x, e.y);
        context.stroke();
        context.closePath();
      }
    }

    document.addEventListener("mousemove", initialize);
    document.addEventListener("touchstart", initialize);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", startAnimation);
    window.addEventListener("blur", stopAnimation);

    resizeCanvas();

    return () => {
      document.removeEventListener("mousemove", initialize);
      document.removeEventListener("touchstart", initialize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onMouseMove);
      document.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", startAnimation);
      window.removeEventListener("blur", stopAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
};

export default CanvasAnimation;
