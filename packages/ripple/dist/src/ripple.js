export const createRipple = (e, color = 'rgba(255, 255, 255, 0.7)', animationTime = 500) => {
    const container = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;
    let styleSheet = container.querySelector('style[ripple=true]');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.setAttribute('ripple', 'true');
        styleSheet.innerHTML = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
        container.appendChild(styleSheet);
    }
    const style = {
        width: (circle.style.height = `${diameter}px`),
        left: `${e.clientX - (container.offsetLeft + radius)}px`,
        top: `${e.clientY - (container.offsetTop + radius)}px`,
        position: 'absolute',
        borderRadius: '50%',
        transform: 'scale(0)',
        animation: `ripple ${animationTime}ms linear`,
        background: color,
    };
    for (const key in style) {
        circle.style[key] = style[key];
    }
    container.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, animationTime);
};
//# sourceMappingURL=ripple.js.map